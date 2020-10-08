require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remind mixture harvest phone olympic traffic'; 
let testAccounts = [
"0x910958a13dd763ebd65e53133bacf869d4d818731f306779bfc49924a975f686",
"0xb2e22e459601728eff8501d9a1d52c87cb4103c8d79d18bd6dca88080902c2ce",
"0xca9a86c1dca83a215f9f5be4cce2922386220e33123744e7f449f1b08d0c50cb",
"0xb98835d9172fba1c746f5caa8d4e834844887d012d985f77fd7411bb115280af",
"0xa1b2a0d72b4d3e29cd77fb61f7fcb31e83a6bba1bdc65c3ca197fc78da79dcab",
"0xaed712a23981856a24f895c7a998baa8e66b34dfdeb6571672978ecc03a0a88d",
"0xf9ce7a29d134c49144b8885cd5254babd53b19d22be9a0357814680f6a6f7e70",
"0x84539f4e150de0a3fd4f5a5ee3de5335579e9afde2f4ff12506b92548e3baa8f",
"0x1c910e0b4b5f29439af4b672cf25445ee7d1b5554d981e695ff4ea8302aa3dd7",
"0x8be1a92b79a9c5de6215fe55d94cc9e0cb18f6ad2049daecb05e8d88b5500d76"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
