exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("teste").del()
    .then(function () {
      // Inserts seed entries
      return knex("teste").insert([
        { nome: "Tarefa 1" },
        { nome: "Tarefa 2" },
        { nome: "Tarefa 3" }
      ]);
    });
};
