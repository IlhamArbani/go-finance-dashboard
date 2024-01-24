import React from 'react'
import cx from 'classnames';
import { Button, Input } from '@/components';
import { useForm } from 'react-hook-form';
import { TransactionsPayload } from '@/types';
import useTransactions from '@/hooks/useTransactions';
import Alert from '@/components/Alert';

const FormTransactionPage = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<TransactionsPayload>();
  const {
    method: {
      handelResolvePostTransactionService,
      handelResetStatus
    },
    data: {
      status,
    }
  } = useTransactions();

  const onSubmit = (data: TransactionsPayload) => {
    handelResolvePostTransactionService(data)
  }

  return (
    <>
      <Alert.Success
        isOpen={status.isSuccess}
        message={status.message}
        onClick={handelResetStatus}
      />
      <Alert.Error
        isOpen={status.isError}
        message={status.message}
        onClick={handelResetStatus}
      />
      <div className={cx('w-full bg-white rounded-md flex flex-col gap-y-4 shadow-md p-4')}>
        <h1 className={cx('font-bold text-xl')}>Add Transaction</h1>
        <Input
          name='name'
          placeholder='Transaction Name'
          register={register}
          required
          isError={errors.name}
        />
        <Input
          name='price'
          placeholder='Transaction Price'
          register={register}
          type='number'
          required
          isError={errors.price}
        />
        <Input
          name='date'
          placeholder='Transaction Date'
          register={register}
          required
          isError={errors.date}
          type='date'
        />
        <Input
          name='status'
          placeholder='Transaction Status'
          register={register}
          required
          isError={errors.status}
        />
        <div className={cx('flex justify-end')}>
          <Button
            text='Save Transaction'
            onClick={handleSubmit(onSubmit)}
            size='sm'
            isLoading={status.isLoading}
          />
        </div>
      </div>
    </>
  )
}

export default FormTransactionPage