// first we make a function with 2 parameters one for our string and one for our NOC(number of characters) then we make a string to compare with our parameter then if the type of our parameter was string we will remove all of its spaces and extract the string from the start to how much the user wants and if not we will output and error and return it
function noSpace(str, NOC) {
    let output = 0
    string = "string"
    if (typeof str == string) {
        output = (str.replaceAll(" ", "").substr(0, NOC))
    }
    else {
        output = "ERORR...!"
    }
    return output
}
console.log(noSpace("R _ A _ N _ D _ O _ M _ T _ E _ X _ T", 12))