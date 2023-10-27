console.log('Hello Javascript - 2');

const strike = userInputArray.filter((userInput, index) => {
  userInput === computerValueArray[index];
}).length;
const ball = computerValueArray.filter((computerValue, index) => {
  computerValue !== userInputArray[i] && userInputArray.includes(index);
}).length;

class Play {
  constructor() {
    this.isPlaying;
    this.computer = new Computer();
    this.player = new Player();
    this.gameManager = new GameManager();
  }
}

if (!BallCnt && !StrikeCnt) {
  Console.print(`${BallCnt}볼 ${StrikeCnt}스트라이크`);
} else if (BallCnt) {
  Console.print(`${BallCnt}볼`);
} else if (StrikeCnt) {
  Console.print(`${StrikeCnt}스트라이크`);
}
if (!BallCnt && !StrikeCnt) {
  Console.print(`낫싱`);
}
