"use strict";
// Абстрактные классы
class Controller {
    handleWithLogs(req) {
        console.log('start');
        this.handle(req);
        console.log("end");
    }
}
// const c = new Controller();//Так не сраюлотает
// абстрактные классы мы можем отнаследовать
class UserCOntroller extends Controller {
    handle(req) {
        console.log(req);
    }
}
const c = new UserCOntroller();
c.handle("Request");
c.handleWithLogs("Request");
