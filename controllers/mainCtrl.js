const user = require('../user');
const skills = require('../skills');
const secrets = require('../secrets');


module.exports = {
    getName: function(req, res, next){
        res(200).json({name: user.name});
    },

    getLocation: function(req, res, next){
        res(200).json({location: user.location});
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
        res(200).json({occupations: occupations});
    },

    getLatestOccupation: function(req, res, next){
        let occupations = user.occupations;
        res(200).json({latestOccupation: occupations[occupations.length-1] });
    },

    getHobbies: function(req, res, next){
        res(200).json({hobbies: user.hobbies});
    },

    getHobbiesByType: function(req, res, next){
        let type = req.params.type;
        let hobbies = user.hobbies.slice();
        for (let i = 0; i < hobbies.length; i ++){
            if (hobbies[i].type != type){
                hobbies.splice(i--, 1);
            }
        }
        res(200).json({type: hobbies});
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
        }
        res(200).json({family: family});    
        
    },

    getFamilyByGender: function(req, res, next){
        let family = user.family.slice();
        let gender = req.params.gender;
        for (var i = family.length-1; i >= 0; i --){
            if (family[i].gender != gender){
                family.splice(i, 1);
            }
        }
        res(200).json({gender: family});
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
        res(200).json({restaurants: restaurants});
    },

    getRestaurantByName: function(req, res, next){
        let name = req.params.name;
        let restaurants = user.restaurants.slice();
        for (var i = restaurants.length-1; i >= 0; i --){
            if (restaurants[i].name != name){
                restaurants.splice(i, 1);
            }
        }
        res(200).json(restaurants);
    },

    changeName: function(req, res, next){
       var newName = req.body.newName;
       user.name = newName;
        res(200).send('ok');   
    },

    changeLocation: function(req, res, next){
       var newLocation = req.body.newLocation;
       user.location = newLocation;
        res(200).send('ok');         
    },

    addNewHobby: function(req, res, next){
       var newHobbyObj = req.body.newHobbyObj;
       user.hobbies.push(newHobbyObj);
        res(200).send('ok');   
    },

    addNewOccupation: function(req, res, next){
       var newOccupation = req.body.newOccupation;
       user.occupations.push(newOccupation);
        res(200).send('ok');          
    },

    addNewFamilyMember: function(req, res, next){
       var newPersonObj = req.body.newPersonObj;
       user.family.push(newPersonObj);
        res(200).send('ok');   
    },

    addNewRestaurant: function(req, res, next){
       var newRestaurantObj = req.body.newRestaurantObj;
       user.restaurants.push(newRestaurantObj);
        res(200).send('ok');      
    },

    getSkills: function(req, res, next){
        let skillset = skills.skillset.slice();
        let experience = req.query.experience;
        if(experience){
            for (var i = skillset.length-1; i >= 0; i--){
                if (skillset[i].experience != experience){
                    skillset.splice(i, 1);
                }
            }
        }
        res(200).json({skills: skillset});
    },

    addSkill: function(req, res, next){
        let newSkill = req.body;
        skillset.push(newSkill);
        res(200).send('ok');
    },

    getSecrets: function(req, res, next){
        res(200).json(secrets);
    }

}