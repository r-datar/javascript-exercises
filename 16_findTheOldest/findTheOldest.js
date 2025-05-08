const findAge = function (birthYear, deathYear) {
   if(!deathYear) {
    deathYear = new Date().getFullYear();
   }
   return deathYear - birthYear;
}


const findTheOldest = function(peopleArray) {
    return peopleArray.reduce((oldestPerson, thisPerson) => {
            let oldestPersonAge = findAge(oldestPerson.yearOfBirth,oldestPerson.yearOfDeath);
            let thisPersonAge = findAge(thisPerson.yearOfBirth,thisPerson.yearOfDeath);

            return oldestPersonAge > thisPersonAge ? oldestPerson : thisPerson ;
        });
};

// Do not edit below this line
module.exports = findTheOldest;
