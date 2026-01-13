'use client';

import { useState } from 'react';

export default function EventAssignments() {
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'calendar'

  // Mock data - replace with actual API calls
  const events = [
    {
      id: 1,
      eventName: 'Summer Gala 2024',
      date: '2024-07-15',
      time: '18:00',
      venue: 'Grand Ballroom',
      venueSection: 'Main Hall',
      requirements: [
        'Catering for 200 guests',
        'Bar service',
        'Table setup',
      ],
      status: 'pending_confirmation',
      confirmationDeadline: '2024-07-10',
    },
    {
      id: 2,
      eventName: 'Corporate Conference',
      date: '2024-07-20',
      time: '09:00',
      venue: 'Conference Hall A',
      venueSection: 'Section 1-3',
      requirements: [
        'AV Equipment setup',
        'WiFi configuration',
        'Breakfast catering',
      ],
      status: 'confirmed',
      confirmationDeadline: '2024-07-15',
    },
    {
      id: 3,
      eventName: 'Wedding Reception',
      date: '2024-07-25',
      time: '17:00',
      venue: 'Garden Pavilion',
      venueSection: 'Outdoor Area',
      requirements: [
        'Full catering service',
        'Dessert station',
        'Beverage service',
      ],
      status: 'pending_confirmation',
      confirmationDeadline: '2024-07-20',
    },
    {
      id: 4,
      eventName: 'Product Launch',
      date: '2024-08-01',
      time: '14:00',
      venue: 'Exhibition Center',
      venueSection: 'Hall B',
      requirements: [
        'Catering for 150 guests',
        'Coffee station',
        'Networking area setup',
      ],
      status: 'confirmed',
      confirmationDeadline: '2024-07-25',
    },
  ];

  const handleConfirm = (eventId) => {
    // Handle confirmation logic
    console.log('Confirming event:', eventId);
    alert(`Event ${eventId} confirmed!`);
  };

  const getStatusBadge = (status) => {
    const styles = {
      confirmed:
        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      pending_confirmation:
        'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      cancelled:
        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${
          styles[status] || styles.pending_confirmation
        }`}
      >
        {status === 'confirmed'
          ? 'Confirmed'
          : status === 'pending_confirmation'
          ? 'Pending Confirmation'
          : 'Cancelled'}
      </span>
    );
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Event Assignments
        </h2>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setViewMode('list')}
            className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              viewMode === 'list'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            List View
          </button>
        </div>
      </div>

      {viewMode === 'list' ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Venue Section
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Requirements
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
                {events.map((event) => (
                  <tr
                    key={event.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {event.eventName}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {event.venue}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {event.time}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {event.venueSection}
                    </td>
                    <td className="px-6 py-4">
                      <ul className="text-sm text-gray-900 dark:text-white space-y-1">
                        {event.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(event.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {event.status === 'pending_confirmation' && (
                        <button
                          onClick={() => handleConfirm(event.id)}
                          className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-4"
                        >
                          Confirm
                        </button>
                      )}
                      <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p className="text-lg mb-2">Calendar View</p>
            <p className="text-sm">
              Calendar integration coming soon. Currently showing list view.
            </p>
          </div>
          {/* Calendar component can be integrated here */}
        </div>
      )}
    </div>
  );
}
