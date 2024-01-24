import { resetStatus, resolveRegisterService } from "@/store/register/register.reducer";
import { useAppDispatch, useAppSelector } from "./useStore"
import { RegisterPayload } from "@/types";

const useRegister = () => {
  const dispatch = useAppDispatch();

  const {
    status,
  } = useAppSelector(state => state.register);

  const handleResetStatus = () => {
    dispatch(resetStatus());
  }

  const handelResolveRegister = (payload: RegisterPayload) => {
    dispatch(resolveRegisterService(payload));
  }
  return {
    method: {
      handelResolveRegister,
      handleResetStatus,
    },
    data: {
      status
    }
  }
}

export default useRegister;