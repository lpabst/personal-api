const user = require('../user');

// let userInfo = user

module.exports = {
    getName: function(req, res, next){
        return {name: user.name};
    },

    getLocation: function(req, res, next){
        return {location: user.location};
    },

    getOccupations: function(req, res, next){
        const occupations = user.occupations;
        if (req.query.order){
            if (req.query.order == 'desc'){
                occupations = user.occupations.sort().reverse(); 
            }else if (req.query.order == 'asc'){
                occupations = user.occupations.sort(); 
            }
        }
        return {occupations: occupations};
    },

    getLatestOccupation: function(req, res, next){
        let occupations = user.occupations;
        return {latestOccupation: occupations[occupations.length-1] };
    },

    getHobbies: function(req, res, next){
        return {hobbies: user.hobbies};
    },

    getHobbiesByType: function(req, res, next){
        let type = req.params.type;
        let hobbies = user.hobbies.slice();
        for (let i = 0; i < hobbies.length; i ++){
            if (hobbies[i].type != type){
                hobbies.splice(i--, 1);
            }
        }
        return {type: hobbies};
    },

    getFamily: function(req, res, next){
        let relation = req.query.relation;
        let family = user.family.slice();
        if (relation){
            for (var i = family.length-1; i >= 0; i--){
                if(relation != family[i].relation){
                    family.splice(i, 1);
                }
            }
            return { family: family };
        }else{
            return {family: family};    
        }
    },

    getFamilyByGender: function(req, res, next){
        let family = user.family.slice();
        let gender = req.params.gender;
        for (var i = family.length-1; i >= 0; i --){
            if (family[i].gender != gender){
                family.splice(i, 1);
            }
        }
        return {gender: family};
    },

    getRestaurants: function(req, res, next){
        let restaurants = user.restaurants.slice();
        let rating = parseInt(req.query.rating, 10);
        if (rating){
            for (var i = restaurants.length-1; i >= 0; i--){
                if (restaurants[i].rating < rating){
                    restaurants.splice(i, 1);
                }
            }
        }
        return {restaurants: restaurants};
    },

    getRestaurantByName: function(req, res, next){
        let name = req.params.name;
        let restaurants = user.restaurants.slice();
        for (var i = restaurants.length-1; i >= 0; i --){
            if (restaurants[i].name != name){
                restaurants.splice(i, 1);
            }
        }
        return restaurants;
    },

    changeName: function(req, res, next){
       var newName = req.body.newName;
       user.name = newName;
    },

    changeLocation: function(req, res, next){
       var newLocation = req.body.newLocation;
       user.location = newLocation;       
    },

    addNewHobby: function(req, res, next){
       var newHobbyObj = req.body.newHobbyObj;
       user.hobbies.push(newHobbyObj);
    },

    addNewOccupation: function(req, res, next){
       var newOccupation = req.body.newOccupation;
       user.occupations.push(newOccupation);       
    },

    addNewFamilyMember: function(req, res, next){
       var newPersonObj = req.body.newPersonObj;
       user.family.push(newPersonObj);
    },

    addNewRestaurant: function(req, res, next){
       var newRestaurantObj = req.body.newRestaurantObj;
       user.restaurants.push(newRestaurantObj);       
    },

    


}