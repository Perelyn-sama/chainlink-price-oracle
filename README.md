# Chainlink price oracle

## To get this repo working on your machine

### You need a make a file to keep your mnemonic and infura project id

`touch .secrets.json`

Your .secrets.json file should look like this

`{ "mnemonic": <your mnemonic>, "projectId": <your project Id> }`

###

### Install npm packages in root folder

`npm install`

### Compile smart contracts

`truffle compile`

### Before you can deploy the contracts you'll need kovan-testnet ether

#### You can get some by pasting your eth address at https://gitter.im/kovan-testnet/faucet or https://ethdrop.dev/ then you will have to switch to the kovan network on your metamask

### Then deploy to the Kovan test net

`truffle migrate --network kovan`

### Start react app

`cd client`

`yarn start or npm start`
