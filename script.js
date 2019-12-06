//Functions as arguments (1)

// function repeat(fn, n){
//     for(var i=0; i<n; i++){
//          fn();
//     }
// }

// function hello(){
//      console.log('Hello Word');
// }

// function goodbye(){
//      console.log('Goodbye world')
// }

//  repeat(hello, 5);
//  repeat(goodbye, 5);


//Functions as arguments (2)


 function filter(arr, fn) {
    // TASK: Define your function here
    var newArray = [];
    for(let i of arr){
        if(fn(i)){
            newArray.push(i);
        }
    }
    return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES



//Functions as return values

function hazardWarningCreator (typeOfWarning){
    let warningCounter = 0;
    return location => {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`)

        //bonus
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${warningCounter ==1 ? 'time' : 'times'}`)
    }
}
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const manholeWarning = hazardWarningCreator('Manhole Cover Uncovered');
const godzillaWarning = hazardWarningCreator('Godzilla on hte Loose');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Smith Ave');
godzillaWarning('King\'s Road');