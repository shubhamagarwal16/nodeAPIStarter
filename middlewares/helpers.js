const _ = require('lodash');

module.exports = {
    checkavailability: (db, query) => {
        console.log('checkavailability');
        return new Promise((resolve, reject) => {
            db.findOne(query)
            .then(response => {
                    resolve(response)
            } )
            .catch(err => reject(err) )
        })
    },
    checkKeyExist: (req, arr)=>{
        var array = [];
        _.map(arr, (item) => {
            if(req.hasOwnProperty(item)) {
                var value = req[item];
                if( value === '' || value === undefined ) 
                    array.push(`${item} can not be empty`);                
            } 
            else 
                array.push(item+" key is missing");
        })
        return (array); 
    },
    dBfindOne: (db, query = {}) => new Promise((resolve, reject) => {
        db.findOne(query)
        .then(response => resolve(response) )
        .catch(err => reject(err) )
    }),
    dBfind: (db, query = {}) => new Promise((resolve, reject) => {
        db.find(query)
        .then(response => resolve(response) )
        .catch(err => reject(err) )
    }),
}