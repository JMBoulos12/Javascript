




/*
  You've just webscraped a web page and stored it in a string. In the string there is a bullet list of states that voted for President Trump's impeachment:

  const str = `
  * Texas = no
  * California = yes
  * Florida = yes
  * Michigan = no
  `
  Add a positive lookahead assertion so a regex match would output the states that voted yes

  24-January-2023
*/

const REGEXP = /(\w+)(?= = yes)/g
