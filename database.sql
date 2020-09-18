CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (255) NOT NULL,
    "password" VARCHAR (255) NOT NULL,
    "icon" VARCHAR (255)
);

CREATE TABLE "projects" (
    "p_id" SERIAL PRIMARY KEY,
    "name" VARCHAR (255) NOT NULL,
    "description" TEXT NOT NULL,
    "image" VARCHAR NOT NULL,
    "user_id" INT REFERENCES "user",
    "supplies" TEXT NOT NULL
)

CREATE TABLE "favorites"(
    "fav_id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "project_id" INT REFERENCES "projects"
)