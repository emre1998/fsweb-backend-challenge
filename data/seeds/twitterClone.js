/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("likes").del();
  await knex("comments").del();
  await knex("posts").del();
  await knex("users").del();

  // Inserts seed entries for users table
  await knex("users").insert([
    {
      user_id: 1,
      username: "master yoda",
      password: "0404",
      email: "yoda@starwars.com",
      avatar:" ",
    },
    {
      user_id: 2,
      username: "obi wan kenobi",
      password: "0405",
      email: "obi-wan@starwars.com",
      avatar:" ",
    },
    {
      user_id: 3,
      username: "darth wader",
      password: "0406",
      email: "wader@starwars.com",
      avatar:" ",
    },
  ]);

  // Inserts seed entries for posts table
  await knex("posts").insert([
    {
      post_id: 1,
      user_id: 1,
      content: "Hello, Twitter!",
      created_at: new Date(),
    },
    {
      post_id: 2,
      user_id: 2,
      content: "May the force be with you...",
      created_at: new Date(),
    },
    {
      post_id: 3,
      user_id: 3,
      content: "Dark side in Twitter!",
      created_at: new Date(),
    },
  ]);

  // Inserts seed entries for comments table
  await knex("comments").insert([
    {
      comment_id: 1,
      user_id: 2,
      post_id: 1,
      content: "Nice to see you, master yoda!",
      created_at: new Date(),
    },
    {
      comment_id: 2,
      user_id: 3,
      post_id: 1,
      content: "Welcome to Twitter!",
      created_at: new Date(),
    },
    {
      comment_id: 3,
      user_id: 1,
      post_id: 2,
      content: "I like your tweets!",
      created_at: new Date(),
    },
  ]);

  // Inserts seed entries for likes table
  await knex("likes").insert([
    { like_id: 1, user_id: 3, post_id: 1, created_at: new Date() },
    { like_id: 2, user_id: 1, post_id: 2, created_at: new Date() },
    { like_id: 3, user_id: 2, comment_id: 3, created_at: new Date() },
  ]);
};
