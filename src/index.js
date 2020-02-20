module.exports = function toReadable (number) {

    let zeroNine = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let tenNineteen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let zeroHundred = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  
    let arr = String(number).split("");
  
  
    if (arr.length === 1) {
        arr[0] = zeroNine[+arr[0]];
    }
  
  
    if (arr.length === 2) {
      if ( Number( arr.join('') ) > 9 && Number( arr.join('') ) < 20 ) {
        arr[0] = tenNineteen[+arr[1]];
        arr.pop();
      } else if (number % 10 === 0) {
        arr[0] = zeroHundred[+arr[0]];
        arr.pop();
      } else {
        arr[0] = zeroHundred[+arr[0]];
        arr[1] = zeroNine[+arr[1]];
      }
    }
  
  
    if (arr.length === 3) {
        if (number % 100 === 0) {
            arr.pop();
            arr.pop();
            arr[0] = `${zeroNine[+arr[0]]} hundred`;
            return arr.join(' ');
        }
          
        let hundreds = +arr[0];
        arr.shift();

      if ( Number( arr.join('') ) > 9 && Number( arr.join('') ) < 20 ) {
        arr[0] = tenNineteen[+arr[1]];
        arr.pop();
      } else if (number % 10 === 0) {
        arr[0] = zeroHundred[+arr[0]];
        arr.pop();
      } else {
        arr[1] = zeroNine[+arr[1]];
        if ( +arr[0] !== 0 ) arr[0] = zeroHundred[+arr[0]];
        else arr.shift();
      }
      arr.unshift(`${zeroNine[hundreds]} hundred`);
      
    }
  
    return arr.join(' ');
  }
