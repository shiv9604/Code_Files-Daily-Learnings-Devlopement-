let date = new Date();
let day = date.getDate()
let month = date.toLocaleString('default',{month:'short'})
console.log(month)