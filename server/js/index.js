import api from "./Requester.js";
let payloads = "__ghs_julian__";
let url = "http://localhost:8081/admin/edit-settings";
var data = new FormData();
data.append("type", "CHANGE_ADMIN_NAME");
data.append("admin_name", "Ghs Julian");
/*
api.postData(url, { test: "payloads" }, res => {
    console.log(res);
});
*/

fetch(url, {
    method: "POST",
    body: data
    // headers: {
    //         "Content-Type": "multipart/form-data"
    //     }
})
    .then(res => {
        return res.json();
    })
    .then(response => {
        console.log(response);
    });
