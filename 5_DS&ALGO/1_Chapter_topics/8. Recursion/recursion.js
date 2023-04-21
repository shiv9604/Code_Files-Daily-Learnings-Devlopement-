function reduce(number){
    console.log("number :",number)
    if(number==0) return number;
    number--;
    reduce(number)
}

reduce(10)