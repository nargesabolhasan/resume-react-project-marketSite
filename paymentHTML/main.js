function succsessHandler(){
    //console.log("Function")
    //console.log("")window.open("http://localhost:3000/Payment");

    //return view('http://localhost:3000/Payment');
    window.open("http://localhost:3000/ResultPayment?success");
}

function faileHandler(){
    //console.log("Function")
    //window.open("http://localhost:3000/Payment");
    window.open('http://localhost:3000/ResultPayment?failer');
  //window.open("http://localhost:3000/Payment");
}
