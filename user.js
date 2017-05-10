var user = {
  name: 'Loren',
  location: 'Provo',
  occupations: ['none', 'fast food', 'banker'],
  hobbies: [
    {
      name: 'reading',
      type: 'lazy'
    },
    {
      name: 'Skyrim',
      type: 'video game'
    },
    {
      name: 'hammocking',
      type: 'lazy'
    }
  ],
  family: [
    {
      name: 'Jessica',
      relation: 'spouse',
      gender: 'female'
    },
    {
      name: 'Clayton',
      relation: 'brother',
      gender: 'male'
    },{
      name: 'Lucia',
      relation: 'mom',
      gender: 'female'
    }
  ],
  restaurants: [
    {
      name: 'Texas Roadhouse',
      type: 'American',
      rating: 9.5
    },
    {
      name: "Chili's",
      type: 'American',
      rating: 8.8
    },
    {
      name: 'El Toro Viejo',
      type: 'Mexican',
      rating: 7.9
    }
  ]
};

module.exports = user;