CREATE DATABASE photoBlog;
\c blog

CREATE TABLE userInfo(
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_digest TEXT,
    backgroundColor TEXT,
    profilePicture TEXT
);

CREATE TABLE blogPosts(
    id SERIAL PRIMARY KEY,
    title TEXT,
    description TEXT,
    img TEXT,
    date TEXT,
    user_id INTEGER
);

ALTER TABLE userInfo
ADD  backgroundColor TEXT;

ALTER TABLE userInfo
ADD  profilePicture TEXT;
