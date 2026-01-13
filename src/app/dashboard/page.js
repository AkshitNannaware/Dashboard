'use client';

import { useState } from 'react';
import DashboardOverview from '@/component/dashboard/DashboardOverview';
import EventAssignments from '@/component/dashboard/EventAssignments';
import UploadDocuments from '@/component/dashboard/UploadDocuments';
import ContractStatus from '@/component/dashboard/ContractStatus';
import FeedbackCommunication from '@/component/dashboard/FeedbackCommunication';
import InventoryAssigned from '@/component/dashboard/InventoryAssigned';
import PaymentStatus from '@/component/dashboard/PaymentStatus';

import { RiDashboardFill } from "react-icons/ri";
import { BsCalendar3EventFill } from "react-icons/bs";
import { LiaCloudUploadAltSolid } from "react-icons/lia";
import { LiaFileContractSolid } from "react-icons/lia";
import { RiFeedbackFill } from "react-icons/ri";
import { MdOutlineInventory } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";

const menuItems = [
  { id: 'overview', label: 'Dashboard Overview', icon: <RiDashboardFill /> },
  { id: 'events', label: 'Event Assignments', icon: <BsCalendar3EventFill /> },
  { id: 'documents', label: 'Upload Documents', icon: <LiaCloudUploadAltSolid /> },
  { id: 'contract', label: 'Contract Status', icon: <LiaFileContractSolid /> },
  { id: 'feedback', label: 'Feedback & Communication', icon: <RiFeedbackFill /> },
  { id: 'inventory', label: 'Inventory Assigned', icon: <MdOutlineInventory /> },
  { id: 'payments', label: 'Payment Status', icon: <FaMoneyCheck /> },
];

export default function VendorDashboard() {
  const [activeModule, setActiveModule] = useState('overview');

  const renderModule = () => {
    switch (activeModule) {
      case 'overview':
        return <DashboardOverview />;
      case 'events':
        return <EventAssignments />;
      case 'documents':
        return <UploadDocuments />;
      case 'contract':
        return <ContractStatus />;
      case 'feedback':
        return <FeedbackCommunication />;
      case 'inventory':
        return <InventoryAssigned />;
      case 'payments':
        return <PaymentStatus />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-78 bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Garden Management System
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1.5">
            Vendor Dashboard
          </p>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveModule(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeModule === item.id
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {renderModule()}
        </div>
      </main>
    </div>
  );
}
