import { useEffect } from 'react'
import cx from 'classnames';
import { Button, Input } from '@/components';
import { useForm } from 'react-hook-form';
import { TransactionsPayload } from '@/types';
import Alert from '@/components/Alert';
import { useParams } from 'react-router-dom';
import { useGetTransactionQuery, usePostTransactionMutation, usePutTransactionMutation } from '@/store/transactionsApi';
import { mapDetailTransaction } from '@/mapers/transactions';

const FormTransactionPage = () => {
  const {id} = useParams();
  const {
    setValue,
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<TransactionsPayload>();

  const [
    postTransaction,
    {
    isError: isErrorCreate,
    isSuccess: isSuccessCreate,
    isLoading: isLoadingCreate,
    reset: resetCreate
  }] = usePostTransactionMutation();

  const [
    putTransaction,
    {
      isSuccess: isSuccessEdit,
      isError: isErrorEdit,
      isLoading: isLoadingEdit,
      reset: resetEdit
    }
  ] = usePutTransactionMutation();

  const {data} = useGetTransactionQuery(id, {skip: id ? false : true});

  const onSubmit = (data: TransactionsPayload) => {
    if(id) {
      putTransaction({payload: data, id})
    } else {
      postTransaction(data)
    }
  }

  useEffect(() => {    
    const detailTransaction = data ? mapDetailTransaction(data.data) : null;
    if(detailTransaction){
      setValue('name', detailTransaction.name);
      setValue('price', detailTransaction.price);
      setValue('date', detailTransaction.date);
      setValue('status', detailTransaction.status)
    }
  }, [data])

  return (
    <>
      <Alert.Success
        isOpen={id ? isSuccessEdit : isSuccessCreate}
        message={''}
        onClick={id ? resetEdit : resetCreate}
      />
      <Alert.Error
        isOpen={id ? isErrorEdit : isErrorCreate}
        message={''}
        onClick={id ? resetEdit : resetCreate}
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
            isLoading={id ? isLoadingEdit : isLoadingCreate}
          />
        </div>
      </div>
    </>
  )
}

export default FormTransactionPage