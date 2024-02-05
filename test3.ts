interface IPayment {
    sum: number,
    from: number,
    to: number
}



enum PaymentStatus {
    SUCCESS = "success",
    FAILED = "failed"
}

interface PaymentData  extends  IPayment {
    databaseId: number
}

interface FailedData {
    errorMessage: string,
    errorCode: number
}

// с точки зрения типизации - это не лучший вариант 
// ТК для ытатусов success и failed нет разделения
// то есть для failed кау-будто могут прийти и PaymentData и FailedData
// interface IResponse {
//     status: PaymentStatus;
//     data: PaymentData | FailedData
// }


interface IResponseSuccess {
    status: PaymentStatus.SUCCESS,
    data: PaymentData
}

interface IResponseFailed {
    status: PaymentStatus.FAILED,
    data: FailedData
}

//exampl
// function get(): IResponseSuccess | IResponseFailed {
//     return ...code...   
// }


type f = (res: IResponseSuccess | IResponseFailed) => number;

type Res = IResponseSuccess | IResponseFailed;

function isOk(res: Res): res is IResponseSuccess {
    if (res.status === PaymentStatus.SUCCESS) {
        return true;
    } else {
        return false;
    }
}
function getIdFromData(res: Res): number {
    if (isOk(res)) {
        return res.data.databaseId;
    } else {
        throw new Error(res.data.errorMessage);
    }
}





