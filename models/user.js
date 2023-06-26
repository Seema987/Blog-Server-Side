const db = require('../db/db')

const User = {
    findById: id => {
        const sql = `
        SELECT * FROM userInfo WHERE  id = $1
        `

        return db
            .query(sql, [id])
            .then(dbRes => {
                return dbRes.rows[0].email
            })
    },
    findByEmail: email => {
        const sql = `
        SELECT * FROM userInfo WHERE  email = $1
        `

        return db
            .query(sql, [email])
            .then(dbRes => {
                return dbRes.rows[0]
            })
    },

    create: (name, email, passwordDigest) => {
        const sql = `
        INSERT INTO userInfo(name, email, password_digest)
        VALUES ($1, $2, $3)
        RETURNING *
        `

        return db
            .query(sql, [name, email, passwordDigest])
            .then(dbRes => dbRes.rows[0].email)
    }

    
}

module.exports = User