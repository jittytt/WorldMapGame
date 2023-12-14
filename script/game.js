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

//initialize score as 0
let correctAnswers = 0;
//function to check the answer
const answerComparision = (id) => {
    document.getElementById('next-question-button').hidden = false;

    if(id == ans)
    {
        correctAnswers++;
        totalNumberOfVisitedQuestions++;
        //display Correct
        document.getElementById('correct-or-wrong').textContent = "CORRECT!";
        document.getElementById('correct-or-wrong').style.color ="green";
        document.getElementById('correct-or-wrong').style.fontWeight ="bold";
        document.getElementById('correct-or-wrong').style.fontSize ="32px";

        console.log('Correct Answers:' + correctAnswers);
        console.log('Total number of visisted questions :' +totalNumberOfVisitedQuestions);
    }
    else
    {
        totalNumberOfVisitedQuestions++;
        //display wrong
        document.getElementById('correct-or-wrong').textContent = "Wrong!";
        document.getElementById('correct-or-wrong').style.color ="red";
        document.getElementById('correct-or-wrong').style.fontWeight ="bold";
        document.getElementById('correct-or-wrong').style.fontSize ="32px";

        console.log('Correct Answers:' + correctAnswers);
        console.log('Total number of visisted questions :' +totalNumberOfVisitedQuestions);
    }

    if(totalNumberOfVisitedQuestions == numberOfQuestions)
    {
        evaluateScore();
    }

}