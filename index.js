import { fifaData } from './fifa.js';
//console.log(fifaData);

//console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
function logFunc(data){
   for(let i = 0; i < data.length; i++){
    if(data[i].Year === 2014 && data[i].Stage === "Final"){
        console.log(data[i]['Home Team Name']);
        console.log(data[i]['Away Team Name']);
        console.log(data[i]['Home Team Goals']);
        console.log(data[i]['Away Team Goals']);
        console.log(data[i]['Home Team Name']);
    }
   }
    
}
//logFunc(fifaData);
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data){
    return data.filter(item => item.Stage === 'Final');
}
//console.log(getFinals(fifaData));
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {
    
    let years = cb.map(item => item.Year);
    return years;
};



//console.log(getFinals(fifaData));
//console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {
    let winners = [];
    let homeWinners = cb.filter(
        (w) => w['Home Team Goals'] > w['Away Team Goals']
    );
    let awayWinners = cb.filter(
        (w) => w['Away Team Goals'] > w['Home Team Goals']
    );
    let tiedGame = cb.filter(
        (t) => t['Home Team Goals'] === t['Away Team Goals']
    );
    let hNames = homeWinners.map((mh) => mh['Home Team Name']);let aNames = awayWinners.map((ma) => ma['Away Team Name']);let tNames = tiedGame.map((mt) => mt['Home Team Name']);
    winners = hNames.concat(aNames, tNames);
    return winners;   
};


//console.log(getWinners(getFinals(fifaData)));
//getWinners();

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cbWinners, cbYears) {
    let yearWinners = cbWinners.map((item, index) => {
        return `In ${cbYears[index]}, ${item} won the world cup.`
    });
    return yearWinners;
};


//console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));
/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const totalHomeGoals = data.reduce(function(accum, item){
        return accum + item['Home Team Goals']; 
    },0);
    console.log(totalHomeGoals);
    const totalAwayGoals = data.reduce(function(accumulator, item){
        return accumulator + item['Away Team Goals'];
    },0);
    console.log(totalAwayGoals);
};

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
