const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const secrets = JSON.parse(fs.readFileSync(".secrets.json").toString().trim());

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545,
    },
    kovan: {
      networkCheckTimeout: 10000,
      provider: () => {
        return new HDWalletProvider(
          secrets.mnemonic,
          `wss://kovan.infura.io/ws/v3/${secrets.projectId}`
        );
      },
      network_id: "42",
    },
  },
  compilers: {
    solc: {
      version: "0.6.0", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
