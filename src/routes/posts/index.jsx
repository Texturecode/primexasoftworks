import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'


export const Route = createFileRoute('/posts/')({
  component: RouteComponent,
})

const defaultData = [
  {
    name: {
      firstName: 'tanner',
      lastName: 'linsley',
    },
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    name: {
      firstName: 'tandy',
      lastName: 'miller',
    },
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    name: {
      firstName: 'joe',
      lastName: 'dirte',
    },
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
]

const columnHelper = createColumnHelper()

const columns = [
  {
    header: "First Name",
    accessorKey: 'name.firstName',
  },
  columnHelper.accessor((row) => row.name.lastName, {
    id: 'lastName',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('age', {
    header: () => 'Age',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('visits', {
    header: () => <span>Visits</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('progress', {
    header: 'Profile Progress',
    footer: (info) => info.column.id,
  }),
]


function RouteComponent() {

  const [data, _setData] = React.useState(() => [...defaultData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return <div className="p-2">
    <table className="min-w-full border-collapse block md:table border">
      <thead className="block md:table-header-group">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="border p-2 text-left block md:table-cell">
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="border block md:table-row-group">
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="border block md:table-row">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="border p-2 block md:table-cell">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}
