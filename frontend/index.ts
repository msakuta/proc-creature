import { Account, Ed25519PrivateKey, Aptos, AptosConfig, Network, NetworkToNetworkName } from "@aptos-labs/ts-sdk";

const ACCOUNT_INITIAL_BALANCE = 100_000_000;
const APTOS_NETWORK: Network = NetworkToNetworkName[process.env.APTOS_NETWORK || ""] || Network.DEVNET;
const PRIVATE_KEY: string = process.env.APTOS_PRIVATE_KEY || (() => {
    console.log("Please specify APTOS_PRIVATE_KEY env var to specify the account private key.");
    process.exit(1);
})();
const config = new AptosConfig({ network: APTOS_NETWORK });
const aptosClient = new Aptos(config);

const account = Account.fromPrivateKey({
    privateKey: new Ed25519PrivateKey(PRIVATE_KEY),
});

const CONTRACT_ADDRESS = account.accountAddress;

const payload = {
    function: `${CONTRACT_ADDRESS}::creature::get_gene`,
    functionArguments: [],
};

async function main() {
    const response = await aptosClient.view({ payload });
    console.log(`get_gene: ${response}`);
}

main();
