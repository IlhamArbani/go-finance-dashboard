export const userMap = (data: any) => {
  return {
    name: `${data.first_name} ${data.last_name}` ?? '',
    email: data.email ?? '',
    avatar: data.avatar ?? '',
  }
}