// DEPENDENCIES //
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// MODELS
const User = require('../models/user');


// ROUTES
//create (sign-in)
router.post('/', (req, res) => {
    User.findOne({ username: req.body.username }, (error, foundUser) => {
        if (error) { // Database error
            res.send({
                currentUser: req.session.currentUser,
                flash: 'we are experiencing technical difficulties, please try again'
            });
        } else if (!foundUser) {
            res.send({
                currentUser: req.session.currentUser,
                flash: 'Oh No! Username and password did not match'
            }); 
        } else { // if user is found
            if(bcrypt.compareSync(req.body.password, foundUser.password)) {
                // req.session.currentUser = foundUser;
                // console.log({token: foundUser._id})
                res.send({
                    token: foundUser._id
                    //  currentUser: foundUser
                    // res.redirect('/artworks');
                });
            } else {
                res.send({
                currentUser: foundUser,
                flash: 'Oh No! Username and password did not match'
            }); 
            }
        }
    });   
});

// destroy (signout)
router.delete('/', (req, res) => {
    req.session.destroy();
});

module.exports = router;