var express = require('express');
var knex = require('knex');
var router = express.Router();
const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('../knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration);
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'kato',
    password: 'poke123',
    port: 5432,
})


router.get('/', function(req, res, next) {
    pool.query('SELECT * FROM student', (error, results) => {
        if (error) {
            throw error
        }
        res.json(results.rows);
    })
});

router.get('/stu', function(req, res, next) {
    var uid = req.query.uid;
    let date1 = req.query.date1;
    var date2 = req.query.date2;

    //console.log(date1);
    //var sql = new Sql("WHERE date_created = @0::timestamp", dateCreated.ToString("yyyy-MM-dd HH:00:00"));
    //let rawsql = 'SELECT * FROM users WHERE id = ' + uid;
    //let rawsql = 'SELECT * FROM users WHERE created_at > ' + date1;
    //let rawsql = "SELECT * FROM users WHERE created_at > '1998-10-15T19:15:27.000Z'";
    //let rawsql = "SELECT * FROM users WHERE created_at > '" + date1 + "'";
    //let rawsql = "SELECT * FROM users WHERE id =" + uid + " AND created_at > '" + date1 + "'";
    //let rawsql = "SELECT * FROM users WHERE id =" + uid + " AND created_at > '" + date1 + "' AND created_at < '2018-10-15T19:15:27.000Z'";
    let rawsql = "SELECT * FROM users WHERE id =" + uid + " AND created_at > '" + date1 + "' AND created_at < " + "'" + date2 + "'";
    console.log(rawsql)
    pool.query(rawsql, (error, results) => {
        if (error) {
            throw error
        }
        res.json(results.rows);
    })
});

router.get('/score', function(req, res, next) {
    pool.query("SELECT * FROM score", (error, results) => {
        if (error) {
            throw error
        }
        res.json(results.rows);
    })
});

router.get('/user', function(req, res, next) {
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error
        }
        res.json(results.rows);
    })
});

router.get('/parent', function(req, res, next) {
    pool.query('SELECT * FROM parent', (error, results) => {
        if (error) {
            throw error
        }
        res.json(results.rows);
    })
});

router.get('/teacher', function(req, res, next) {
    pool.query('SELECT * FROM teacher', (error, results) => {
        if (error) {
            throw error
        }
        res.json(results.rows);
    })
});

router.get('/category', function(req, res, next) {
    pool.query('SELECT * FROM category', (error, results) => {
        if (error) {
            throw error
        }
        res.json(results.rows);
    })
});

router.get('/topic', function(req, res, next) {
    pool.query('SELECT * FROM topic', (error, results) => {
        if (error) {
            throw error
        }
        res.json(results.rows);
    })
});

router.get('/skill', function(req, res, next) {
    pool.query('SELECT * FROM skill', (error, results) => {
        if (error) {
            throw error
        }
        res.json(results.rows);
    })
});

router.get('/scorebd', function(req, res, next) {
    pool.query('SELECT * FROM score_history_by_day', (error, results) => {
        if (error) {
            throw error
        }
        res.json(results.rows);
    })
});

router.get('/sessions', function(req, res, next) {
    pool.query('SELECT * FROM sessions', (error, results) => {
        if (error) {
            throw error
        }
        res.json(results.rows);
    })
});

router.get('/avgtime1', function(req, res, next) {
    pool.query('SELECT AVG(sessions.time_spent), student_id FROM sessions GROUP BY student_id', (error, results) => {
        if (error) {
            throw error
        }
        res.json(results.rows);
    })
});

router.get('/avgtime', function(req, res, next) {
    var uid = req.query.uid;
    let date1 = req.query.date1;
    var date2 = req.query.date2;
    //let rawsql = "SELECT * FROM users WHERE id =" + uid + " AND created_at > '" + date1 + "' AND created_at < " + "'" + date2 + "'";
    let rawsql = "SELECT AVG(sessions.time_spent), student_id FROM sessions WHERE student_id =" + uid  + "AND start_timestamp > '" + date1 + "' AND start_timestamp < " + "'" + date2 + "' GROUP BY student_id";
    pool.query(rawsql, (error, results) => {
        if (error) {
            throw error
        }
        res.json(results.rows);
    })
});


router.get('/avgscore', function(req, res, next) {
    var uid = req.query.uid;
    let date1 = req.query.date1;
    var date2 = req.query.date2;
    let rawsql = "SELECT AVG(score.score), student_id FROM score WHERE student_id =" + uid  + "AND created_at > '" + date1 + "' AND created_at < " + "'" + date2 + "' GROUP BY student_id";
    pool.query(rawsql, (error, results) => {
        if (error) {
            throw error
        }
        res.json(results.rows);
    })
});

router.get('/avgscore1', function(req, res, next) {
    pool.query('SELECT AVG(score.score), student_id FROM score GROUP BY student_id', (error, results) => {
        if (error) {
            throw error
        }
        res.json(results.rows);
    })
});

router.get('/totalques1', function(req, res, next) {
    pool.query('SELECT SUM(CASE WHEN questions_answered.correct_answer THEN 1 END * .01) , student_id FROM questions_answered GROUP BY student_id', (error, results) => {
        if (error) {
            throw error
        }
        res.json(results.rows);
    })
});

router.get('/totalques', function(req, res, next) {
    var uid = req.query.uid;
    let date1 = req.query.date1;
    var date2 = req.query.date2;
    let rawsql = "SELECT SUM(CASE WHEN questions_answered.correct_answer THEN 1 END * .01) , student_id FROM questions_answered WHERE student_id =" + uid  + "AND created_at > '" + date1 + "' AND created_at < " + "'" + date2 + "' GROUP BY student_id";
    pool.query(rawsql, (error, results) => {
        if (error) {
            throw error
        }
        res.json(results.rows);
    })
});

router.get('/avgcat1', function(req, res, next) {
    pool.query('SELECT AVG(score.score), category_id FROM score GROUP BY category_id ORDER BY AVG(score.score) DESC', (error, results) => {
        if (error) {
            throw error
        }
        res.json(results.rows);
    })
});

router.get('/avgcat', function(req, res, next) {
    var uid = req.query.uid;
    let date1 = req.query.date1;
    var date2 = req.query.date2;
    let rawsql = "SELECT AVG(score.score), category_id FROM score WHERE student_id =" + uid  + "AND created_at > '" + date1 + "' AND created_at < " + "'" + date2 + "' GROUP BY category_id ORDER BY AVG(score.score) DESC";
    pool.query(rawsql, (error, results) => {
        if (error) {
            throw error
        }
        res.json(results.rows);
    })
});

module.exports = router;