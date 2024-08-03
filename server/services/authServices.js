const authRepo = require('../repo/authRepo');

const userRegister = async (body) => {
    const { username, email, password } = body;

    if (!username ) {
        throw new Error('username required')
    }
    if (!email ) {
        throw new Error('email required')
    }
    if (!password ) {
        throw new Error('password required')
    }
    const data = await authRepo.createUser({username, email, password});

    return data;
}

const userLogin = async (body) => {
    const {email, password} = body

    if ( !email ) {
        throw new Error('email required')
    }

    if ( !password ) {
        throw new Error('password required')
    }

    const user = await authRepo.loginUser(email);

    if ( !user || !(await user.comparePassword(password)) ) {
        throw new Error('Invalid credentail')
    }

    const token = user.generateAuthToken();
    
    return token;
}



module.exports.userRegister = userRegister
module.exports.userLogin = userLogin