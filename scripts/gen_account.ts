import { Account, NetworkToNetworkName, Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import { promises as fsPromises } from 'node:fs';

const ACCOUNT_INITIAL_BALANCE = 100_000_000;

async function main() {
    const account = Account.generate();

    await fsPromises.mkdir("../.aptos", {recursive: true});
    const outFile = await fsPromises.open("../.aptos/config.yaml", "w");
    await outFile.write("---\nprofiles:\n");

    async function printAccount(name, acc) {
        await outFile.write(`  ${name}:
    private_key: "${acc.privateKey}"
    public_key: "${acc.publicKey}"
    account: ${acc.accountAddress}
    rest_url: "https://fullnode.devnet.aptoslabs.com"
    faucet_url: "https://faucet.devnet.aptoslabs.com"
`);
    }

    const APTOS_NETWORK: Network = NetworkToNetworkName[process.env.APTOS_NETWORK || ""] || Network.DEVNET;
    const config = new AptosConfig({ network: APTOS_NETWORK });
    const aptosClient = new Aptos(config);

    await printAccount("default", account);

    await aptosClient.fundAccount({
        accountAddress: account.accountAddress,
        amount: ACCOUNT_INITIAL_BALANCE,
    });
}

main();
