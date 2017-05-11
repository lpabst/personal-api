const skills = require('../skills');
const secrets = require('../secrets');

module.exports = {
    addHeaders: function(req, res, next){
        res.status(200).set({
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'X-XSS-Protection': '1; mode=block',
            'X-Frame-Options': 'SAMEORIGIN',
            'Content-Security-Policy': "default-src 'self' devmountain.github.io"
        });

        next();
    },

    generateId: function(req, res, next){
        let id = skills.skillset.length + 1;
        req.body.id = id;

        next();
    },

    verifyUser: function(req, res, next){
        if (req.params.username == 'lpabst' && req.params.password == 'lorenisthebest'){
            next();
        }else{
            res.status(403).send('Wrong username/password');
        }
    }
}