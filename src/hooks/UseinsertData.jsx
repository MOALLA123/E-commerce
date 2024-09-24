import { baseUrl } from "../Api/baseUrl";

const useInsertDataWithImage = async (url, parmas) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, parmas, config);
  return res;
};

const useInsertData = async (url, parmas) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, parmas, config);
  return res;
};

export { useInsertData, useInsertDataWithImage };

// import { baseUrl } from "../Api/baseUrl";

// const UseinsertData = async (url, params) => {
//   const res = await baseUrl.post(url, params);
//   return res;
// };

// const useinsertDataWithImage = async (url, params) => {
//   const config = {
//   header: {
//     "Content-Type": "multipart/form-data",
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
//   },
// };
//   try {
//     const res = await baseUrl.post(url, params, config);
//     console.log(res);
//     return res;
//   } catch (err) {
//     console.log(err, "errrr");
//   }
// };

// export { UseinsertData, useinsertDataWithImage };
