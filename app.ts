//Literal Types
 

// example with fetch request
// function fetchWithAuth(url: string, method: string) { //так в method можем что угодно передать, даже не post и get, а что угодно
//     //пробудем enam
// }

//пример с enum
enum FetchMethods {
    GET = 'GET',
    POST = 'POST'
}
function fetchWithAuth(url: string, method: FetchMethods) {
    // return fetch(url, method); //ts(2559) - why?
   
}
// fetchWithAuth('http://dsfgjfd.ro', FetchMethods.POST).catch(err => console.error(err.message));

//ПРИМЕНИМ LITERAL TYPES
// function fetchWithAuthL(url: string, method: "get" | "post") {
//     if (method === "get") {
//         // fetch(url, method);// ошибка тоже
//     } 
// }

function fetchWithAuth2(url: string, method: "get" | "post") {
    // return fetch(url, method); //ts(2559) - why? 
}
fetchWithAuth2("sdg", "get");




function fetchWithAuth3(url: string, method: 1 | 2): 1 | -1 {
    // return fetch(url, method); //ts(2559) - why? 
    // return 2; //не проходит
    return 1;
}

const a = 1;
fetchWithAuth3('wer', 2);
fetchWithAuth3('wer', a as 2); //каст к типу
