
exports.seed = function(knex, Promise) {
  return knex('words').del()
    .then(function () {
      return knex('words').insert([
        {id: 1, maori_word: 'Kia ora', english_word: 'Hello', example: 'Kia ora friends'},
        {id: 2, maori_word: 'Mahi', english_word: 'Work', example: 'How is your mahi going?'},
        {id: 3, maori_word: 'Kupu', english_word: 'Word/words', example: 'What is my daily kupu today?'}
      ]);
    });
};
