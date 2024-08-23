import { baseUrl } from "../Api/baseUrl";

const UseinsertData = async (url, params) => {
  const res = await baseUrl.post(url, params);
  return res;
};

const config = {
  header: { "Content-Type": "multipart/form-data" },
};

const useinsertDataWithImage = async (url, params) => {
  try {
    const res = await baseUrl.post(url, params, config);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err, "errrr");
  }
};

export { UseinsertData, useinsertDataWithImage };
