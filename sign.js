const { createSign, createVerify, sign } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const message = 'this data must be signed';

/// SIGN

const signer = createSign('rsa-sha256');

signer.update(message);

const signature = signer;

/// VERIFY

const isVerifier = createVerify(publicKey, signature, 'hex');