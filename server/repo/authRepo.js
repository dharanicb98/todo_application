const User = require('../models/user');

const createUser = async (body) => {
    try {
        const user = new User(body);
        await user.save();
    }
    catch (e) {
        throw new Error(`db error ${e?.message}`)
    }
}

const loginUser = async (email) => {
    try {
        const user = await User.findOne({ email });
        return user
    }
    catch (e) {
        throw new Error(`db error ${e?.message}`)
    }
}

module.exports.createUser = createUser
module.exports.loginUser = loginUser