/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICSearch } from "@/assets/icons";
import { Column } from "@/types";
import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from "@tanstack/react-table";
import cx from 'classnames';
import { Input } from "..";

type Props = {
  columns: Column[],
  data: object[],
  // pages: number,
  // activePage: number,
  // onNext: (page: number) => void,
  // onPrev: (page: number) => void,
  // onSelectPage: (page: number) => void,
  // onSelectLimit: (page: number) => void,
}

const Table = (props: Props) => {
  const columnHelper = createColumnHelper<any>();

  const columns = props.columns.map(column => {
    return columnHelper.accessor(column.accessor, {
      header: () => <span>{column.header}</span>,
      cell: info => info.getValue(),
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
      <div className={cx('flex justify-between p-3 text-gray-400')}>
        <div className={cx('w-1/4')}>
          <Input
            placeholder="Search Transaction"
            name="search"
          />
        </div>
        <img src={ICSearch}/>
      </div>
      <table className="w-full">
        <thead>
        {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className={cx('bg-gray-200')}>
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
            <tr key={row.id} className={cx('bg-gray-200 border-y-2')}>
              {row.getVisibleCells().map(cell => (
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
  )
}

export default Table