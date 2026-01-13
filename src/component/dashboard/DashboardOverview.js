'use client';

import { useEffect, useState } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { VscFolderActive } from "react-icons/vsc";
import { MdPendingActions } from "react-icons/md";

export default function DashboardOverview() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    // Avoid hydration mismatch by computing time only on the client.
    setLastUpdated(
      new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    );
  }, []);

  // Mock data - replace with actual API calls
  const upcomingEvents = [
    {
      id: 1,
      eventName: 'Summer Gala 2024',
      date: '2024-07-15',
      venue: 'Grand Ballroom',
      status: 'pending_confirmation',
      requirements: 'Catering for 200 guests',
    },
    {
      id: 2,
      eventName: 'Corporate Conference',
      date: '2024-07-20',
      venue: 'Conference Hall A',
      status: 'confirmed',
      requirements: 'AV Equipment setup',
    },
    {
      id: 3,
      eventName: 'Wedding Reception',
      date: '2024-07-25',
      venue: 'Garden Pavilion',
      status: 'pending_confirmation',
      requirements: 'Full catering service',
    },
  ];

  const alerts = [
    {
      id: 1,
      type: 'warning',
      message: 'Service request requires immediate attention',
      event: 'Summer Gala 2024',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      type: 'info',
      message: 'New feedback received from venue staff',
      event: 'Corporate Conference',
      timestamp: '5 hours ago',
    },
    {
      id: 3,
      type: 'success',
      message: 'Payment received for Event #1234',
      timestamp: '1 day ago',
    },
  ];

  const contractStatus = {
    status: 'active',
    renewalDate: '2024-12-31',
    slaCompliance: '98%',
    totalEvents: 24,
    completedEvents: 20,
  };

  const pendingConfirmations = upcomingEvents.filter(
    (e) => e.status === 'pending_confirmation'
  ).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard Overview
        </h2>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: {lastUpdated || '—'}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Upcoming Events
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {upcomingEvents.length}
              </p>
            </div>
            <div className="text-3xl"><FaCalendarAlt /></div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Pending Confirmations
              </p>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400 mt-1">
                {pendingConfirmations}
              </p>
            </div>
            <div className="text-3xl"><MdPendingActions /></div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Contract Status
              </p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1 capitalize">
                {contractStatus.status}
              </p>
            </div>
            <div className="text-3xl"><VscFolderActive /></div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Active Alerts
              </p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-1">
                {alerts.length}
              </p>
            </div>
            <div className="text-3xl"><FaBell /></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Events */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Upcoming Events
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {event.eventName}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {event.venue}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                        {event.requirements}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.status === 'confirmed'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                      }`}
                    >
                      {event.status === 'confirmed'
                        ? 'Confirmed'
                        : 'Pending'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Alerts */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Quick Alerts
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border ${
                    alert.type === 'warning'
                      ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
                      : alert.type === 'info'
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                      : 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl">
                      {alert.type === 'warning'
                        ? '⚠️'
                        : alert.type === 'info'
                        ? 'ℹ️'
                        : '✅'}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {alert.message}
                      </p>
                      {alert.event && (
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          Event: {alert.event}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        {alert.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contract Status Summary */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Contract Status Summary
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Status
              </p>
              <p className="text-lg font-semibold text-green-600 dark:text-green-400 mt-1 capitalize">
                {contractStatus.status}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Renewal Date
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                {new Date(contractStatus.renewalDate).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                SLA Compliance
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                {contractStatus.slaCompliance}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Events Completed
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                {contractStatus.completedEvents} / {contractStatus.totalEvents}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
