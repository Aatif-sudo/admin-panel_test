const axios = require("axios");

let baseUrl = "http://192.168.1.23:9898/api";
const Request = async (apiPage) => {
  let response = await axios({
    method: "get",
    url: baseUrl + apiPage,
    //  data: data,
  })
    .then((resp) => {
      console.log("resp", resp);
      return resp;
    })
    .catch((err) => {
      console.log("error---->", err);
      return err;
    });
  return response;
};

export default Request;
