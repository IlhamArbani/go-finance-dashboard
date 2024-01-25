import { Button, IndeterminateCheckbox, Table } from '@/components'
import React, { useEffect } from 'react'
import cx from 'classnames'
import useTransactions from '@/hooks/useTransactions';
import { ICDelete, ICEdit } from '@/assets/icons';
import { useNavigate } from 'react-router-dom';
import Alert from '@/components/Alert';

const HomePage = () => {
  const navigate = useNavigate();
  const {
    method: {
      handelResolveGetTransactionsService,
      handelResetStatus,
      handelDeleteResolveTransactionService,
    },
    data: {
      transactions,
      status,
      selectedId
    }
  } = useTransactions();
  

  const columns = [
    {
      accessor: 'select',
      header: ({table}: any) => (
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      ),
      cell: ({row}: any) => (
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      ),
    },
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
      cell: (item: any) => {
        return (
          <div className={cx('flex gap-x-2')}>
            <div
              className={cx('md:rounded-full md:bg-gray-200 cursor-pointer flex items-center justify-center w-12 h-12 md:w-fit md:h-fit md:p-2')}
              onClick={() => navigate(`/transaction/${item.row.original.id}`)}
            >
              <img src={ICEdit}/>
            </div>
            <img
              onClick={() => handelDeleteResolveTransactionService(item.row.original.id)}
              className={cx('cursor-pointer', {'animate-bounce': status.isLoading && status.service === 'delete' && item.row.original.id === selectedId})}
              src={ICDelete}
            />
          </div>
        )
      }
      ,
    },
  ];

  useEffect(() => {
    handelResolveGetTransactionsService();
    return handelResetStatus
  }, [])
  return (
    <>
      <Alert.Error
        isOpen={(status.isError && status.service === 'delete')}
        message={status.message}
        onClick={handelResetStatus}
      />
      <Alert.Success
        isOpen={(status.isSuccess && status.service === 'delete')}
        message={status.message}
        onClick={handelResetStatus}
      />
      <div className='flex justify-end mb-10'>
        <Button
          text='Add Transaction'
          onClick={() => navigate('/transaction')}
          size='sm'
        />
      </div>
      <Table
        columns={columns}
        data={transactions}
      />
    </>
  )
}

export default HomePage