/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */

exports.seed = async function seed(knex) {
    await knex("likes").del();
    await knex("comments").del();
    await knex("posts").del();
    await knex("users").del();


    await knex("users").insert([{

        user_id:1,
        username:"master Yoda",
        password:"0405",
        email:"yoda@starwars.com",
        avatar:"avatars/yoda.jpg"
    },
    {
        user_id:2,
        username:"obi-wan kenobi",
        password:"May4th",
        email:"owkenobi@starwars.com",
        avatar:"avatars/obi wan.jpg"
    },
    {
        user_id:3,
        username:"anakin skywalker",
        password:"darkside1",
        email:"askywalker@starwars.com",
        avatar:"avatars/anakin.jpg"
    },
    {
        user_id:4,
        username:"emperor palpatine",
        password:"0504",
        email:"palpatine@starwars.com",
        avatar:"avatars/palpatine.jpg"
    },
]);

    await knex("posts").insert([
    {
        post_id:1,
        user_id:1,
        content:"There is no Try,just Twitter!",
        created_at: new Date(),
    },
    {
        post_id:2,
        user_id:2,
        content:"May the force be with you followers!",
        created_at: new Date(),
    },
    {
        post_id:3,
        user_id:3,
        content:" Mercy doesn't defeat an enemy,just follow !",
        created_at: new Date(),
    },
    {
        post_id:4,
        user_id:4,
        content:"You will find that it is you who are mistaken,Use twitter",
        created_at: new Date(),
    },

]);
    await knex("comments").insert([
        {
            comment_id:1,
            user_id:2,
            post_id:1,
            content:"Nice to see you on twitter master yoda",
            created_at: new Date(),
        },
        {
            comment_id:2,
            user_id:3,
            post_id:4,
            content:"Nice to see you on twitter emperior palpatine",
            created_at: new Date(),
        },
        {
            comment_id:3,
            user_id:2,
            post_id:3,
            content:"You wont beat us anakin",
            created_at: new Date(),
        },
    ]);

    await knex("likes").insert([
        {like_id:1,user_id:2,post_id:1,created_at:new Date()},
        {like_id:2,user_id:3,post_id:4,created_at:new Date()},
        {like_id:3,user_id:1,post_id:2,created_at:new Date()},
        {like_id:4,user_id:4,post_id:3,created_at:new Date()},
    ]);
};