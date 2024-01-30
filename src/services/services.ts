import Axios from "."

const services = () =>
async ({method, data, params, url}: any) => {
  try {
    return await Axios({
      url,
      method,
      data,
      params,
    })
  } catch (error: any) {
    return error.response
  }
}

export default services;