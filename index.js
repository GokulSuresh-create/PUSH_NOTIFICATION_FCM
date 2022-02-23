//const fcm = require('fcm-node');
import FCM from "fcm-node";
const server = 'AAAArVguSOc:APA91bGzlDRhWGMw_bOl2eUC_VD0Wb6Qc0p5NSAAoxcNC_oAaF5isZjuzkyEHMGZGzPKfvEXpFbtMdbGjCbzEVtq_O4dg81wIfbkdz49t_WFNXmNxYvfE32yV4o63jIMz0P9tdpFTzuq';

let fcm = new FCM(server);

let message = {
    to:'/topics/'+'ssss',
    notification : {
        title: 'test',
        body:'test body'
    }
};
fcm.send(message,(err,res)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(res);
    }
});
