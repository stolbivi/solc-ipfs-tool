const {NFTStorage, Blob} = require("nft.storage");
const {packToBlob} = require("ipfs-car/pack/blob");
const fs = require('fs');

require("dotenv").config();

const endpoint = 'https://api.nft.storage';
const storage = new NFTStorage({endpoint, token: process.env.NFT_API_KEY});

async function publish(content) {
    const {root, car} = await packToBlob({
        input: new Blob([content]),
        rawLeaves: false,
        wrapWithDirectory: false,
    })
    await storage.storeCar(car)
    return root.toV0();
}

/**
 * Publishes metadata and all associated sources of dependency tree of single contract
 * @param pathToMetadata - file system path to metadata file
 * @param basePath - path to dependencies sources
 */
async function publishAll(pathToMetadata, basePath) {
    const metadataContent = fs.readFileSync(pathToMetadata, 'utf8');
    const metadata = JSON.parse(metadataContent);
    let sources = Object.keys(metadata.sources);
    const result = {};
    for (const path of sources) {
        const source = fs.readFileSync(basePath + path, 'utf8');
        const cid = await publish(source);
        const status = await storage.check(cid);
        result[path] = status;
    }
    const cid = await publish(metadataContent);
    const status = await storage.check(cid);
    result['metadata'] = status;
    return result;
}

/**
 * Finds metadata hash appended to the end of bytecode, or
 * @param bytecode
 * @returns {Promise<void>}
 */
async function locateMetadata(bytecode) {

}

module.exports = {publish, publishAll, locateMetadata};
