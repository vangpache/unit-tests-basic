//FUNCTION EXPRESSION -- VARIABLE WITH A FUNCTION
const sum = function(num1, num2) {
    if(!num2) {
        return parseFloat(num1)
    } else {
        return parseFloat(num1) + parseFloat(num2);
    }
}

module.exports = sum;