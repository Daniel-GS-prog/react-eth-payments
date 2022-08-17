// https://eth-goerli.g.alchemy.com/v2/0Dtlm-tJXlnHTbGhajUO5vuPal92tzGy

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/0Dtlm-tJXlnHTbGhajUO5vuPal92tzGy',
      accounts: ['77bc6a6f64ee764ededca8c95fcb64e8af52854d3e25a41da55817235c93b145']

    }
  }
}