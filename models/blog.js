const db = require('../db/db')
const { findById } = require('./user')

const Blog = {
    findAll: () => {
        const sql = 'SELECT * FROM blogPosts'

        return db
            .query(sql)
            .then(dbRes => dbRes.rows)
    },

        //.............................********..........................................

    findById: (id) => {
        const sql = 'SELECT * FROM blogPost WHERE id=$1'

        return db
            .query(sql, [id])
            .then(dbRes => dbRes.rows)
    },

        //.............................********..........................................

    addPost: (title, desc,img) =>{
        const sql = `
        INSERT INTO blogPosts(title,description,img)
        VALUES($1, $2, $3)
        RETURNING *
    `

    return db
        .query(sql, [title, desc, img])
        .then(dbRes => dbRes.rows[0])
},

    //.............................********..........................................

    commentPost: (user_comment, post_id, user_id) =>  {
        const sql = `
        INSERT INTO comments(user_comment, post_id, user_id)
        VALUES($1, $2, $3)
        RETURNING *
        `
        return db
        .query(sql, [user_comment, post_id, user_id])
        .then(dbRes => dbRes.rows[0])
    },

    //.............................********..........................................

    update:(post_id, title, desc, img) => {
        const sql = `
        UPDATE blogPosts SET title = $1, description = $2, img = $3 where id=$4
            RETURNING *
        `
       return db.query(sql, [title, desc, img, post_id])
        .then(dbRes => dbRes.rows[0])
    },

    delete: (id) => {
        const sql = `DELETE FROM blogPosts WHERE id = $1`

        return db.query(sql, [id])
    }
  
    //.............................********..........................................
    
}




module.exports = Blog