exports.up = function(knex, Promise) {
    return knex.schema.createTable('likes', table => {
        table.increments('id');
        table.integer('user_id_one')
        table.foreign('user_id_one').references('id').inTable('users').onDelete('CASCADE')
        table.integer('user_id_two')
        table.foreign('user_id_two').references('id').inTable('users').onDelete('CASCADE')
        // table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
        // table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
    })
};
      
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('likes')
};
