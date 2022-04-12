const fs = require('fs');
const {publishAll} = require('../src/publisher.js');

describe('Publisher Test', () => {

    it('Should publish sources and metadata', async () => {
        const result = await publishAll('./output/MyService_meta.json', './contracts/');
        console.log(result);
    })

});

