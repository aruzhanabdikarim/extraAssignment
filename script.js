const message = document.getElementById("message")
theMostFrequentWord();
/*
1. Split message words and store it in an array.
2. Display in CONSOLE the number of elements in the array and the most frequent word in the array
*/

let messageWords = []
let theMostFrequentWord;
let numberOfWordsInTheMessage = 0;


console.log(`The most frequent word of the message is "${theMostFrequentWord}"`)
console.log(`The number of words in the message is ${numberOfElementsInTheArray}`)


// Random phrases and its pictures (represented as an array of objects)
const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]
 WordCount();
 function clickButton {
  if (message.value != "") {
	   let messageWords = [];
    let theMostFrequentWord;
    let numberOfWordsInTheMessage = 0;
	 messageWords = message.value;
    numberOfWordsInTheMessage = WordCount(messageWords);
    theMostFrequentWord = mostFrequentWord(messageWords.lowercase().split(" "));
    console.log(The most frequent word of the message is "${theMostFrequentWord}")
    console.log(The number of words in the message is ${numberOfWordsInTheMessage})
	let randomNumber = Math.floor(Math.random() * 3);
    document.getElementById("phrase").innerHTML = randomPhrasesAndPictures[randomNumber].phrase;
    document.getElementById("picture").innerHTML = '<img style="width: 400px; height: 280px;" alt="Random photo" src="' + randomPhrasesAndPictures[randomNumber].imageURL + '" />';
	} else 
  alert("Please, Enter your message")
  }
function theMostFrequentWord(arr)
{
  var arr2 = {};
  if (arr.length == 0)
    return null;
	var counter = 1;
	var maxima = -100000;
  for (var i = 1; i <= array.length; i++) {
    var j = array[i];
    if (arr2[j] != null)
      arr2[j] +=1;
    else
      arr2[j]==1;
    if (arr2[j] > counter) {
      maxima = j;
      counter = arr2[j];
    }
  }
  return maxima;
}
function WordCount (string) {
  return string.split(" ").length;
}
function lowercase(arr3){
	for (int i=0;i<arr3.length;i++){
	if (arr3[i]>=65 && arr3[i]<=90){
		arr3[i]-=32;
	}
	}
}
clickButton();
 
document.querySelector("button").addEventListener("click", msg);