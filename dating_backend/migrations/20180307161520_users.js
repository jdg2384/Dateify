exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id');
        table.string('name').notNullable();
        table.integer('age').notNullable();
        table.string('gender').notNullable();
        table.string('photo').notNullable();
        table.string('age_range').notNullable();
        table.integer('radius').notNullable();
        table.string('desired_gender').notNullable();
        table.jsonb('top_tracks').notNullable();
        table.jsonb('top_artists').notNullable();
        // table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
        // table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
    })
};
      
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
