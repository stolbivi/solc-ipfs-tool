const MyService = artifacts.require("MyService");

module.exports = (deployer, network, accounts) => {
    deployer.then(async () => {
        await deployer.deploy(MyService);
    });
};
