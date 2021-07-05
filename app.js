// let re;
// re = /hello/
// re = /hello/i  // i = case insensitive

// console.log(re);
// console.log(re.source);

// exec() - return result in an array or null

// const result = re.exec('world hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - return true or false
// const result = re.test('Hello');
// console.log(result);

// match() - return result array or null
// const str = 'Hello there';
// const result = str.match(re);
// console.log(result);

// search() - returns index of the first match if not found results -1
// const str = 'Hello World';
// const result = str.search(re);
// console.log(result)

// replace() - return a new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);

let re;
// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbol
re = /^h/i;  // Must start with
re = /d$/;   // Must end with
re = /^Hello World$/;   // Must start and end with
re = /h.llo/i;         // Matches any ONE character
re = /h*llo/i;         // Matches any character 0 or more times
re = /gre?a?y/;        // optional character
re = /gre?a?y\?/;        // Escape character



// String to match
const str = 'gray?';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`)
    } else {
        console.log(`${str} does NOT match ${re.source}`) 
    }
}


reTest(re, str);