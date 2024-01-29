"use strict";
// enum позволяет сделать четский справочник кодов ответа
// каких-то величин (н: направдений движения)
// для описания параметров в базе которые имеют ограниченное число значений (роли пользователей)
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: "Платеж успешен",
    statusCode: StatusCode.SUCCESS
};
// 1 - успех
// 2 - в процессе
// 3 - отклонен 
// здесь проблема в том, что нужно ограничить statusCode до 3х
//ПОЭТОМУ ИСПОЛЬЗУЙ ENUM
if (res.statusCode === StatusCode.SUCCESS) {
}
//пример гидрогенного енама
var StatusCodeHydro;
(function (StatusCodeHydro) {
    StatusCodeHydro[StatusCodeHydro["SUCCESS"] = 1] = "SUCCESS";
    StatusCodeHydro[StatusCodeHydro["IN_PROCESS"] = 3] = "IN_PROCESS";
    StatusCodeHydro["FAILED"] = "F";
})(StatusCodeHydro || (StatusCodeHydro = {}));
function action(status) {
}
action(StatusCodeHydro.SUCCESS);
// action('F');//error
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["USER"] = 1] = "USER";
})(Roles || (Roles = {}));
function calc() {
    return 3;
}
var EnumExamle;
(function (EnumExamle) {
    EnumExamle[EnumExamle["ADMIN"] = 1] = "ADMIN";
    EnumExamle[EnumExamle["SUPER_USER"] = 2] = "SUPER_USER";
    EnumExamle[EnumExamle["USER"] = calc()] = "USER";
})(EnumExamle || (EnumExamle = {}));
console.log(EnumExamle.USER);
function test(x) {
}
test(EnumExamle);
const res2 = 1 /* EnumExamle2.ADMIN */;
