const { generateKeyPairSync } = require('crypto');

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048, //the Length of the Key in bits
    publicKeyEncoding: {
        type: 'spki', // recommended to be 'spki' by the Node.js docs-content
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8', // recommended to be 'pkcs8' by the Node.js docs
        format: 'pem',
        // cipher: 'aes-256-cbc',
        // passphrase: 'top-secret'
    },
});

console.log(publicKey);
console.log(privateKey);

module.exports = {
    privateKey,
    publicKey
}