import { baseUrl } from "../Api/baseUrl";

const UseupdatetData = async (url, params) => {
  const res = await baseUrl.put(url, params);
  return res;
};

const config = {
  header: { "Content-Type": "multipart/form-data" },
};

const useUpdateDataWithImage = async (url, params) => {
  try {
    const res = await baseUrl.put(url, params, config);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err, "errrr");
  }
};

export { UseupdatetData, useUpdateDataWithImage };
