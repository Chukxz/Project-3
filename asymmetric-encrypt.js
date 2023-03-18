const { publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const message = 'the british are coming!'

const encryptedDate = publicEncrypt(
    publicKey,
    Buffer.from(message)
);

console.messager = 'the british are coming!'

const decryptedData = privateDecrypt(
    privateKeym,
    encryptedData
);

console.log(decryptedData.toString('utf-8'));