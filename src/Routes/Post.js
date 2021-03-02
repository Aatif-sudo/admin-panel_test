const axios = require("axios");

let baseUrl = "http://192.168.1.23:9898/api";
const sendRequest = async (data, apiPage) => {
  console.log(data, "data");

  let response = await axios({
    method: "post",
    url: baseUrl + apiPage,
    data: data,
  })
    .then((resp) => {
      console.log("data", resp);
      return resp;
    })
    .catch((err) => {
      console.log("error---->", err);
      return err;
    });
  return response;
};

export default sendRequest;
