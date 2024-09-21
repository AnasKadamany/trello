import axios from "axios";

// export const createUser = async (data) => {
//   try {
//     const response = await axios.post("http://localhost:5002/user/", data);
//     console.log("create user axios", response);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const createUser = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5002/user/",
      data
    );
    console.log("create user axios", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
