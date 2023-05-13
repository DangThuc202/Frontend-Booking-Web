import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};

const getAllCodeService = (inputType) => {
  return axios.get(`/api/allcode?type=${inputType}`);
};

const createNewUserService = (data) => {
  return axios.post("/api/create-new-user", data);
};

const deleteUserService = (userId) => {
  console.log(userId);
  return (
    axios.delete("/api/delete-user"),
    {
      data: {
        id: userId,
      },
    }
  );
};

export {
  handleLoginApi,
  getAllUsers,
  getAllCodeService,
  createNewUserService,
  deleteUserService,
};
