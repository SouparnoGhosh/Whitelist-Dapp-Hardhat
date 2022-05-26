/* eslint-disable node/no-unpublished-import */
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/dist/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, log } = deployments;

  const { deployer } = await getNamedAccounts();

  const deployedWhitelistContract = await deploy("Whitelist", {
    // <-- name of the deployment
    contract: "Whitelist", // <-- name of the contract/artifact(more specifically) to deploy
    from: deployer, // <-- account to deploy from
    args: [10], // <-- contract constructor arguments. Here it has nothing
    log: true, // <-- log the address and gas used in the console
  });

  log(
    `Deployed Whitelist Contract Address: ${deployedWhitelistContract.address}`
  );
};

export default func;
func.tags = ["Whitelist"];
