/*
    Creates table Users.
*/

CREATE TABLE IF NOT EXISTS users
(
    id serial PRIMARY KEY,
    login text NOT NULL,
    url text,
    html_url text,
    followers_url text,
    following_url text,
    repos_url text,
    location text,
    email text,
    name text,
    bio text,
    public_repos numeric,
    followers numeric,
    following numeric,
    languages text[],
    created_at date,
    updated_at date
);
