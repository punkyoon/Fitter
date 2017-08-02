function engToKor(param){
    var engKor= {'length':'길이','shoulder':'어깨','waist':'배','chest':'가슴','sleeve':'소매',
           'bot_length':'기장','bot_waist':'허리','thigh':'허벅지','crotch':'밑위','hem':'밑단','hip':'엉덩이'};

    return engKor[param]
}

function fitCal(calData, big_criteria=20, too_criteria=50){
    var info = {'small': [] ,'fit': [],'big': [],'too':[],'exception':[]};
//    var excepts = ['길이','기장','소매'];

    function pushAndExcept(size,param){
        //클로저 자료는 넣고, except가 있다면 except size따로 파악
        var korParam = engToKor(param);
        info[size].push(korParam);
//        for (index in excepts){
//            if (korParam.indexOf(excepts[index])!= -1){
//                info['exception'].push(size);
//            }
//        }
    }

//    function countWithExcept(size){
//        var except_num = 0;
//        for (var index=0; index<info['exception'].length;index++){
//            if (info['exception'][index]===size){
//                except_num +=1;
//            }
//        }
//        return info[size].length-except_num
//    }

    for (param in calData){
        var value = calData[param];
        if (value<0){
            info['small'].length
            pushAndExcept('small',param);
        }else if(value>big_criteria && value<=too_criteria){
            pushAndExcept('big',param);
        }else if(value>too_criteria){
            pushAndExcept('too',param);
        }else{
            pushAndExcept('fit',param);
        }
    }

//    if (info['small'].length>0){//countWithExcept('small')>0){
//       conclusion = "작아요ㅜㅜ";
//    }else if(info['too'].length>0){
//       conclusion = "오버핏이네요";
//    }else if(info['big'].length>0){//countWithExcept('big')>0){
//       conclusion = "넉넉해요";
//    }else{
//       conclusion = "몸에 맞아요.";
//    }
//
//    info['conclusion'] = conclusion; // add conclusion
    return info
}

//var divided_param =fitCal(botCal);
console.log(topCal)
var divided_param =fitCal(topCal);

$(document).ready(function(){
    var target = document.getElementsByClassName('anal')[0];
//    target.innerHTML += "<p>"+divided_param['conclusion']+"</p>";
    if(divided_param['small'].length>0){
        target.innerHTML += "<p>"+divided_param['small']+"가 좀 작아요</p>";
    }
    if(divided_param['fit'].length>0){
        target.innerHTML += "<p>"+divided_param['fit']+"가 잘 맞아요!</p>";
    }
    if(divided_param['big'].length>0){
        target.innerHTML += "<p>"+divided_param['big']+"가 좀 커요</p>";
    }
    if(divided_param['too'].length>0){
        target.innerHTML += "<p>"+divided_param['too']+" 좀 커요</p>";
    }
});