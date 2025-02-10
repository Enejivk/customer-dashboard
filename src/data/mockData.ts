import { CustomerData, Transaction, MonthlySpending, ExpenseCategory } from '../types/report';

export const customerData: CustomerData = {
  id: 'CUST-2024-0587',
  name: 'Sarah Mitchell',
  email: 'sarah.mitchell@outlook.com',
  phone: '+1 (415) 555-8729',
  address: '2184 Marina Boulevard, San Francisco, CA 94123'
};

export const transactions: Transaction[] = [
  { id: 'T847', date: '2024-03-15', description: 'Whole Foods Market', amount: 187.43, type: 'debit' },
  { id: 'T848', date: '2024-03-15', description: 'Tesla Charging', amount: 45.00, type: 'debit' },
  { id: 'T849', date: '2024-03-14', description: 'Salesforce Salary', amount: 8750.00, type: 'credit' },
  { id: 'T850', date: '2024-03-13', description: 'PG&E Utilities', amount: 245.50, type: 'debit' },
  { id: 'T851', date: '2024-03-12', description: 'Blue Bottle Coffee', amount: 28.50, type: 'debit' },
  { id: 'T852', date: '2024-03-12', description: 'Vanguard Investment Return', amount: 1250.00, type: 'credit' },
  { id: 'T853', date: '2024-03-11', description: 'Apple Music', amount: 14.99, type: 'debit' },
  { id: 'T854', date: '2024-03-10', description: 'Airbnb Monthly Rent', amount: 3200.00, type: 'debit' }
];

export const monthlySpending: MonthlySpending[] = [
  { month: 'Oct', amount: 4850 },
  { month: 'Nov', amount: 5200 },
  { month: 'Dec', amount: 6100 },
  { month: 'Jan', amount: 4900 },
  { month: 'Feb', amount: 5300 },
  { month: 'Mar', amount: 4750 }
];

export const expenseCategories: ExpenseCategory[] = [
  { category: 'Housing', amount: 3200 },
  { category: 'Transportation', amount: 650 },
  { category: 'Food & Dining', amount: 850 },
  { category: 'Utilities', amount: 425 },
  { category: 'Entertainment', amount: 350 },
  { category: 'Healthcare', amount: 275 }
];