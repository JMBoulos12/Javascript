



/*
  #Instructions:
  Bob is a lackadaisical teenager. In conversation, his responses are very limited.

  Bob answers 'Sure.' if you ask him a question, such as "How are you?".

  He answers 'Whoa, chill out!' if you YELL AT HIM (in all capitals).

  He answers 'Calm down, I know what I'm doing!' if you yell a question at him.

  He says 'Fine. Be that way!' if you address him without actually saying anything.

  He answers 'Whatever.' to anything else.

  Bob's conversational partner is a purist when it comes to written communication and always follows normal rules regarding sentence punctuation in English. 
  
  16-April-2023
*/


const isSilence = message => message.trim().length === 0;
const isShouting = message => /[a-z]/i.test(message) && message === message.toUpperCase();
const isQuestion = message => message.trim().endsWith('?');
const isShoutingQuestion = message => isShouting(message) && isQuestion(message);
const isDefault = () => true;
const rules = [
  { test: isSilence, response: 'Fine. Be that way!' },
  { test: isShoutingQuestion, response: 'Calm down, I know what I\'m doing!' },
  { test: isShouting, response: 'Whoa, chill out!' },
  { test: isQuestion, response: 'Sure.' },
  { test: isDefault, response: 'Whatever.' },
];
export const hey = message => rules
  .find(({ test }) => test(message))
  .response;
