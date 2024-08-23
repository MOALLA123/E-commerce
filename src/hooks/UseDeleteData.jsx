import { baseUrl } from "../Api/baseUrl";

const UseDeleteData = async (url) => {
  await baseUrl.delete(url);
};

export default UseDeleteData;
