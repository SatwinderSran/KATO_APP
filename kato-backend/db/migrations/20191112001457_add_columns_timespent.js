
exports.up = function(knex) {
    return Promise.all([
        knex.schema.table('sessions', function(t) {
            t.integer('time_spent').notNull().defaultTo(0);
        }),
        knex.schema.table('questions_answered', function(t) {
            t.integer('time_spent').notNull().defaultTo(0);
        })
    ]);
};

exports.down = function(knex) {
    return Promise.all([
        knex.schema.table('sessions', function(t) {
            t.dropColumn('time_spent');
        }),
        knex.schema.table('questions_answered', function(t) {
            t.dropColumn('time_spent');
        })
    ]);
};