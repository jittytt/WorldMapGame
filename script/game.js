let questions = new Map([
    [1, "Which continent is India part of?"],
    [2, "Which is the largest continent in area?"],
    [3, "Which is the smallest continent in area?"],
    [4, "Which continent is also called as an 'Island-Continent'?"],
    [5, "The largest mountain in the world, Mount Everest is situated in which continent?"],
    [6, "On Which Continent Is Egypt?"],
    [7, "On which continent can you find France?"],
    [8, "Which is the Second biggest continent of the world?"],
    [9, "Columbus found which continent?"],
    [10, "Where is Amazon River?"]
]);

let answers = new Map([
    [1, "Asia"],
    [2, "Asia"],
    [3, "Australia"],
    [4, "Australia"],
    [5, "Asia"],
    [6, "Africa"],
    [7, "Europe"],
    [8, "Africa"],
    [9, "North America"],
    [10, "South America"],
]);


//nigin-dev
/*This function is used to activate the  "Get Started" button only when the user has input something 
has his/her name */
const buttonActivator = () => {

    if(document.getElementById('firstName').value != '')
    {
        document.getElementById('primaryButton').hidden = false;
    }
    else
    {
        document.getElementById('primaryButton').hidden = true;
    }
}

// vyshnav-dev
/*This function is used to store the Player's name and total number of questions to the localstorage
 when the player decides to start his/her game */

let myName;
let myQuestions;
const storeValues = () =>{
    
    myName = document.getElementById("firstName").value;
    myQuestions = document.getElementById("number").value;//gets element's values to variables

    localStorage.setItem('myName',myName);
    localStorage.setItem('myQuestions',myQuestions);//stores values to localstorage
}

// elena-dev
const visitedQuestions = [];  //This array avoids the duplicacy of questions
let totalNumberOfVisitedQuestions = 0;

 const randomNumberGeneration = () => {
  let randomNumber;

  do {
    // Generates a random number between 1 and 10
    randomNumber = Math.floor(Math.random() * 10) + 1; 
  } while (visitedQuestions.includes(randomNumber)); //The loop exits until it finds a unique number.

  visitedQuestions.push(randomNumber);
  return randomNumber;
}