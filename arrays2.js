// TASK 1
function isArrayLengthOdd(numbers) {
    if (numbers.length % 2 == 0) {
        return false;
    } else {
        return true;
    }
}



// TASK 2
function isArrayLengthEven(numbers) {
    if (numbers.length % 2 == 0) {
        return true;
    } else {
        return false;
    }
}



// TASK 3
function addLailaToArray(instructors) {

    instructors.push('Laila');
    //instructors_with_Laila = [instructors];

    return instructors

}

let names = ['jenan', 'rayan', 'fahad'];
console.log(addLailaToArray(names));



// TASK 4
function eliminateTeam(teams) {
    eliminated = teams.pop();
    return eliminated;
}

let teams = ['red', 'blue', 'yellow', 'green'];
console.log(eliminateTeam(teams));



// CHALLENGE 1
function secondHalfOfArrayIfItIsEven(fruits) {
    if (fruits.length % 2 == 0) {
        index = fruits.length / 2;
        return fruits.slice(index, fruits.length);
    } else {
        return [];
    }
}

let fruits = ['apple', 'grape', 'kiwi', 'banana'];
console.log(secondHalfOfArrayIfItIsEven(fruits));



// CHALLENGE 2
function youGottaCalmDown(shout) {
    if (shout.includes('!')) {
        index = shout.indexOf('!');
        last = shout.lastIndexOf('!');
        final = shout.slice(0, index);
        return final + '!';
    } else {
        return shout
    }
}

let word = 'Hellooooo!!!!!!!!';
console.log(youGottaCalmDown(word));