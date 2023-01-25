




/*
  You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.

  Here is a list of the character classes in JavaScript:

  ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
  There is a hidden word in this string:

  const str = "**^&$Regular#$%Expressions$%$$%^**"
  Write the regular expression that reveals the hidden word. 
  You have to remove all of the special characters to reveal the word. 
  Use the character class \w in your expression.

  25-January-2023
*/

function order(arr) {
  let hold=[... arr],res=[];
  if(/[0-9]/.test(arr[0])) { 
    arr.sort((a,b) => a-b);
  } 
  else {
    arr.sort(); 
  }
  for(let x of arr){
    res.push(hold.indexOf(x));
    hold[hold.indexOf(x)]="";
  }
  return res;
}
