import readlineSync from 'readline-sync';

const choices = ['камень', 'ножницы', 'бумага'];

const getRandomChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Ничья!';
  }

  if (
    (userChoice === 'камень' && computerChoice === 'ножницы')
    || (userChoice === 'ножницы' && computerChoice === 'бумага')
    || (userChoice === 'бумага' && computerChoice === 'камень')
  ) {
    return 'Вы победили!';
  }

  return 'Компьютер победил!';
};

const playGame = () => {
  console.log('Добро пожаловать в игру "Камень, Ножницы, Бумага"!\n');

  let userChoice = readlineSync.question(
    'Выберите ваш вариант (камень, ножницы, бумага):'
  ).toLowerCase();

  while (!choices.includes(userChoice)) {
    console.log('Неверный ввод. Пожалуйста, выберите камень, ножницы или бумагу.');
    userChoice = readlineSync.question('Выберите ваш вариант: ').toLowerCase();
  }

  const computerChoice = getRandomChoice();

  console.log(`Компьютер выбрал: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

export default playGame;

playGame();
