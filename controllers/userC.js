var helpers = require('../middlewares/helpers');
var userM = require('../modules/users');

const md5 = require('md5');
module.exports = {  
    signup: (req, res) => {
        let {name, age, email, password} = req.body;
        let data = {name, age, email, password};
        let checkava = helpers.checkKeyExist(data, ['name', 'age', 'email', 'password'])
        if(!checkava.length){
            helpers.checkavailability(userM, {email})
            .then(response => {
                if(response) throw new Error('User Already Exists');
                else{
                    data.password = md5(password);
                    var user = new userM(data);
                    return new Promise((resolve, reject) => {
                        user.save((err, resp) => {
                            (err)? reject(err):resolve(resp)
                        })
                    })
                }
            })
            .then(response => res.status(200).json({ message: "User Added", response }) )
            .catch(err => res.status(400).json({ message: err.message }) )
        }
        else{
            res.status(422).json({ response: checkava[0] })
        }
    },
    login: (req, res) => {
        let {email, password} = req.body;
        let data = {email, password};

        let checkkey = helpers.checkKeyExist(data, ['email', 'password'])
        if(!checkkey.length){
            helpers.dBfindOne(userM, { email, password: md5(password) })
            .then(response => {
                res.status(200).json({response});
            })
        }
        else{
            res.status(422).json({ response: checkkey[0] })
        }
        
    }
}