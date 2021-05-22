// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

//function findMatching (array, name) {
   // return array.filter(name)


function findMatching (array,driver){
return array.filter(function(name) {return name.toLowerCase() === driver.toLowerCase()})}

findMatching(drivers, 'Bobby')

function fuzzyMatch(array, name){
    const fuzzyDrivers = array.filter(function(driver){
        return driver.slice(0,1) === name.slice(0,1);
    });
    return fuzzyDrivers;
}

function matchName(array, possibleMatch) {
    return array.filter(function (name) {
        return name.name === possibleMatch
    })
}
