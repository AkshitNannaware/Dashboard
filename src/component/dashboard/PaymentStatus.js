'use client';

import { useState } from 'react';

export default function PaymentStatus() {
  const [filter, setFilter] = useState('all'); // 'all', 'received', 'pending'

  // Mock data - replace with actual API calls
  const payments = [
    {
      id: 1,
      invoiceNumber: 'INV-2024-001',
      eventName: 'Summer Gala 2024',
      eventDate: '2024-07-15',
      amount: '$15,000',
      dueDate: '2024-07-30',
      status: 'pending',
      paymentDate: null,
      paymentMethod: null,
      contractType: 'Service Payment',
    },
    {
      id: 2,
      invoiceNumber: 'INV-2024-002',
      eventName: 'Corporate Conference',
      eventDate: '2024-07-05',
      amount: '$8,500',
      dueDate: '2024-07-20',
      status: 'received',
      paymentDate: '2024-07-18',
      paymentMethod: 'Bank Transfer',
      contractType: 'Service Payment',
    },
    {
      id: 3,
      invoiceNumber: 'INV-2024-003',
      eventName: 'Product Launch',
      eventDate: '2024-06-28',
      amount: '$12,000',
      dueDate: '2024-07-13',
      status: 'received',
      paymentDate: '2024-07-10',
      paymentMethod: 'Check',
      contractType: 'Service Payment',
    },
    {
      id: 4,
      invoiceNumber: 'CT-2024-Q2',
      eventName: 'N/A',
      eventDate: null,
      amount: '$62,500',
      dueDate: '2024-07-15',
      status: 'pending',
      paymentDate: null,
      paymentMethod: null,
      contractType: 'Contract Payment',
    },
    {
      id: 5,
      invoiceNumber: 'INV-2024-004',
      eventName: 'Wedding Reception',
      eventDate: '2024-07-25',
      amount: '$18,000',
      dueDate: '2024-08-09',
      status: 'pending',
      paymentDate: null,
      paymentMethod: null,
      contractType: 'Service Payment',
    },
  ];

  const summary = {
    totalReceived: payments
      .filter((p) => p.status === 'received')
      .reduce(
        (sum, p) => sum + parseFloat(p.amount.replace(/[^0-9.]/g, '')),
        0
      ),
    totalPending: payments
      .filter((p) => p.status === 'pending')
      .reduce(
        (sum, p) => sum + parseFloat(p.amount.replace(/[^0-9.]/g, '')),
        0
      ),
    overdue: payments.filter(
      (p) =>
        p.status === 'pending' &&
        new Date(p.dueDate) < new Date() &&
        p.dueDate
    ).length,
  };

  const filteredPayments =
    filter === 'all'
      ? payments
      : payments.filter((p) => p.status === filter);

  const getStatusBadge = (status) => {
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${
          status === 'received'
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
        }`}
      >
        {status === 'received' ? 'Received' : 'Pending'}
      </span>
    );
  };

  const isOverdue = (dueDate) => {
    if (!dueDate) return false;
    return new Date(dueDate) < new Date();
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Payment Status
        </h2>
        <div className="flex gap-1 sm:gap-2 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('received')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'received'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Received
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'pending'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Pending
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Received
              </p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">
                ${summary.totalReceived.toLocaleString()}
              </p>
            </div>
            <div className="text-3xl">💰</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Pending
              </p>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400 mt-1">
                ${summary.totalPending.toLocaleString()}
              </p>
            </div>
            <div className="text-3xl">⏳</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Overdue Payments
              </p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-1">
                {summary.overdue}
              </p>
            </div>
            <div className="text-3xl">⚠️</div>
          </div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Invoice #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Event / Contract
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Payment Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredPayments.map((payment) => (
                <tr
                  key={payment.id}
                  className={`hover:bg-gray-50 dark:hover:bg-gray-700 ${
                    isOverdue(payment.dueDate) && payment.status === 'pending'
                      ? 'bg-red-50 dark:bg-red-900/10'
                      : ''
                  }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {payment.invoiceNumber}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {payment.contractType}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {payment.eventName || 'N/A'}
                    </div>
                    {payment.eventDate && (
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(payment.eventDate).toLocaleDateString()}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {payment.amount}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div
                      className={`text-sm ${
                        isOverdue(payment.dueDate) &&
                        payment.status === 'pending'
                          ? 'text-red-600 dark:text-red-400 font-medium'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {payment.dueDate
                        ? new Date(payment.dueDate).toLocaleDateString()
                        : 'N/A'}
                    </div>
                    {isOverdue(payment.dueDate) &&
                      payment.status === 'pending' && (
                        <div className="text-xs text-red-600 dark:text-red-400 mt-1">
                          Overdue
                        </div>
                      )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {payment.paymentDate
                        ? new Date(payment.paymentDate).toLocaleDateString()
                        : '-'}
                    </div>
                    {payment.paymentMethod && (
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {payment.paymentMethod}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(payment.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-4">
                      View Invoice
                    </button>
                    {payment.status === 'pending' && (
                      <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                        Send Reminder
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredPayments.length === 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-12 text-center">
          <p className="text-lg text-gray-500 dark:text-gray-400">
            No payments found for selected filter
          </p>
        </div>
      )}
    </div>
  );
}
