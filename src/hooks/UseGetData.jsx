import { baseUrl } from "../Api/baseUrl";

const UseGetData = async (url, params) => {
  const res = await baseUrl.get(url, params);

  console.log(res, "getdata");

  return res;
};
export default UseGetData;
