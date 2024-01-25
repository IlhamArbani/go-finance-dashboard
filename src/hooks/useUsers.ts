import { resetStatus, resolveGetUserService, resolvePostUserService } from "@/store/users/users.reducer";
import { useAppDispatch, useAppSelector } from "./useStore"
import { RegisterPayload } from "@/types";
import { userMap } from "@/mapers/users";

const useUsers = () => {
  const dispatch = useAppDispatch();

  const {
    status,
    user,
  } = useAppSelector(state => state.users);

  const handleResetStatus = () => {
    dispatch(resetStatus());
  }

  const handelResolvePostUserService = (payload: RegisterPayload) => {
    dispatch(resolvePostUserService(payload));
  }

  const handelResolveGetUserService = (id: string | null) => {
    if(id) {
      dispatch(resolveGetUserService(id))
    }
  }

  return {
    method: {
      handelResolvePostUserService,
      handleResetStatus,
      handelResolveGetUserService,
    },
    data: {
      status,
      user: userMap(user),
    }
  }
}

export default useUsers;