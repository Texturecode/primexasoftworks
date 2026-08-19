import { Fragment } from 'react'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Tagline } from '../components/Tagline'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const RootLayout = () => (
  <Fragment className="">
    <Tagline />
    <Navbar />
    <Outlet />
    <Footer />
    <TanStackRouterDevtools />
  </Fragment>
)

export const Route = createRootRoute({ component: RootLayout })