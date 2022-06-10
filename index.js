const record = [
 {year: "2015", result: "W"},
  {year: "2014", result: "N/A"},
   {year: "2013", result: "L"},
]
// Turned this call back function into arrow function below
//const callback = (element) => {
//    return element.result === 'W'
//}

function superbowlWin (record){
    const obj = record.find(element => element.result === 'W')
    if (obj !== undefined) {
        return obj.year
    }
}

console.log(superbowlWin(record))
