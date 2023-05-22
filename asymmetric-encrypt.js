const { publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const message = 'the british are coming!'

const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(message)
);

console.messager = 'the british are coming!'

const decryptedData = privateDecrypt(
    privateKey,
    encryptedData,
);

console.log(decryptedData.toString('utf-8'));