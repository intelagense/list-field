// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

//convert the characters in a string. single instance are  (  multiple instance are ) and it must be case insensitive

// function encodeString(str){
//   //variables
//   let caseString = str.toLowerCase();
//   let altString = str.split('');
  
//   for(let i = 0; i<caseString.length; i++){
//     if(caseString.indexOf(caseString[i]) === caseString.lastIndexOf(caseString[i])){
//       altString[i] = "("
//     }else {
//       altString[i] = ")"
//     }
//   }
//   console.log(altString.join('')) //the return
//   return altString.join('')
// }

function encodeString(str){
    console.log(str.split('').map(e => ( str.indexOf( e.toLowerCase() ) === str.lastIndexOf( e.toLowerCase() ) ) ? "(" : ")").join(''))
  }
  
  encodeString("din");
  encodeString("recede");
  encodeString("Success");
  encodeString("(( @");
  encodeString("( @");  // (((
  encodeString(")) @"); // ))((
  encodeString("() @"); // ((((
  
  
  // Examples
  //"din"      =>  "((("
  //"recede"   =>  "()()()"
  //"Success"  =>  ")())())"
  //"(( @"     =>  "))((" 