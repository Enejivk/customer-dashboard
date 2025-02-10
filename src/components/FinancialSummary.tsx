import React from 'react';
import { Transaction } from '../types/report';
import { DollarSign, TrendingUp, TrendingDown, Percent } from 'lucide-react';

interface Props {
  transactions: Transaction[];
}

export const FinancialSummary: React.FC<Props> = ({ transactions }) => {
  const totalIncome = transactions
    .filter(t => t.type === 'credit')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'debit')
    .reduce((sum, t) => sum + t.amount, 0);

  const debtToIncomeRatio = (totalExpenses / totalIncome) * 100;

  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-white">Financial Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-900/50 rounded-lg p-4 border border-blue-900/20">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-blue-400" />
            <h3 className="text-sm font-medium text-gray-300">Total Balance</h3>
          </div>
          <p className="text-2xl font-bold text-blue-400">${(totalIncome - totalExpenses).toFixed(2)}</p>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-4 border border-green-900/20">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <h3 className="text-sm font-medium text-gray-300">Total Income</h3>
          </div>
          <p className="text-2xl font-bold text-green-400">${totalIncome.toFixed(2)}</p>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-4 border border-red-900/20">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="w-5 h-5 text-red-400" />
            <h3 className="text-sm font-medium text-gray-300">Total Expenses</h3>
          </div>
          <p className="text-2xl font-bold text-red-400">${totalExpenses.toFixed(2)}</p>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-4 border border-purple-900/20">
          <div className="flex items-center gap-2 mb-2">
            <Percent className="w-5 h-5 text-purple-400" />
            <h3 className="text-sm font-medium text-gray-300">Debt-to-Income</h3>
          </div>
          <p className="text-2xl font-bold text-purple-400">{debtToIncomeRatio.toFixed(1)}%</p>
        </div>
      </div>
    </div>
  );
};