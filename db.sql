CREATE TABLE IF NOT EXISTS questions(
      questionId INT(6) NOT NULL PRIMARY KEY,
      question VARCHAR(255),
      correctAnswer VARCHAR(255)
    )`

    `CREATE TABLE IF NOT EXISTS options(
        optionsId INT(6) AUTO_INCREMENT PRIMARY KEY,
        questionId INT(6),
        optionValue VARCHAR(255)
      )`

      `INSERT INTO questions (questionId, question, correctAnswer) VALUES (?,?,?)`



      `INSERT INTO options (questionId, optionValue) Values (${id}, ${req.body.opt1}), (${id}, ${req.body.opt2})`



      `INSERT INTO options (questionId, optionValue) Values (${id}, ${req.body.opt1}), (${id}, ${req.body.opt2}),  (${id}, '${req.body.opt3}')`



      `INSERT INTO options (questionId, optionValue) Values (${id}, ${req.body.opt1}), (${id}, ${req.body.opt2}), (${id}, '${req.body.opt3}'),(${id}, '${req.body.opt4}')`;



      `SELECT questions.questionId, questions.question AS question, questions.correctAnswer AS correctAnswer, GROUP_CONCAT(options.optionValue SEPARATOR  ', ' ) AS options FROM options, questions where questions.questionId = options.questionId GROUP by questions.questionId`;



      `SELECT optionsId, optionValue FROM options where questionId = ${id}`




      `UPDATE questions SET question = ?, correctAnswer = ? WHERE questionId = ${id}`




      `UPDATE options SET optionValue = ? WHERE optionsId = ${id}`




      `DELETE questions, options FROM questions INNER JOIN options ON questions.questionId = options.questionId WHERE questions.questionId = ${id}`;

