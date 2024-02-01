"use strict";
//Literal Types
// example with fetch request
// function fetchWithAuth(url: string, method: string) { //так в method можем что угодно передать, даже не post и get, а что угодно
//     //пробудем enam
// }
//пример с enum
var FetchMethods;
(function (FetchMethods) {
    FetchMethods["GET"] = "GET";
    FetchMethods["POST"] = "POST";
})(FetchMethods || (FetchMethods = {}));
function fetchWithAuth(url, method) {
    // return fetch(url, method); //ts(2559) - why?
}
// fetchWithAuth('http://dsfgjfd.ro', FetchMethods.POST).catch(err => console.error(err.message));
//ПРИМЕНИМ LITERAL TYPES
// function fetchWithAuthL(url: string, method: "get" | "post") {
//     if (method === "get") {
//         // fetch(url, method);// ошибка тоже
//     } 
// }
function fetchWithAuth2(url, method) {
    // return fetch(url, method); //ts(2559) - why? 
}
fetchWithAuth2("sdg", "get");
function fetchWithAuth3(url, method) {
    // return fetch(url, method); //ts(2559) - why? 
    // return 2; //не проходит
    return 1;
}
const a = 1;
fetchWithAuth3('wer', 2);
fetchWithAuth3('wer', a); //каст к типу
