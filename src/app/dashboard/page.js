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
import { FiMenu, FiX } from "react-icons/fi";

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
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const handleMenuClick = (id) => {
    setActiveModule(id);
    setSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Menu Toggle */}
      <div className="fixed lg:hidden top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-40 flex items-center justify-between p-4">
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">GMS</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static left-0 top-0 h-screen w-72 sm:w-80 bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out z-40 lg:z-auto ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 mt-16 lg:mt-0">
          <h1 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
            Garden Management System
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1.5">
            Vendor Dashboard
          </p>
        </div>
        <nav className="p-3 sm:p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 140px)' }}>
          <ul className="space-y-1 sm:space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                    activeModule === item.id
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="text-lg sm:text-xl flex-shrink-0">{item.icon}</span>
                  <span className="truncate">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto w-full lg:w-auto mt-16 lg:mt-0">
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
          {renderModule()}
        </div>
      </main>
    </div>
  );
}
