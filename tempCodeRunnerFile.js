
const uno = () => {
    return "1";
};

const dos = () => {
    return new Promise((resolve, reject) => {
        if(false){
        setTimeout(() => {
            resolve("2");
        }, 3000);
        }
        else{
            reject("Promise rejected")
        }
    });
};

const tres = () => {
    return "3";
};

const callAll = async () => {

        let one = uno();
        console.log(one);

        let two = await dos();
        console.log(two);

        let three = tres();
        console.log(three);

};
callAll();

console.log("Process completed")