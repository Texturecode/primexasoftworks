import { createRoot } from 'react-dom/client'
import { TanStackRouterDevtoolsInProd } from '@tanstack/react-router-devtools'
import { createRouter, RouterProvider } from '@tanstack/react-router'

import './index.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <div>Custom 404: Page not found!</div>,
})

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
