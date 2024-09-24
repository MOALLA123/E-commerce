import { baseUrl } from "../Api/baseUrl";

const UseGetData = async (url, params) => {
  const res = await baseUrl.get(url, params);

  return res;
};
export default UseGetData;
