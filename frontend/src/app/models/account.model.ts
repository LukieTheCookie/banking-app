import { Transaction } from "./transaction.model";
export interface Account {
    id?: number;
    accountHolderName: string;
    balance: number;
    userId: number;
    transactions?: Transaction[];
}