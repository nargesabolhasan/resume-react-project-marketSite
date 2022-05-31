function succsessHandler(){
    //console.log("Function")
    //console.log("")window.open("http://localhost:3000/Payment");

    //return view('http://localhost:3000/Payment');
    window.open("http://localhost:3000/Payment/?true");
}

function faileHandler(){
    //console.log("Function")
    //window.open("http://localhost:3000/Payment");
    return view('http://localhost:3000/Payment/?false');
  //window.open("http://localhost:3000/Payment");
}
