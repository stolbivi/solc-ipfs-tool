require('dotenv').config();
let ganache = require("ganache-cli");

let server = ganache.server({
    mnemonic: process.env.MNEMONIC,
    gasPrice: process.env.GAS_PRICE
});
server.listen(process.env.GANACHE_PORT, (err, blockchain) => {
    if (err) {
        console.error("Error:", err);
    } else {
        console.log("Listening on port:", process.env.GANACHE_PORT);
        console.log("Mnemonic:", blockchain.options.mnemonic);
        console.log("Gas price:", blockchain.options.gasPrice);
        console.log("Accounts:", Object.keys(blockchain.accounts));
    }
});
