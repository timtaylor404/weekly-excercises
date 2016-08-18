//telephone
function phone(){
 console.log("working")
 var cell = prompt("Whats your number");
 if(cell.charAt(3) === "-" && cell.charAt(7) === "-" && cell.length === 12){
 alert("thanks ill call you");
 console.log("true");
 birth();}
else{
    console.log('try again')
    alert("thats wrong");
    phone();
}
}
// phone()

function birth(){
    var birthday = prompt("Whats your birthday","");
    if(birthday.charAt(3) === "/" && birthday.charAt(6) === "/")
    zip()
else{
    console.log("WHAT THATS WRONG!!!!")
    alert("DO IT OVER!!!")
    birth()
    }
}
//zipcode
function zip(){
    var zipcode = prompt("tell me where you stay at")
    if (zipcode.charAt(5)){
    state()
    }
  else{
        console.log("That aint right!")
        alert("try again")
        zip()
    }
}

//state you live in
function state(){
    var state = prompt("tell me your state in two letters")
    if (state.charAt(2) && state.toUpperCase(2)){


    }
}
phone()
