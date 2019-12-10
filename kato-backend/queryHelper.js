const Pool = require('pg').Pool
const pool = {
    client: 'pg',
    connection: {
        user: 'postgres',
        host: 'localhost',
        database: 'kato',
        password: 'poke123',
        port: 5432,
    }
}

const knex = require('knex')(pool);

const users = [
    {id: 101, first_name: 'jimmy', last_name: 'sran', email:'jsran@yahoo.com', password: 'qwerty', school: 'UPA', grade: 12, created_at: '2019-10-26 00:00:00-07' , update_at: '2019-10-26 00:04:00-07'},
    {id: 102, first_name: 'rakesh', last_name: 'raju', email:'rraju@yahoo.com', password: 'aswdf', school: 'USF', grade: 11, created_at: '2019-10-26 00:00:00-07' , update_at: '2019-10-26 00:04:00-07'},
    {id: 103, first_name: 'rabiga', last_name: 'mukhit', email:'rmukhit@yahoo.com', password: 'zxcvb', school: 'UDT', grade: 11, created_at: '2019-10-26 00:00:00-07' , update_at: '2019-10-26 00:04:00-07'},
    {id: 113, first_name: 'daniel', last_name: 'estrada', email:'destrada@yahoo.com', password: 'poiuyt', created_at: '2019-10-26 00:00:00-07' , update_at: '2019-10-26 00:04:00-07'},
    {id: 114, first_name: 'lukas', last_name: 'plass', email:'lplass@yahoo.com', password: 'lkjhgf', created_at: '2019-10-26 00:00:00-07' , update_at: '2019-10-26 00:04:00-07'},
    {id: 115, first_name: 'ryan', last_name: 'idelhenn', email:'ridealhen@yahoo.com', password: 'lkjhgf', created_at: '2019-10-26 00:00:00-07' , update_at: '2019-10-26 00:04:00-07'},
]

const student = [
    {id: 104, user_id: 101, parent_id: 107},
    {id: 105, user_id: 102, parent_id: 108},
    {id: 106, user_id: 103, parent_id: 109},
]

const parent = [
    {id: 107, user_id: 113, student_id: 104},
    {id: 108, user_id: 114, student_id: 105},
    {id: 109, user_id: 115, student_id: 106},
]

const category = [
    {id: 115, name: 'Heart of Algebra', created_at: '2019-10-26 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id: 116, name: 'Passport in Advanced Math', created_at: '2019-10-26 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id: 117, name: 'Problem Solving and Data Analysis', created_at: '2019-10-26 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
]

const topic = [
    {id: 118, category_id: 115, name: 'Linear Equations', created_at: '2019-10-26 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id: 119, category_id: 116, name: 'System of Linear Equations', created_at: '2019-10-26 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id: 120, category_id: 117, name: 'Word Problems', created_at: '2019-10-26 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
]

const skill = [
    {id: 121, topic_id: 118, name: 'Solving for X', created_at: '2019-10-26 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id: 122, topic_id: 119, name: 'Skill 2', created_at: '2019-10-26 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id: 123, topic_id: 120, name: 'Skill 3', created_at: '2019-10-26 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
]

const score = [
    {id:124, student_id: 104, score: 56, category_id: 115, topic_id: 118, skill_id:121, question_id: 200, created_at: '2019-09-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:125, student_id: 104, score: 66, category_id: 115, topic_id: 118, skill_id:121, question_id: 201, created_at: '2019-09-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:126, student_id: 104, score: 76, category_id: 115, topic_id: 118, skill_id:121, question_id: 202, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:127, student_id: 104, score: 86, category_id: 115, topic_id: 118, skill_id:121, question_id: 203, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:128, student_id: 105, score: 56, category_id: 115, topic_id: 118, skill_id:121, question_id: 200, created_at: '2019-09-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:129, student_id: 105, score: 66, category_id: 115, topic_id: 118, skill_id:121, question_id: 201, created_at: '2019-09-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:130, student_id: 105, score: 76, category_id: 115, topic_id: 118, skill_id:121, question_id: 202, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:131, student_id: 105, score: 86, category_id: 115, topic_id: 118, skill_id:121, question_id: 203, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:132, student_id: 106, score: 56, category_id: 115, topic_id: 118, skill_id:121, question_id: 200, created_at: '2019-09-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:133, student_id: 106, score: 66, category_id: 115, topic_id: 118, skill_id:121, question_id: 201, created_at: '2019-09-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:134, student_id: 106, score: 76, category_id: 115, topic_id: 118, skill_id:121, question_id: 202, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:135, student_id: 106, score: 86, category_id: 115, topic_id: 118, skill_id:121, question_id: 203, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:136, student_id: 104, score: 86, category_id: 116, topic_id: 119, skill_id:122, question_id: 204, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:137, student_id: 104, score: 96, category_id: 116, topic_id: 119, skill_id:122, question_id: 205, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:138, student_id: 104, score: 99, category_id: 116, topic_id: 119, skill_id:122, question_id: 206, created_at: '2019-09-17 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:139, student_id: 104, score: 39, category_id: 116, topic_id: 119, skill_id:122, question_id: 207, created_at: '2019-09-17 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:140, student_id: 105, score: 46, category_id: 116, topic_id: 119, skill_id:122, question_id: 204, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:141, student_id: 105, score: 76, category_id: 116, topic_id: 119, skill_id:122, question_id: 205, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:142, student_id: 105, score: 99, category_id: 116, topic_id: 119, skill_id:122, question_id: 206, created_at: '2019-09-17 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:143, student_id: 105, score: 79, category_id: 116, topic_id: 119, skill_id:122, question_id: 207, created_at: '2019-09-17 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:144, student_id: 106, score: 16, category_id: 116, topic_id: 119, skill_id:122, question_id: 204, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:145, student_id: 106, score: 66, category_id: 116, topic_id: 119, skill_id:122, question_id: 205, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:146, student_id: 106, score: 99, category_id: 116, topic_id: 119, skill_id:122, question_id: 206, created_at: '2019-09-17 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:147, student_id: 106, score: 43, category_id: 116, topic_id: 119, skill_id:122, question_id: 207, created_at: '2019-09-17 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:148, student_id: 104, score: 86, category_id: 117, topic_id: 120, skill_id:123, question_id: 208, created_at: '2019-09-24 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:149, student_id: 104, score: 87, category_id: 117, topic_id: 120, skill_id:123, question_id: 209, created_at: '2019-09-24 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:150, student_id: 104, score: 99, category_id: 117, topic_id: 120, skill_id:123, question_id: 210, created_at: '2019-10-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:151, student_id: 104, score: 24, category_id: 117, topic_id: 120, skill_id:123, question_id: 211, created_at: '2019-10-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:152, student_id: 105, score: 88, category_id: 117, topic_id: 120, skill_id:123, question_id: 208, created_at: '2019-09-24 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:153, student_id: 105, score: 89, category_id: 117, topic_id: 120, skill_id:123, question_id: 209, created_at: '2019-09-24 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:154, student_id: 105, score: 67, category_id: 117, topic_id: 120, skill_id:123, question_id: 210, created_at: '2019-10-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:155, student_id: 105, score: 92, category_id: 117, topic_id: 120, skill_id:123, question_id: 211, created_at: '2019-10-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:156, student_id: 106, score: 94, category_id: 117, topic_id: 120, skill_id:123, question_id: 208, created_at: '2019-09-24 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:157, student_id: 106, score: 85, category_id: 117, topic_id: 120, skill_id:123, question_id: 209, created_at: '2019-09-24 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:158, student_id: 106, score: 92, category_id: 117, topic_id: 120, skill_id:123, question_id: 210, created_at: '2019-10-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    {id:159, student_id: 106, score: 79, category_id: 117, topic_id: 120, skill_id:123, question_id: 211, created_at: '2019-10-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
]

const sessions = [
    {id: 160, student_id: 104, start_timestamp: '2019-09-01 00:00:00-07' , end_timestamp: '2019-10-26 00:01:30-07', time_spent: 330},
    {id: 212, student_id: 104, start_timestamp: '2019-09-08 00:00:00-07' , end_timestamp: '2019-10-26 00:01:30-07', time_spent: 130},
    {id: 213, student_id: 104, start_timestamp: '2019-09-17 00:00:00-07' , end_timestamp: '2019-10-26 00:01:30-07', time_spent: 230},
    {id: 214, student_id: 104, start_timestamp: '2019-09-24 00:00:00-07' , end_timestamp: '2019-10-26 00:01:30-07', time_spent: 730},
    {id: 215, student_id: 104, start_timestamp: '2019-10-01 00:00:00-07' , end_timestamp: '2019-10-26 00:01:30-07', time_spent: 530},
    {id: 216, student_id: 105, start_timestamp: '2019-09-01 00:00:00-07' , end_timestamp: '2019-10-26 00:01:30-07', time_spent: 630},
    {id: 217, student_id: 105, start_timestamp: '2019-09-08 00:00:00-07' , end_timestamp: '2019-10-26 00:01:30-07', time_spent: 230},
    {id: 218, student_id: 105, start_timestamp: '2019-09-17 00:00:00-07' , end_timestamp: '2019-10-26 00:01:30-07', time_spent: 530},
    {id: 219, student_id: 105, start_timestamp: '2019-09-24 00:00:00-07' , end_timestamp: '2019-10-26 00:01:30-07', time_spent: 330},
    {id: 220, student_id: 105, start_timestamp: '2019-10-01 00:00:00-07' , end_timestamp: '2019-10-26 00:01:30-07', time_spent: 120},
    {id: 221, student_id: 106, start_timestamp: '2019-09-01 00:00:00-07' , end_timestamp: '2019-10-26 00:01:30-07', time_spent: 430},
    {id: 222, student_id: 106, start_timestamp: '2019-09-08 00:00:00-07' , end_timestamp: '2019-10-26 00:01:30-07', time_spent: 120},
    {id: 223, student_id: 106, start_timestamp: '2019-09-17 00:00:00-07' , end_timestamp: '2019-10-26 00:01:30-07', time_spent: 110},
    {id: 224, student_id: 106, start_timestamp: '2019-09-24 00:00:00-07' , end_timestamp: '2019-10-26 00:01:30-07', time_spent: 880},
    {id: 225, student_id: 106, start_timestamp: '2019-10-01 00:00:00-07' , end_timestamp: '2019-10-26 00:01:30-07', time_spent: 990},

]

const questions_answered = [
        {id: 161, student_id: 104, question_id: 200, correct_answer: true, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 90, created_at: '2019-09-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 162, student_id: 104, question_id: 201, correct_answer: true, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 60, created_at: '2019-09-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 163, student_id: 104, question_id: 202, correct_answer: true, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 190, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 164, student_id: 104, question_id: 203, correct_answer: true, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 20, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 165, student_id: 104, question_id: 204, correct_answer: true, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 190, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 166, student_id: 104, question_id: 205, correct_answer: true, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 40, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 167, student_id: 104, question_id: 206, correct_answer: true, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 30, created_at: '2019-09-17 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 168, student_id: 104, question_id: 207, correct_answer: true, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 20, created_at: '2019-09-17 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 169, student_id: 104, question_id: 208, correct_answer: true, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 40, created_at: '2019-09-24 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 170, student_id: 104, question_id: 209, correct_answer: true, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 110, created_at: '2019-09-24 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 171, student_id: 104, question_id: 210, correct_answer: true, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 50, created_at: '2019-10-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 172, student_id: 104, question_id: 211, correct_answer: true, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 40, created_at: '2019-10-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 173, student_id: 105, question_id: 200, correct_answer: true, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 120, created_at: '2019-09-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 174, student_id: 105, question_id: 201, correct_answer: true, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 150, created_at: '2019-09-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 175, student_id: 105, question_id: 202, correct_answer: true, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 170, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 176, student_id: 105, question_id: 203, correct_answer: true, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 330, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 177, student_id: 105, question_id: 204, correct_answer: true, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 20, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 178, student_id: 105, question_id: 205, correct_answer: true, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 180, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 179, student_id: 105, question_id: 206, correct_answer: false, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 90, created_at: '2019-09-17 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 180, student_id: 105, question_id: 207, correct_answer: false, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 110, created_at: '2019-09-17 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 181, student_id: 105, question_id: 208, correct_answer: false, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 140, created_at: '2019-09-24 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 182, student_id: 105, question_id: 209, correct_answer: false, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 220, created_at: '2019-09-24 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 183, student_id: 105, question_id: 210, correct_answer: false, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 40, created_at: '2019-10-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 184, student_id: 105, question_id: 211, correct_answer: false, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 50, created_at: '2019-10-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 185, student_id: 106, question_id: 200, correct_answer: false, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 110, created_at: '2019-09-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 186, student_id: 106, question_id: 201, correct_answer: false, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 30, created_at: '2019-09-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 187, student_id: 106, question_id: 202, correct_answer: false, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 220, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 188, student_id: 106, question_id: 203, correct_answer: false, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 110, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 189, student_id: 106, question_id: 204, correct_answer: false, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 80, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 190, student_id: 106, question_id: 205, correct_answer: false, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 110, created_at: '2019-09-08 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 191, student_id: 106, question_id: 206, correct_answer: false, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 90, created_at: '2019-09-17 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 192, student_id: 106, question_id: 207, correct_answer: false, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 110, created_at: '2019-09-17 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 193, student_id: 106, question_id: 208, correct_answer: false, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 70, created_at: '2019-09-24 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 194, student_id: 106, question_id: 209, correct_answer: false, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 140, created_at: '2019-09-24 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 195, student_id: 106, question_id: 210, correct_answer: false, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 60, created_at: '2019-10-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
        {id: 196, student_id: 106, question_id: 211, correct_answer: false, start_timestamp: '2019-11-26 00:00:00-07', end_timestamp: '2019-11-26 00:00:00-07', time_spent: 70, created_at: '2019-10-01 00:00:00-07' , updated_at: '2019-10-26 00:04:00-07'},
    ]

    /**
    knex('student').insert(student).then(() => console.log("data inserted for student"))
     .catch((err) => { console.log(err); throw err })
     .finally(() => {
        knex.destroy();
    });

     knex('parent').insert(parent).then(() => console.log("data inserted for student"))
     .catch((err) => { console.log(err); throw err })
     .finally(() => {
        knex.destroy();
    });


     knex('users').insert(users).then(() => console.log("data inserted for users"))
     .catch((err) => { console.log(err); throw err })
     .finally(() => {
        knex.destroy();
    });
     */
    /**
    knex('category').insert(category).then(() => console.log("data inserted for category"))
     .catch((err) => { console.log(err); throw err })
     .finally(() => {
        knex.destroy();
    });


     knex('topic').insert(topic).then(() => console.log("data inserted for topic"))
     .catch((err) => { console.log(err); throw err })
     .finally(() => {
        knex.destroy();
    });


    knex('skill').insert(skill).then(() => console.log("data inserted for skill"))
        .catch((err) => { console.log(err); throw err })
        .finally(() => {
            knex.destroy();
        });
    knex('score').insert(score).then(() => console.log("data inserted for score"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });
    */
 knex('sessions').insert(sessions).then(() => console.log("data inserted for sessions"))
 .catch((err) => { console.log(err); throw err })
 .finally(() => {
        knex.destroy();
    });


knex('questions_answered').insert(questions_answered).then(() => console.log("data inserted for questions answered"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });

