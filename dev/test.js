const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

console.log(bitcoin);

const previousBlockHash = 'ASJDAHJSFJHEJHALFKAEIO8928993';
const currentBlockData = [
  {
    amount: 10,
    sender: 'N9ASHDASHDHUASHUDASUH',
    recipient: '90ASHBASJDJHASDJH'
  },
  {
    amount: 30,
    sender: 'kASHSADKHDHUASHUDASUH',
    recipient: 'UIBASJDJHASDJH'
  },
  {
    amount: 200,
    sender: 'QWEQWJHJHASDHJDHUASHUDASUH',
    recipient: 'AUSAJDJASHBASJDJHASDJH'
  },
];



// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 77692));

// const nonce = 100;

// console.log(bitcoin.hashBlock(previewsBlockchain, currentBlockData, nonce))



// bitcoin.createNewBlock(1988, 'ashd982384dhuasASDASHUDASJKASD', '903234KDJSDGFKJSDJKFKJ')

// bitcoin.createNewTransaction(12344, 'AASDHJ866712398', 'ASDASHDU1267312784');

// bitcoin.createNewBlock(2121223, 'ashd982384dhua000909DA', '903234KDJSDsaf9sdf98sd')


// bitcoin.createNewTransaction(50, 'AASDHJ866712398', 'ASDASHDU1267312784');
// bitcoin.createNewTransaction(300, 'AASDHJ866712398', 'ASDASHDU1267312784');
// bitcoin.createNewTransaction(2000, 'AASDHJ866712398', 'ASDASHDU1267312784');

// bitcoin.createNewBlock(987659, 'a000909DA', 'f9sdf98sd')


// console.log(bitcoin);
