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
        const sql = 'SELECT * FROM blogPosts WHERE id=$1'

        return db
            .query(sql, [id])
            .then(dbRes => dbRes.rows[0])
    },

        //.............................********..........................................

    addPost: (title, desc,img, date) =>{
        const sql = `
        INSERT INTO blogPosts(title,description,img, date)
        VALUES($1, $2, $3, $4)
        RETURNING *
    `

    return db
        .query(sql, [title, desc, img, date])
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

    findByPostId: (id) => {
        const sql = 'SELECT * FROM comments WHERE post_id=$1'

        return db
            .query(sql, [id])
            .then(dbRes => dbRes.rows)
    },

    //.............................********..........................................

    // update:(post_id, title, desc, img) => {
    //     const sql = `
    //     UPDATE blogPosts SET title = $1, description = $2, img = $3 where id=$4
    //         RETURNING *
    //     `
    //    return db.query(sql, [title, desc, img, post_id])
    //     .then(dbRes => dbRes.rows[0])
    // },

     //.............................********..........................................

    delete: (id) => {
        const sql = `DELETE FROM blogPosts WHERE id = $1`

        return db.query(sql, [id])
    }
  
    //.............................********..........................................
    
}




module.exports = Blog