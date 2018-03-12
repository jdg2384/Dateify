exports.up = function(knex, Promise) {
    return knex.schema.createTable('dislikes', table => {
        table.increments('id');
        table.integer('user_id_one')
        table.foreign('user_id_one').references('id').inTable('users').onDelete('CASCADE')
        table.integer('dislikesUser')
        table.foreign('dislikesUser').references('id').inTable('users').onDelete('CASCADE')
    })
    .then(() => {
        return knex.raw(
          "SELECT setval('dislikes_id_seq', (SELECT MAX(id) FROM dislikes))"
        )
    })
};
      
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('dislikes')
};

