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
  console.log(data);
  return axios.post("/api/create-new-user", data);
};

const deleteUserService = (userId) => {
  return axios({
    method: "DELETE",
    url: "/api/delete-user",
    data: {
      id: userId,
    },
  });
};

const editUserService = (inputData) => {
  return axios.put("/api/edit-user", inputData);
};

const getTopDoctorHomeService = (limit) => {
  return axios.get(`/api/top-doctor-home?limit=${limit}`);
};

export {
  handleLoginApi,
  getAllUsers,
  getAllCodeService,
  createNewUserService,
  deleteUserService,
  editUserService,
  getTopDoctorHomeService,
};
