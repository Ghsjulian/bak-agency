"use strict";
import __api__ from "./Requester.js";

function _dom_(tag) {
    return document.querySelector(tag);
}


//  UPLOAD  CONFIG FILE
_dom_("#upload").onclick = e => {
    e.preventDefault();
    var msg = _dom_("#msg");
    var inputFile = _dom_("#json-file");
    if (inputFile.value) {
        const target = inputFile.files[0];
        const reader = new FileReader();
        reader.onload = event => {
            const fileData = {
                name: target.name,
                type: target.type,
                data: btoa(event.target.result)
            };
            let url = "http://localhost:8080/config";
            __api__.postData(url, fileData, res => {
                if (res.status === "success") {
                    msg.classList.add("success");
                    msg.textContent = res.message;
                    setTimeout(() => {
                        window.location.href =
                            "http://localhost:8080/show-config";
                    }, 3000);
                } else {
                    msg.classList.add("error");
                    msg.textContent = res.message;
                }
            });
        };
        reader.readAsBinaryString(target);
    } else {
        msg.classList.add("error");
        msg.textContent = "Please Select Your Config File";
    }
    setTimeout(() => {
        msg.classList.remove("error");
        msg.classList.remove("success");
        msg.textContent = "";
    }, 3000);
};
