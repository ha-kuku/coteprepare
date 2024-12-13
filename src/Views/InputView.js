const { Console } = require('@woowacourse/mission-utils');
const { INPUT, OUTPUT } = require('../Constants/Message.js');

class Inputview {
  coachName = async () => {
    Console.print(OUTPUT.announce);
    console.log();
    const coachNameInput = await Console.readLineAsync(INPUT.name);
    return coachNameInput.trim();
  };
}

module.exports = Inputview;
