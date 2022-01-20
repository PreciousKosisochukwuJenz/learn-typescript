 enum RequestStatus{
    approved = "APPROVED",
    rejected = "REJECTED",
    pending = "PENDING"
 }

 interface IRequestStatus<T,M>{
    status : T,
    message: M
 }

 var getStatus = <T, M extends keyof T>(requeststatuses: T, status: M) => {
    return `${requeststatuses[status]}`
 }

 var getStatusFromInterface = <T extends IRequestStatus<number,Boolean>>(status: T) =>{
    return `${status.status} and ${status.message}`
 }

 console.log(getStatus(RequestStatus,"rejected"));
 console.log(getStatusFromInterface({status: 4, message : true}));
