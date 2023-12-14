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
//initialize score and asked questions as 0
let score=0;
let numOfaskedQ=0;
function checkAnswer(id){
    numOfaskedQ+=1;
    if(id==ansArr[numOfaskedQ-1]){
        score+=1;
        //display correct in a tag
    }
    else{
        //display wrong in a tag
    }
    //activate next question button
    document.getElementById('nextButton').disabled = true;
    if(numOfaskedQ==qsArr.length){
        calculateTotalScore(score);
    }    
    }