import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

const APTOS_NETWORK = process.env.NEXT_PUBLIC_APTOS_NETWORK as Network || Network.DEVNET;

const config = new AptosConfig({ network: APTOS_NETWORK });
export const aptosClient = new Aptos(config);
