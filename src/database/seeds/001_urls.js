exports.seed = async function (knex) {
  await knex("urls").del();
  await knex("urls").insert([
    { id: "1AU123", url: "https://mail.google.com/" },
    { id: "F727S", url: "https://rethink.dev/" },
  ]);
};
