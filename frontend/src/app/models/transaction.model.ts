export interface Transaction {
    id?: number;
    amount: number;
    timestamp: string;
    type: string;
    accountId: number;
}