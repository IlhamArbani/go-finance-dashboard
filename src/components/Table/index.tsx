/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICSearch } from "@/assets/icons";
import { Column } from "@/types";
import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from "@tanstack/react-table";
import cx from 'classnames';
import { Input } from "..";

type Props = {
  columns: Column[],
  data: object[],
}

const Table = (props: Props) => {
  const columnHelper = createColumnHelper<any>();

  const columns = props.columns.map(column => {    
    return columnHelper.accessor(column.accessor, {
      header: typeof column.header === 'string' ? () => <span>{column.header}</span> : column.header,
      cell: column.cell === '' ? info => info.getValue() : column.cell,
    })
  })

  const table = useReactTable(
    {
      data: props.data,
      columns,
      getCoreRowModel: getCoreRowModel()
    }
  )

  return (
    <div className="w-full rounded-md  bg-white border-2">
      <div className={cx('flex justify-between p-3 text-gray-400 w-full')}>
        <div className={cx('md:w-1/4 w-3/4')}>
          <Input
            placeholder="Search Transaction"
            name="search"
          />
        </div>
        <img src={ICSearch}/>
      </div>
      <div className={cx('w-full overflow-x-auto')}>
        <table className="w-full">
          <thead>
          {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className={cx('bg-gray-200 border-t-2 border-gray-300')}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="text-left p-3 text-sm font-medium">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
          {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className={cx('bg-gray-100 border-y-2 border-gray-300')}>
                {row.getAllCells().map(cell => (
                  <td className="p-3 text-left" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <div className={cx('bg-white p-6')}></div>
        </table>
      </div>
    </div>
  )
}

export default Table