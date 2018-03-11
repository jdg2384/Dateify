
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          name: 'Patrick',
          age: 24,
          gender: 'male',
          photo: 'http://placekitten.com/200/300',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'female',
          thumbs_up: '2',
          thumbs_down: '0',
        },
        {
          id: 2, 
          name: 'Betty',
          age: 24,
          gender: 'Female',
          photo: 'http://placekitten.com/200/300',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'male',
          thumbs_up: '1',
          thumbs_down: '0',
        },
        {
          id: 3, 
          name: 'jimbo',
          age: 24,
          gender: 'male',
          photo: 'http://placekitten.com/200/300',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'male',
          thumbs_up: '4',
          thumbs_down: '2',
        },
        {
          id: 4, 
          name: 'Bobert',
          age: 29,
          gender: 'female',
          photo: 'http://placekitten.com/200/300',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'male',
          thumbs_up: '3',
          thumbs_down: '2',
        }
      ]);
    });
};


