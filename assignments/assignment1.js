function askNumbers() {
   const num1 = prompt("Please enter a number.");

   const num2 = prompt("Now enter another number.");

   console.log("User entered: " + num1 + " and " + num2 + ".");

    if(num1 > num2){
        alert(num1 + " is greater!");
        alert(num1 + " is greater!");
    }else{
        alert(num2 + " is greater!");
        console.log(num2 + " is greater!");
    }
}

function oddEven() {
    const num = prompt("Please enter any number.");

    console.log("User entered: " + num + ".");

    if(num % 2 ==0){
        alert(num + " is an even number!");
        console.log(num + " is an even number!");
    }else{
        alert(num + " is and odd number!");
        console.log(num + " is an odd number!");
    }
}



askNumbers();
oddEven();
