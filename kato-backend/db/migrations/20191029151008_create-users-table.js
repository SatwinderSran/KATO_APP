
exports.up = function(knex) {
    return Promise.all([
        knex.schema.createTable('users', (table) => {
            table.increments('id').primary();
            table.string('first_name');
            table.string('last_name');
            table.string('email');
            table.string('password');
            table.string('school');
            table.integer('grade');
            table.timestamp('created_at');
            table.timestamp('update_at');
        }),

        knex.schema.createTable('student', (table) => {
            table.integer('id').primary();
            table.integer('user_id')
                .references('id')
                .inTable('users');
            table.integer('parent_id')
                .references('id')
                .inTable('parent');
            table.integer('teacher_id')
                .references('id')
                .inTable('teacher');
        }),

        knex.schema.createTable('category', (table) => {
            table.integer('id').primary();
            table.string('name');
            table.timestamp('created_at');
            table.timestamp('updated_at');
        }),

        knex.schema.createTable('topic', (table) => {
            table.integer('id').primary();
            table.integer('category_id')
                .references('id')
                .inTable('category');
            table.string('name');
            table.timestamp('created_at');
            table.timestamp('updated_at');
        }),

        knex.schema.createTable('skill', (table) => {
            table.integer('id').primary();
            table.integer('topic_id')
                .references('id')
                .inTable('topic');
            table.string('name');
            table.timestamp('created_at');
            table.timestamp('updated_at');
        }),

        knex.schema.createTable('score', (table) => {
            table.integer('id').primary();
            table.integer('student_id')
                .references('id')
                .inTable('student');
            table.integer('score');
            table.integer('category_id')
                .references('id')
                .inTable('category');
            table.integer('topic_id')
                .references('id')
                .inTable('topic');
            table.integer('skill_id')
                .references('id')
                .inTable('skill');
            table.integer('question_id');
            table.timestamp('created_at');
            table.timestamp('updated_at');
        }),

        knex.schema.createTable('score_history_by_day', (table) => {
            table.integer('id').primary();
            table.integer('student_id')
                .references('id')
                .inTable('student');
            table.integer('score');
            table.integer('category_id')
                .references('id')
                .inTable('category');
            table.integer('topic_id')
                .references('id')
                .inTable('topic');
            table.integer('skill_id')
                .references('id')
                .inTable('skill');
            table.dateTime('day');
            table.timestamp('created_at');
            table.timestamp('updated_at');
        }),

        knex.schema.createTable('sessions', (table) => {
            table.integer('id').primary();
            table.integer('student_id')
                .references('id')
                .inTable('student');
            table.timestamp('start_timestamp');
            table.timestamp('end_timestamp');
        }),

        knex.schema.createTable('parent', (table) => {
            table.integer('id').primary();
            table.integer('user_id')
                .references('id')
                .inTable('users');
            table.integer('student_id')
                .references('id')
                .inTable('student');
        }),

        knex.schema.createTable('teacher', (table) => {
            table.integer('id').primary();
            table.integer('user_id')
                .references('id')
                .inTable('users');
            table.integer('student_id')
                .references('id')
                .inTable('student');
        }),

        knex.schema.createTable('questions_answered', (table) => {
            table.integer('id').primary();
            table.integer('student_id')
                .references('id')
                .inTable('student');
            table.integer('question_id');
            table.boolean('correct_answer');
            table.timestamp('start_timestamp');
            table.timestamp('end_timestamp');
            table.timestamp('created_at');
            table.timestamp('updated_at');
        }),
        knex.schema.createTable('events', (table) => {
            table.integer('id').primary();
            table.integer('student_id')
                .references('id')
                .inTable('student');
            table.string('event_type');
            table.boolean('correct_answer');
            table.integer('question_id');
            table.integer('value');
            table.timestamp('created_at');
            table.timestamp('updated_at');
        })
    ]);
};

exports.down = function(knex) {
    return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('student'),
        knex.schema.dropTable('parent'),
        knex.schema.dropTable('teacher'),
        knex.schema.dropTable('category'),
        knex.schema.dropTable('topic'),
        knex.schema.dropTable('skill'),
        knex.schema.dropTable('score'),
        knex.schema.dropTable('score_history_by_day'),
        knex.schema.dropTable('sessions'),
        knex.schema.dropTable('questions_answered'),
        knex.schema.dropTable('events')
    ])
};
