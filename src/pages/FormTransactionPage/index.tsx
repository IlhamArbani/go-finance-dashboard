import React, { useEffect } from 'react'
import cx from 'classnames';
import { Button, Input } from '@/components';
import { useForm } from 'react-hook-form';
import { TransactionsPayload } from '@/types';
import useTransactions from '@/hooks/useTransactions';
import Alert from '@/components/Alert';
import { useParams } from 'react-router-dom';

const FormTransactionPage = () => {
  const {id} = useParams();
  const {
    setValue,
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<TransactionsPayload>();
  const {
    method: {
      handelResolvePostTransactionService,
      handelResetStatus,
      handleResolveGetTransactionService,
      handelResolvePutTransactionService,
      handelResetDetailTransaction,
    },
    data: {
      status,
      detailTransaction,
    }
  } = useTransactions();

  const onSubmit = (data: TransactionsPayload) => {
    if(id) {
      handelResolvePutTransactionService(data, id)
    } else {
      handelResolvePostTransactionService(data)
    }
  }

  useEffect(() => {
    if(id){
      handleResolveGetTransactionService(id)
    }
    return handelResetDetailTransaction
  }, [])

  useEffect(() => {
    if(detailTransaction.name){
      setValue('name', detailTransaction.name);
      setValue('price', detailTransaction.price);
      setValue('date', detailTransaction.date);
      setValue('status', detailTransaction.status)
    }
  }, [detailTransaction])

  return (
    <>
      <Alert.Success
        isOpen={status.isSuccess && (status.service === 'post' || status.service === 'put')}
        message={status.message}
        onClick={handelResetStatus}
      />
      <Alert.Error
        isOpen={status.isError && (status.service === 'post' || status.service === 'put')}
        message={status.message}
        onClick={handelResetStatus}
      />
      <div className={cx('w-full bg-white rounded-md flex flex-col gap-y-4 shadow-md p-4')}>
        <h1 className={cx('font-bold text-xl')}>{`${id ? 'Edit' : 'Add'} Transaction`}</h1>
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
            text={`${id ? 'Update' : 'Save'} Transaction`}
            onClick={handleSubmit(onSubmit)}
            size='sm'
            isLoading={status.isLoading && (status.service === 'post' || status.service === 'put')}
          />
        </div>
      </div>
    </>
  )
}

export default FormTransactionPage