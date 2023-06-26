CREATE DATABASE blog;
\c blog

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_digest TEXT
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title TEXT,
    description TEXT,
    img TEXT,
    date TEXT,
    user_id INTEGER
);