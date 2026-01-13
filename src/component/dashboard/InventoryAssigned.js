'use client';

import { useState } from 'react';
import { VscFolderActive } from "react-icons/vsc";

export default function InventoryAssigned() {
  const [selectedEvent, setSelectedEvent] = useState('all');

  // Mock data - replace with actual API calls
  const events = [
    {
      id: 1,
      eventName: 'Summer Gala 2024',
      date: '2024-07-15',
      venue: 'Grand Ballroom',
    },
    {
      id: 2,
      eventName: 'Corporate Conference',
      date: '2024-07-20',
      venue: 'Conference Hall A',
    },
    {
      id: 3,
      eventName: 'Wedding Reception',
      date: '2024-07-25',
      venue: 'Garden Pavilion',
    },
  ];

  const inventoryItems = [
    {
      id: 1,
      eventId: 1,
      eventName: 'Summer Gala 2024',
      category: 'Tables & Chairs',
      items: [
        { name: 'Round Tables (8-seater)', quantity: 25, condition: 'excellent' },
        { name: 'Chairs', quantity: 200, condition: 'good' },
        { name: 'High-top Tables', quantity: 10, condition: 'excellent' },
      ],
      assignedDate: '2024-07-10',
      returnDate: '2024-07-16',
      status: 'assigned',
    },
    {
      id: 2,
      eventId: 1,
      eventName: 'Summer Gala 2024',
      category: 'Kitchen Equipment',
      items: [
        { name: 'Commercial Refrigerator', quantity: 2, condition: 'excellent' },
        { name: 'Oven (Double)', quantity: 1, condition: 'good' },
        { name: 'Food Warmer', quantity: 4, condition: 'excellent' },
      ],
      assignedDate: '2024-07-10',
      returnDate: '2024-07-16',
      status: 'assigned',
    },
    {
      id: 3,
      eventId: 2,
      eventName: 'Corporate Conference',
      category: 'AV Equipment',
      items: [
        { name: 'Projector Screen', quantity: 2, condition: 'excellent' },
        { name: 'Microphone System', quantity: 4, condition: 'good' },
        { name: 'Sound System', quantity: 1, condition: 'excellent' },
      ],
      assignedDate: '2024-07-15',
      returnDate: '2024-07-21',
      status: 'assigned',
    },
    {
      id: 4,
      eventId: 2,
      eventName: 'Corporate Conference',
      category: 'Tables & Chairs',
      items: [
        { name: 'Conference Tables', quantity: 15, condition: 'excellent' },
        { name: 'Chairs', quantity: 120, condition: 'good' },
      ],
      assignedDate: '2024-07-15',
      returnDate: '2024-07-21',
      status: 'assigned',
    },
  ];

  const filteredInventory =
    selectedEvent === 'all'
      ? inventoryItems
      : inventoryItems.filter((item) => item.eventId === parseInt(selectedEvent));

  const getConditionBadge = (condition) => {
    const styles = {
      excellent: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      good: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      fair: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      poor: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    };

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          styles[condition] || styles.good
        }`}
      >
        {condition.charAt(0).toUpperCase() + condition.slice(1)}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Inventory Assigned
        </h2>
        <select
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          <option value="all">All Events</option>
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {event.eventName}
            </option>
          ))}
        </select>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Items Assigned
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {filteredInventory.reduce(
                  (sum, inv) =>
                    sum + inv.items.reduce((s, item) => s + item.quantity, 0),
                  0
                )}
              </p>
            </div>
            <div className="text-3xl">📦</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Active Assignments
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {filteredInventory.filter((inv) => inv.status === 'assigned')
                  .length}
              </p>
            </div>
            <div className="text-3xl"><VscFolderActive /></div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Categories
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {new Set(filteredInventory.map((inv) => inv.category)).size}
              </p>
            </div>
            <div className="text-3xl">🏷️</div>
          </div>
        </div>
      </div>

      {/* Inventory List */}
      <div className="space-y-6">
        {filteredInventory.map((inventory) => (
          <div
            key={inventory.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700"
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {inventory.category}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Event: {inventory.eventName} •{' '}
                    {new Date(inventory.assignedDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-xs font-medium capitalize">
                    {inventory.status}
                  </span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Assigned: {new Date(inventory.assignedDate).toLocaleDateString()}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Return: {new Date(inventory.returnDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                        Item Name
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                        Quantity
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                        Condition
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {inventory.items.map((item, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                          {item.name}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                          {item.quantity}
                        </td>
                        <td className="px-4 py-3">
                          {getConditionBadge(item.condition)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredInventory.length === 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-12 text-center">
          <p className="text-lg text-gray-500 dark:text-gray-400">
            No inventory assigned for selected event
          </p>
        </div>
      )}
    </div>
  );
}
