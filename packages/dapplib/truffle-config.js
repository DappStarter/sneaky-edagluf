require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name razor muscle coconut hockey private metal gift'; 
let testAccounts = [
"0xad6c797c5861780791a8b441da165d7015d45312357d5195e68bf37ebf11b8f5",
"0x7d839fdd5e5322f72ce43b618e30e85a82a75b75c687b589e0cc3f3821e60d79",
"0xdcfea44ad8aeec8723bb34fe5f37ce2e2782e7a886b60fcc9d9a2a09b6fbe65a",
"0xbdf5be397cd464f0e771a9dba8d8b02d097071dce31895532a9aa97f906c71f8",
"0xe109c8968d257ca434722c63fb1bf9f614c1a608d6684ec224cb14a4ff5f9c70",
"0x256eaeebc89750062415cf21f56a2c8a72ccb1bf009cbe212be4d48217623433",
"0x228b98be572651b0b4352f6e9b34ca2921fb510f91f9b46f55b11d25e2b2ef9c",
"0x4d64c95d6b3874326ea2d7bec1a4cea7079840aa1a60e2e6b6b0f1ebdb5b7a31",
"0xaed3e7d4160db37482ac6bebb2c6f0ee3b863965727b41de58200ae24ff55790",
"0x4803f66703e678f2ab4c7d2e86d74faca4409b4035c0e2fd65d15095b48d233c"
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
            version: '^0.8.0'
        }
    }
};

