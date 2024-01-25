import { resetStatus, resolvePostUserService } from "@/store/users/users.reducer";
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

  const handelResolvePostUserService = (payload: RegisterPayload) => {
    dispatch(resolvePostUserService(payload));
  }
  return {
    method: {
      handelResolvePostUserService,
      handleResetStatus,
    },
    data: {
      status
    }
  }
}

export default useRegister;