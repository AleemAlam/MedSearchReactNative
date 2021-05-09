import { token } from "../utils";

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);

var raw = "";

export const searchData = () => {
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(
    "https://www.healthos.co/api/v1/search/medicines/brands/crosin",
    requestOptions
  )
    .then((response) => console.log("the response is ", response))
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
