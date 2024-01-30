import { Button, IndeterminateCheckbox, Table } from '@/components'
import { useEffect } from 'react'
import cx from 'classnames'
import useTransactions from '@/hooks/useTransactions';
import { ICDelete, ICEdit } from '@/assets/icons';
import { useNavigate } from 'react-router-dom';
import Alert from '@/components/Alert';
import { useDeleteTransactionsMutation, useGetTransactionsQuery } from '@/store/transactionsApi';
import { mapTransactions } from '@/mapers/transactions';

const HomePage = () => {
  const navigate = useNavigate();
  const {
    method: {
      handelResetStatus,
    },
    data: {
      status,
      selectedId
    }
  } = useTransactions();

  const {data} = useGetTransactionsQuery();
  const [deleteTransaction, {isLoading, isSuccess, isError, reset}] = useDeleteTransactionsMutation();
  

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
              onClick={() => deleteTransaction(item.row.original.id)}
              className={cx('cursor-pointer', {'animate-bounce': isLoading && item.row.original.id === selectedId})}
              src={ICDelete}
            />
          </div>
        )
      }
      ,
    },
  ];

  useEffect(() => {
    // handelResolveGetTransactionsService();
    return handelResetStatus
  }, [])
  return (
    <>
      <Alert.Error
        isOpen={isError}
        message={status.message}
        onClick={reset}
      />
      <Alert.Success
        isOpen={isSuccess}
        message={status.message}
        onClick={reset}
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
        data={mapTransactions(data?.data)}
      />
    </>
  )
}

export default HomePage