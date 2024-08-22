const person = {
    name : "Bal Govind",
    age : 25,
    address : { 
        city :  "Lucknow",
        pinCode : "226002"
    },
    role : "Full Stack Developer"
};

for(const key in person){
    console.log(key + " : " + person[key]);
}