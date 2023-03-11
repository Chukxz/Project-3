const { createHash } = require('crypto');

// Create a string hash 

function hash1(input) {
    return createHash('sha256').update(input).digest('hex')
}

function hash2(input) {
    return createHash('sha512').update(input).digest('hex')
}

//Compare two hashed passwords

let password = 'Hi There!';

const hash1a = hash1(password);
const hash1b = hash1(password);
console.log(hash1a);
console.log(hash1b);

const hash2a = hash2(password);
const hash2b = hash2(password);
console.log(hash2a);
console.log(hash2b);