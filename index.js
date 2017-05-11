const express = require('express');
const bodyParser = require('body-parser');
const mainCtrl = require('./controllers/mainCtrl');
const middleware = require('./controllers/middleware');


var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesByType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyByGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantByName);
app.get('/skills', mainCtrl.getSkills);
app.get('/secrets/:username/:password', middleware.verifyUser, mainCtrl.getSecrets);

app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);

app.post('/hobbies', mainCtrl.addNewHobby);
app.post('/occupations', mainCtrl.addNewOccupation);
app.post('/family', mainCtrl.addNewFamilyMember);
app.post('/restaurants', mainCtrl.addNewRestaurant);
app.post('/skills', middleware.generateId, mainCtrl.addSkill);





app.listen(8000);
