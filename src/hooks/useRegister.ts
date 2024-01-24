import { resolveRegisterService } from "@/store/register/register.reducer";
import { useAppDispatch, useAppSelector } from "./useStore"

const useRegister = () => {
  const dispatch = useAppDispatch();

  const {
    status,
  } = useAppSelector(state => state.register);

  const handelResolveRegister = (data: any) => {
    const payload = {
      username: data.username,
      email: data.email,
      password: data.password,
    }
    dispatch(resolveRegisterService(payload));
  }
  return {
    method: {
      handelResolveRegister,
    },
    data: {
      status
    }
  }
}

export default useRegister;