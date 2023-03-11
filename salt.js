const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

function signup(email, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64);

    const user = { email, password: `${salt}:${hashedPassword}` };

    users.push(user);

    return user
}

function login(email, password) {
    const user = users.find(v => v.email === email);

    const [salt, key] = user.password.split(':');
    const hasedBuffer = scryptSync(password, salt, 64)

    const keyBuffer = Buffer.from();
    const match = timingSafeEqual(hasedBuffer, keyBuffer);

    if (match) {
        return 'login success!'
    } else {
        return 'login fail!'
    }
}

signup('edsl@gmail.com', 'terrible');

login('edsl@gmail.com', 'terrible');