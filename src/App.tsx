import React from 'react';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { CustomerInfo } from './components/CustomerInfo';
import { TransactionHistory } from './components/TransactionHistory';
import { Charts } from './components/Charts';
import { FinancialSummary } from './components/FinancialSummary';
import { customerData, transactions, monthlySpending, expenseCategories } from './data/mockData';

function App() {
  const reportRef = React.useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    if (!reportRef.current) return;

    const canvas = await html2canvas(reportRef.current, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#111827' // Match bg-gray-900
    });
    
    const imgWidth = 595;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    const pdf = new jsPDF({
      orientation: imgHeight > imgWidth ? 'portrait' : 'landscape',
      unit: 'pt',
      format: [imgWidth, imgHeight]
    });

    pdf.addImage(
      canvas.toDataURL('image/jpeg', 1.0),
      'JPEG',
      0,
      0,
      imgWidth,
      imgHeight,
      undefined,
      'FAST'
    );

    const today = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    pdf.save(`Financial_Report_${today}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Financial Report</h1>
            <p className="text-sm text-gray-400 mt-1">
              Generated on {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
          <button
            onClick={generatePDF}
            className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900"
          >
            <Download className="w-4 h-4 mr-2" />
            Export PDF
          </button>
        </div>

        <div ref={reportRef} className="space-y-6">
          <CustomerInfo customer={customerData} />
          <FinancialSummary transactions={transactions} />
          <Charts 
            monthlySpending={monthlySpending}
            expenseCategories={expenseCategories}
          />
          <TransactionHistory transactions={transactions} />
        </div>
      </div>
    </div>
  );
}

export default App