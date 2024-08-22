let Student = [];

Student[0] = {name : "Bob",course : "BCA",age : 24,Address : {
                                                     city : "Lucknow",
                                                     pincode : 226002
                                                              }                                         
            };
Student[1] = {name : "Alis",course : "BSc",age : 23,Address : {
                                                       city : "Delhi",
                                                       pincode : 234567    
                                                              }
}
Student[2] = {name : "Arun",course : "BA",age : 25,Address : {
                                                       city : "Mumbai",
                                                       pincode : 284568    
                                                             }
}

for(let key in Student) {
    // console.log(key);
    console.log(`"Name : ${Student[key].name}`);

}

// console.log(Student);
