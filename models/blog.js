const db = require('../db/db')
const { findById } = require('./user')

const Blog = {
    findAll: () => {
        const sql = 'SELECT * FROM blogPosts'

        return db
            .query(sql)
            .then(dbRes => dbRes.rows)
    },

    findById: (id) => {
        const sql = 'SELECT * FROM blogPost WHERE id=$1'

        return db
            .query(sql, [id])
            .then(dbRes => dbRes.rows)
    }
}




module.exports = Blog