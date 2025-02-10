import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';
import { MonthlySpending, ExpenseCategory } from '../types/report';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  monthlySpending: MonthlySpending[];
  expenseCategories: ExpenseCategory[];
}

export const Charts: React.FC<Props> = ({ monthlySpending, expenseCategories }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        labels: {
          color: '#9CA3AF', // text-gray-400
          padding: 20
        },
        position: 'bottom' as const
      }
    },
    scales: {
      x: {
        grid: {
          color: '#374151' // border-gray-700
        },
        ticks: {
          color: '#9CA3AF' // text-gray-400
        }
      },
      y: {
        grid: {
          color: '#374151' // border-gray-700
        },
        ticks: {
          color: '#9CA3AF' // text-gray-400
        }
      }
    }
  };

  const monthlySpendingData = {
    labels: monthlySpending.map(item => item.month),
    datasets: [
      {
        label: 'Monthly Spending',
        data: monthlySpending.map(item => item.amount),
        borderColor: '#60A5FA', // text-blue-400
        backgroundColor: '#60A5FA33', // text-blue-400 with opacity
        tension: 0.4,
      },
    ],
  };

  const expenseCategoriesData = {
    labels: expenseCategories.map(item => item.category),
    datasets: [
      {
        data: expenseCategories.map(item => item.amount),
        backgroundColor: [
          '#60A5FA', // blue-400
          '#34D399', // green-400
          '#F87171', // red-400
          '#A78BFA', // purple-400
          '#FBBF24', // yellow-400
          '#EC4899', // pink-400
        ],
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div className="bg-gray-800 rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Monthly Spending</h2>
        <div className="h-[300px] w-full">
          <Line data={monthlySpendingData} options={options} />
        </div>
      </div>
      <div className="bg-gray-800 rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Expense Categories</h2>
        <div className="h-[300px] w-full">
          <Pie data={expenseCategoriesData} options={options} />
        </div>
      </div>
    </div>
  );
};