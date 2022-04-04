/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle")

const Ganache_Account_private_key = "45792b7033de7455c40802182f1e7a4a1460f05bfc124dc72f4a1c6568940ead"
module.exports = {
  solidity: "0.8.10",
  paths: {
    artifacts: './my-dapp/artifacts'
  },
  networks: {
    localhost: {
      url: `HTTP://127.0.0.1:7545`,
      accounts: [`${Ganache_Account_private_key}`],
    }
  }
};
