import React from 'react';
import { CustomerData } from '../types/report';
import { User, Mail, Phone, MapPin } from 'lucide-react';

interface Props {
  customer: CustomerData;
}

export const CustomerInfo: React.FC<Props> = ({ customer }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-white">Customer Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <User className="w-5 h-5 text-blue-400" />
          <div>
            <p className="text-sm text-gray-400">Customer ID</p>
            <p className="font-medium text-gray-200">{customer.id}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-blue-400" />
          <div>
            <p className="text-sm text-gray-400">Email</p>
            <p className="font-medium text-gray-200">{customer.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-blue-400" />
          <div>
            <p className="text-sm text-gray-400">Phone</p>
            <p className="font-medium text-gray-200">{customer.phone}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-blue-400" />
          <div>
            <p className="text-sm text-gray-400">Address</p>
            <p className="font-medium text-gray-200">{customer.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};