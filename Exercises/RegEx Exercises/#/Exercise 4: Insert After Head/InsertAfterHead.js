




/*
  Write a regular expression that inserts <h1>Hello</h1> immediately after the <body> tag. 
  The tag may have attributes. You only have to come up with the regular expression. The replace function is already done (see the Tests tab).

  Examples  :
  const REGEXP = /your regular expression/

  let str = "\<html><body style="height: 200px"> ... </body></html>"

  str = str.replace(REGEXP, `<h1>Hello</h1>`)

  console.log(str) ➞ <html> <body style="height: 200px"><h1>Hello</h1> ... </body> </html> 
  
  26-January-2023
*/

const REGEXP = /(?<=<body.*>)/
