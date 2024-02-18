// Абстрактные классы
abstract class Controller {
    abstract handle(req: any): void;

    handleWithLogs(req: any) {
      console.log('start');
      this.handle(req);
      console.log("end");
    }
}

// const c = new Controller();//Так не сраюлотает
// абстрактные классы мы можем отнаследовать
class UserCOntroller extends Controller {
  handle(req: any): void {
    console.log(req);
  }
}

const c = new UserCOntroller();
c.handle("Request");//Request
c.handleWithLogs("Request"); //start Request end

