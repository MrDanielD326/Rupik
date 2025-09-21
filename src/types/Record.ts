export interface iRecord {
    date: string | number | Date;
    id: string;
    text: string;
    amount: number;
    category: string;
    userId: string;
    createdAt: Date;
}

export interface iRecordData {
    text: string;
    amount: number;
    category: string;
    date: string; // Added date field
}

export interface iRecordResult {
    data?: iRecordData;
    error?: string;
}

export interface iChartRecord {
    date: string; // ISO date string
    amount: number; // Amount spent
    category: string; // Expense category
}
