let Cal = {
    add : function(num1, num2){
        return num1 + num2;
    },
    sub : function(num1, num2){
        if(num1 > num2) {
            return num1 - num2;
        } else {
            return num2 - num1;
        }
       },
    multi : function(num1, num2){
        return num1 * num2;
    },
    div : function(num1, num2){
       if(num2 !== 0){
        return num1 / num2;
       }
        
    }

}

const addResult = Cal.add(4, 5);
console.log("Addition: ",addResult);
const subResult = Cal.sub(4, 5);
console.log("Difference: ",subResult);
const multiResult = Cal.multi(4, 5);
console.log("Multiplication: ",multiResult);
const divResult = Cal.div(4, 5);
console.log("Division: ",divResult);