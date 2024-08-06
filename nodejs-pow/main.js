const Blockchain = require("./blockchain");
const Transaction = require("./transaction");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

// 키 쌍 생성
const key1 = ec.genKeyPair();
const key2 = ec.genKeyPair();

// 공개 키로부터 월렛 주소 생성
const walletAddress1 = key1.getPublic("hex");
const walletAddress2 = key2.getPublic("hex");

// 새 블록체인 인스턴스 생성
let myCoin = new Blockchain();

// 트랜잭션 생성 및 서명
const tx1 = new Transaction(walletAddress1, walletAddress2, 100);
tx1.signTransaction(key1);

// 블록체인에 트랜잭션 추가
myCoin.addTransaction(tx1);

// 대기 중인 트랜잭션 채굴
console.log("Starting the miner...");
myCoin.minePendingTransactions(walletAddress1);

// 잔액 확인
console.log("Balance of wallet1:", myCoin.getBalanceOfAddress(walletAddress1));
console.log("Balance of wallet2:", myCoin.getBalanceOfAddress(walletAddress2));

// 체인 유효성 검증
console.log("Is chain valid?", myCoin.isChainValid());

// 블록체인 출력
console.log(JSON.stringify(myCoin, null, 2));
