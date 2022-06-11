// Code your solution here
function findMatching(drivers, stringText) {
    return drivers.filter((possibleMatch) => possibleMatch.toLowerCase() === stringText.toLowerCase());
  }
  
  function fuzzyMatch(drivers, stringWithLetters) {
    return drivers.filter((possibleMatch) => possibleMatch.toLowerCase().indexOf(stringWithLetters.toLowerCase()) === 0);
  }
  
//   function matchName(drivers, driverName) {
//     return  drivers.filter((record) => record.name === driverName);
//   }