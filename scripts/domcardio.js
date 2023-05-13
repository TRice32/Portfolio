


// let div = document.createElement("div");



// div.classList.add("wrapper");

// // put it into the body

// document.body.appendChild(div);

// // make an unordered list

// let myList = document.createElement("ul");

// // add three list items with the words "one, two, three" in them

// myList.innerHTML = `
//     <li>One</li>
//     <li>Two</li>
//     <li>Three</li>
// `
// // put that list into the above wrapper

// div.appendChild(myList);


// // create an image

// let myImage = document.createElement("img");
// // set the source to an image

// myImage.setAttribute("src", "https://picsum.photos/200");
// // set the width to 250

// //or myImage.src = "https...."

// myImage.setAttribute("width", "250px");
// // add a class of cute

// myImage.classList.add("cute")

// // add an alt of Cute Puppy

// myImage.setAttribute("alt", "Cute Puppy")
// // Append that image to the wrapper

// div.appendChild(myImage);

// // with HTML string, make a div, with two paragraphs inside of it

// let myHTML =  `
//     <div class = myOtherDiv>
//         <p>Para 1</p>
//         <p>Para 2</p>
//     </div>
// `
// // put this div before the unordered list from above

// div.insertAdjacentHTML("beforebegin", myHTML);

// // add a class to the second paragraph called warning

// const myOtherDiv = document.querySelector(".myOtherDiv")
// myOtherDiv.children[1].classList.add("warning");
// // remove the first paragraph

// myOtherDiv.firstElementChild.remove();
// // console.log(myOtherDiv.children)

// // create a function called generatePlayerCard that takes in three arguments: name, age, and height

// function generatePlayerCard(name, age, height) {
//     let cardDetails =  `
//     <div class = "playerCard">
//         <h2>${name} - ${age}</h2>
//         <p>They are ${height} and ${age} years old. In dog years this person would be ${age * 7}. That would be an old dog.</p>
//         <button class = "buttons" type = "delete">Remove me.</button>
//     </div>`
//     return cardDetails;
// }




// document.createElement("div").classList.add("cards");



// // have that function return html that looks like this:
// // <div class="playerCard">
// //   <h2>NAME — AGE</h2>
// //   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// // </div>



// // make a new div with a class of cards



// // make 4 player cards using generatePlayerCard

// const cards = document.createElement("div");
// cards.classList.add("cards"); 
// let cardHTML = generatePlayerCard("Tom", 33, 195);
// cardHTML += generatePlayerCard("Analise", 26, 178);
// cardHTML += generatePlayerCard("Dad", 59, 186);
// cardHTML += generatePlayerCard("Mum", 61, 179);

// // console.log(cardHTML);
// // append those cards to the div
// cards.innerHTML = cardHTML;
// div.insertAdjacentElement("beforebegin", cards);
// // cards.height = "40rem";
// // put the div into the DOM just before the wrapper element


// // Bonus, put a delete Button on each card so when you click it, the whole card is removed
// // const remove = cardHTML.addEventListener("click", function(){
// //     cardHTML.innerHTML = '';
// // })

// const remove = document.querySelectorAll(".buttons");

// function deleteCard(event) {
//     const clickedButton = event.currentTarget;
//     clickedButton.closest(".playerCard").remove();
// }
// remove.forEach(button => button.addEventListener("click", deleteCard) );


// // select all the buttons!
// // make out delete function
// // loop over them and attach a listener

// function buyItem() {
// console.log("yo")
// }
// const buy = document.querySelectorAll(".buy");
// buy.addEventListener("click", buyItem);

const str = "Hi there";

let textToBeChanged = document.querySelector("textarea[name='text']");
let result = document.querySelector(".result")
const formatButtons = document.querySelectorAll("input[name = 'filter']")
const space = /\w/

// const bobString = textToBeChanged.value.split("")
//                          .map((char, index) => index % 2 == 0 ? char.toUpperCase() : char.toLowerCase())
//                          .join("")

// const funkyString = textToBeChanged.value.split("")
//                          .map((char) => randomNumber() == 2 ? char.replace(char, `<${char}sub>`) : char.replace(char, `<sup>char</sup>`))
//                          .join("")
                         
// const badGrammarString = textToBeChanged.value.split(space)
//                         // .map((char => randomNumber() == 2 && char == /\w/ ? console.log("hi" + char) : console.log( char)));            
//                         .map((char => char == space ? console.log("hi" + char) : char == " "));      
                        
function transformText(text) {
    result.textContent = text;
    // console.log();
}

// textToBeChanged.addEventListener("input", e => transformText(e.target.value))                        
                        
const formatChosen = formatButtons.forEach(button => button.addEventListener("click", () => {
    let format = button.value
    
    switch (format) {
        
        case "sarcastic":
            // result = bobString
            console.log(result);
            break;
            
        case "funky":
            textToBeChanged = funkyString;
            console.log("funky");
            break;
            
        case "unable":
                textToBeChanged = badGrammarString;
                console.log("unable");
                break;
            
        default:
            null;
        }
    //  console.log(textToBeChanged)    // button.value == sarcastic ? textToBeChanged = bobString : null
    }  )  )
// console.log(formatButtons);




// function randomWord() {
//     const newRandomWord = textToBeChanged.split(/\w/)
//     console.log(newRandomWord)
// }
// console.log(randomWord());

function randomNumber() {
 
    return Math.random() < .5 ? 1 : 2
}

// function solution(str, ending){
   
//     const newStr = str.slice(str.length - ending.length);
//     let match = newStr === ending ? true : false;
//     return match

// }

// console.log(solution("abcde", "cde"));

// function disemvowel(str) {
//     let consenants = /[^aeiou]/gi;
//     const disemvowelString = str.match(consenants).join("")
//     return disemvowelString
//   }

// disemvowel("Hi There")


// const panel = document.querySelectorAll(".panel")
// panel.forEach((panel) => panel.addEventListener("click", (e) => {
//     e.target.classList.toggle("focusPanel");

// }))

const arr = [1, 4, 2, 400, 300]

function minMax(){
   arr.sort((a,b) => (a-b))
    // console.log()
}


// console.log(arr)
Array.prototype.reverse = function() {
    for(var i = 0, j = this.length-1; i < j; i++, j--) {
      var tmp = this[i];
    //   console.log(`${this[i]} ${this[j]} ${tmp} `);
      this[i] = this[j];
    //   console.log(this[j]);
    //   console.log(`${this[i]} ${this[j]} ${tmp} `);
      //   console.log(`${this[i]} ${this[j]}`);
      this[j] = tmp;
    //   console.log(this[j]);
      console.log(`${this[i]} ${this[j]} ${tmp} ${i} ${j}`);
    //   console.log(`${this[i]} ${this[j]}`);
    // return this
    }
    return this;
  };

  
  let newArray = ['J', 'K', 'L', 'M', 'N']

//   console.log(newArray.reverse());

Array.prototype.filter = function (func) {
   const newerArray = this.slice("")

}

newArray.filter()
const newArr = [1, 2, 3, 4, 5, 6]

for(let i = 1; i < newArr.length; i++) {
  newArr.splice(i, 1)
}
// }

// console.log(newArr);
// removeEveryOther()


function find(array, element) {
//   const newArray = array.map((item, index) => item == index ? item : console.log(`${index}`))
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] === element) return i;
  // return newArray
//   console.log(newArray);
  return "Not found";
}

find([0, 3, 6], 3)

function array(string) {
  newArray =  string.split(",")
  newArray.length < 3 ? console.log("null") : null
    return newArray.splice(1, newArray.length - 2).join(" ")
}

console.log(array("1, 2") + newArray.length)