import { LoginPayload } from "@/types";
import { useAppDispatch, useAppSelector } from "./useStore"
import { resetStatus, resolveLoginService, resolveLogoutService } from "@/store/auth/auth.reducer";

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

  const handelResolveLogoutService = () => {
    dispatch(resolveLogoutService())
  }

  return {
    method: {
      handelResolveLoginService,
      handelResetStatus,
      handelResolveLogoutService
    },
    data: {
      status,
    }
  }
}

export default useAuth;