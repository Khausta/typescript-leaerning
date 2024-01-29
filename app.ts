// enum позволяет сделать четский справочник кодов ответа
// каких-то величин (н: направдений движения)
// для описания параметров в базе которые имеют ограниченное число значений (роли пользователей)



enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS,
    FAILED
}

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
enum StatusCodeHydro {
    SUCCESS = 1,
    IN_PROCESS = 3,
    FAILED = 'F'
}

function action(status: StatusCodeHydro) {

}

action(StatusCodeHydro.SUCCESS);
// action('F');//error


enum Roles {
    ADMIN,
    USER,
}

function calc() {
    return 3;
}

enum EnumExamle {
    ADMIN = 1,
    SUPER_USER = ADMIN * 2,
    USER = calc()
}

console.log(EnumExamle.USER);


function test(x: {ADMIN: number}) {

}
test(EnumExamle);

//чтобы после компилирования (после runtime) enum не превращались в функции
// достаточно присвоить const

const enum EnumExamle2 {
    ADMIN = 1,
    SUPER_USER = ADMIN * 2,
    // USER = calc() // не может примениться
}

const res2 = EnumExamle2.ADMIN;

