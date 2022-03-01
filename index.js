const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function (text){
    return titleCaseString(text);
  })
}

function titleCaseString(string){
  const wordsArray = string.split(' ');
  let finalWord = "";
  for(let i =0; i<wordsArray.length; i++){
    wordsArray[i] = titleCaseWord(wordsArray[i]);
    finalWord = `${finalWord}${wordsArray[i]} `;
  }
  return finalWord.trim();
}

function titleCaseWord(text){
  let first = text.substring(0,1);
  first = first.toUpperCase();
  let last = text.substring(1);
  return first + last;
}

