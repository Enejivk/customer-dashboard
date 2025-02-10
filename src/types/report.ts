export interface CustomerData {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
}

export interface MonthlySpending {
  month: string;
  amount: number;
}

export interface ExpenseCategory {
  category: string;
  amount: number;
}