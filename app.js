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

// Brackets [] - Character Sets
re = /gr[ae]y/i;        // Must be an a or e
re = /[GF]ray/i;        // Must be an G or F
re = /[^GF]ray/;        // Match anything except a G or F
re = /[A-Z]ray/;        // Match any uppercase letter
re = /[a-z]ray/;        // Match any lowercase letter
re = /[A-Za-z]ray/;        // Match any letter
re = /[0-9]ray/;        // Match any digit
re = /[0-9][0-9][0-9]ray/;        // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;        // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;      // Must occur exactly {m} to {n} amount of times
re = /Hel{2,}o/i;       // Must occur at least {m} amount of times

// Paranthesis () - Grouping
re = /^([0-9]x){3}$/;

// Shorthand character classes
re = /\w/;      // Word character - alphanumeric or _
re = /\w+/;     // + means on or more character
re = /\W/;      // Non-word character
re = /\d/;      // Match any digit
re = /\d+/;     // Match any digit 0 or more times
re = /\D/;      // Match any non-digit 
re = /\s/;      // Match whitespace character
re = /\S/;      // Match non-whitespace character
re = /\bis\b/i; // Word boundary

// Assertions
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x only if NOT followed by y


// String to match
const str = 'This island is beautifulx';

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