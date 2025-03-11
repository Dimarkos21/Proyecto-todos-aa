const loginRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// logica de cuando el usuario se loguea.
loginRouter.post('/', async (request, response) => {
    const { email , password } = request.body;
    // buscamos en la db si el usuario existe.
    const userExist = await User.findOne({ email });

    if (!userExist) {
        return response.status(400).json({error:'email o contraseña invalido.'})
    }

    if (!userExist.verified) {
        return response.status(400).json({error:'Tu email no ha sido verificado.'})
    }

    const isCorrect = await bcrypt.compare(password, userExist.passwordHash);
    
    if (!isCorrect) {
        return response.status(400).json('email o contraseña invalido.')
    }

    const userForToken = {
        id: userExist.id,
    }

    const accessToken = jwt.sign(userForToken, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1d',
    });

    response.cookie('accessToken', accessToken, {
        //1 dia de expiracion.
        expires: new Date(Date.now() + 1000 * 60 * 60 *24 * 1),

        secure: process.env.NODE_ENV === "production",
        httpOnly:true
    });
return response.sendStatus(200)

});

    

module.exports = loginRouter;