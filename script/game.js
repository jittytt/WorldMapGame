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

//nigin-dev
//This function is used for Generating random questions
const questionGeneration = () => {

    document.getElementById('map-cont').style.pointerEvents = "auto";
    //Setting the question field as Empty
    document.getElementById('correct-or-wrong').textContent = ""; 
    
    //Hiding the button until the player selects an answer
    document.getElementById('next-question-button').hidden = true; 

    numberOfQuestions = localStorage.getItem('myQuestions');
  
    let randomNumberGenerated;

    //To check if the required number of questions have been visited
    if(totalNumberOfVisitedQuestions < numberOfQuestions)
    {
        randomNumberGenerated = randomNumberGeneration();

        //Storing the values in 2 variables for future use
        que = questions.get(randomNumberGenerated);
        ans = answers.get(randomNumberGenerated);

        //Printing the question in the webpage
        document.getElementById("question-part").innerHTML=que;
    }
}


let answerID;
 
const SubmitButtonEnable=(id)=>
{
    answerID = id;  
    document.getElementById('submit-button').hidden = false;
}

//boby-dev
function onSound(){
    aud=document.getElementById('yaay'); //sound to play when answer is correct
    aud.play();
}

function WrongSound(){
    aud=document.getElementById('wrong'); //sound to play when answer is wrong
    aud.play();
}

//initialize score as 0
let correctAnswers = 0;
//function to check the answer
const answerComparison = () => {
    document.getElementById('submit-button').hidden = true;
    document.getElementById('next-question-button').hidden = false;
    document.getElementById('map-cont').style.pointerEvents = "none";
    if(answerID == ans)
    {
        onSound();
        correctAnswers++;
        totalNumberOfVisitedQuestions++;
        //display Correct
        document.getElementById('correct-or-wrong').textContent = "CORRECT!";
        document.getElementById('correct-or-wrong').style.color ="green";
        document.getElementById('correct-or-wrong').style.fontWeight ="bold";
        document.getElementById('correct-or-wrong').style.fontSize ="32px";

    }
    else
    {
        WrongSound();
        totalNumberOfVisitedQuestions++;
        //display wrong
        document.getElementById('correct-or-wrong').textContent = "Wrong!";
        document.getElementById('correct-or-wrong').style.color ="red";
        document.getElementById('correct-or-wrong').style.fontWeight ="bold";
        document.getElementById('correct-or-wrong').style.fontSize ="32px";

    }

    if(totalNumberOfVisitedQuestions == numberOfQuestions)
    {
        //rename the next button as View result
        localStorage.setItem('totalScore', correctAnswers);
        document.getElementById('next-question-button').textContent="View Result";
        document.getElementById('next-question-button').href='result.html';
        
    }

}


//jitty-dev
//evaluates the score of the game and displays it in new page
const evaluateScore = () => {
    let correctAnswers = localStorage.getItem("totalScore");         //retreiving values from localStorage
    let totalQns = localStorage.getItem("myQuestions");
    let name = localStorage.getItem("myName");
    capName = capitalizeFirstLetter(name);                           //capitilizing the first letter

    let score = () => (100 * correctAnswers)/totalQns;              //score & percentage calculation
    let percentage = score();

    let compliment = document.createElement("h1");
    let finalScore = document.createElement("h3");

    if(percentage >= 50) {                                          //displaying compliments w.r.t score

        compliment.textContent = `Congratulations! ${capName}`;
        compliment.setAttribute("style","color: black");
        if(percentage >= 76 && percentage <= 100)
            document.getElementById("stars").querySelector("img").setAttribute("src","./assets/5stars.png");
        else if(percentage >= 50 && percentage <= 75)
            document.getElementById("stars").querySelector("img").setAttribute("src","./assets/4stars.png");

    }
    else {

        compliment.textContent = `Sorry ${capName}!! Better Luck Next Time!`;
        compliment.setAttribute("class","text-danger");
        if(percentage > 0 && percentage <= 20)
            document.getElementById("stars").querySelector("img").setAttribute("src","./assets/5stars.png");
        else if(percentage >= 21 && percentage <= 40)
            document.getElementById("stars").querySelector("img").setAttribute("src","./assets/4stars.png");
        else if(percentage >= 41 && percentage < 50)
            document.getElementById("stars").querySelector("img").setAttribute("src","./assets/4stars.png");

    }
    //compliment.setAttribute("class","d-flex")
    document.getElementById("remark").append(compliment);
    
    finalScore.textContent = `${percentage}%`;
    document.getElementById("score-calc").append(finalScore);

}

const capitalizeFirstLetter = (inputString) => {                                //function to capitalize first letter
    return `${inputString.charAt(0).toUpperCase()}${inputString.slice(1)}`;
}

document.addEventListener('mouseover', () => {                                  //function to add visual effects
    // Using setTimeout to delay the rotation for a better visual effect
    setTimeout(() => {
      document.querySelector('.score-board').style.transform = 'rotate(0deg)';
    }, 1000); 
  });