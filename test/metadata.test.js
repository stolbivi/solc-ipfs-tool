require("dotenv").config();

const MyService = artifacts.require("MyService");

const {publish} = require('../src/publisher.js');

contract("Metadata Test", (accounts) => {

    const [masterAccount, account1, account2, account3, account4] = accounts;

    let contract;

    before(() => Promise.all([
        MyService.deployed().then(instance => contract = instance)
    ]))

    it("Should retrieve metadata from IPFS", async () => {

    })

});

