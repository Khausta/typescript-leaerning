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






