import { Button, Table } from '@/components'
import React from 'react'
import cx from 'classnames'

const HomePage = () => {
  const columns = [
    {
      accessor: 'item',
      header: 'Item',
      cell: '',
    },
    {
      accessor: 'price',
      header: 'Price',
      cell: '',
    },
    {
      accessor: 'date',
      header: 'Date',
      cell: '',
    },
    {
      accessor: 'status',
      header: 'Status',
      cell: '',
    },
    {
      accessor: 'action',
      header: 'Action',
      cell: '',
    },
  ];
  return (
    <div className={cx('px-28 pt-24')}>
      <div className='flex justify-end mb-10'>
        <Button
          text='Add Transaction'
          onClick={() => {}}
          size='sm'
        />
      </div>
      <Table
        columns={columns}
        data={[]}
      />
    </div>
  )
}

export default HomePage