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

    create: (name, email, passwordDigest, backgroundColor) => {
        const sql = `
        INSERT INTO userInfo(name, email, password_digest, backgroundcolor)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `

        return db
            .query(sql, [name, email, passwordDigest, backgroundColor])
            .then(dbRes => dbRes.rows[0].email)
    }

    
}

module.exports = User