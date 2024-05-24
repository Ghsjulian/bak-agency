import api from "./Requester.js";
let payloads = "__ghs_julian__";
let url = "http://localhost:8080/site-info";
api.postData(url, {payloads}, res => {
    console.log(res);
});
