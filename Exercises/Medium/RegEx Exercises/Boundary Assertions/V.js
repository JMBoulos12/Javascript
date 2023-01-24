




/*
  You've just webscraped a web page and stored it in a string. In the string there is a bullet list of states that voted for President Trump's impeachment:

  const str = `
  * Texas = no
  * California = yes
  * Florida = yes
  * Michigan = no
  `
  Add a negative lookahead assertion so a regex match would output the states that voted no. 
  DO NOT use a positive lookahead assertion.

  24-January-2023
*/

const REGEXP = /(\w{4,})(?!.*yes)/g
