exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('likes').del()
    .then(function () {
      // Inserts seed entries
      return knex('likes').insert([
        // {
        //   id: 1, 
        //   user_id_one: 1,
        //   user_id_two: 2,
        // },
        // {
        //   id: 2, 
        //   user_id_one: 2,
        //   user_id_two: 1,
        // },
        // {
        //   id: 3, 
        //   user_id_one: 3,
        //   user_id_two: 2,
        // },
        // {
        //   id: 4, 
        //   user_id_one: 4,
        //   user_id_two: 1,
        // }
      ]);
    });
};

