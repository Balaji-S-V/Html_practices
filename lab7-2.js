function check(){
    var balance = 100000;
    var x = parseInt(document.getElementById("t").value);
    if(x <= balance){
    alert("Amount is withdrawn");
    balance = balance - x;
    }
    else{
    alert("withdraw failure");
    }
    }
    