import { LoginPayload } from "@/types";
import { useAppDispatch, useAppSelector } from "./useStore"
import { resetStatus, resolveLoginService } from "@/store/auth/auth.reducer";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const {
    status,
  } = useAppSelector(state => state.auth);

  const handelResolveLoginService = (payload: LoginPayload) => {
    dispatch(resolveLoginService(payload))
  }

  const handelResetStatus = () => {
    dispatch(resetStatus());
  }

  return {
    method: {
      handelResolveLoginService,
      handelResetStatus
    },
    data: {
      status,
    }
  }
}

export default useAuth;