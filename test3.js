"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["SUCCESS"] = "success";
    PaymentStatus["FAILED"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function isOk(res) {
    if (res.status === PaymentStatus.SUCCESS) {
        return true;
    }
    else {
        return false;
    }
}
function getIdFromData(res) {
    if (isOk(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
