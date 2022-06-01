INSERT INTO users(
    id,
    login,
    url,
    html_url,
    followers_url,
    following_url,
    repos_url,
    location,
    email,
    name,
    bio,
    public_repos,
    followers,
    following,
    created_at,
    updated_at,
    languages
)

VALUES(
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9,
    $10,
    $11,
    $12,
    $13,
    $14,
    $15,
    $16,
    $17
)

RETURNING *

