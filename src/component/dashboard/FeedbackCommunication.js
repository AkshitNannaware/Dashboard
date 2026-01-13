'use client';

import { useState } from 'react';

export default function FeedbackCommunication() {
  const [activeTab, setActiveTab] = useState('messages'); // 'messages' or 'feedback'

  // Mock data - replace with actual API calls
  const messages = [
    {
      id: 1,
      from: 'Venue Manager - Grand Ballroom',
      subject: 'Setup time confirmation needed',
      message:
        'Hi, could you confirm the setup time for the Summer Gala event? We need to coordinate with other vendors.',
      timestamp: '2024-07-10T10:30:00',
      read: false,
      event: 'Summer Gala 2024',
    },
    {
      id: 2,
      from: 'Event Coordinator',
      subject: 'Menu changes requested',
      message:
        'The client has requested some menu modifications. Please review the attached document.',
      timestamp: '2024-07-09T14:20:00',
      read: true,
      event: 'Corporate Conference',
    },
    {
      id: 3,
      from: 'Venue Staff',
      subject: 'Equipment delivery confirmation',
      message:
        'Thank you for the smooth delivery yesterday. Everything was set up perfectly!',
      timestamp: '2024-07-08T16:45:00',
      read: true,
      event: 'Product Launch',
    },
  ];

  const feedback = [
    {
      id: 1,
      event: 'Corporate Conference',
      eventDate: '2024-07-05',
      rating: 5,
      comment:
        'Excellent service! The catering was outstanding and the staff was very professional.',
      from: 'Venue Manager',
      timestamp: '2024-07-06T09:15:00',
      status: 'resolved',
    },
    {
      id: 2,
      event: 'Summer Gala 2024',
      eventDate: '2024-07-01',
      rating: 4,
      comment:
        'Great service overall. Minor delay in dessert service, but everything else was perfect.',
      from: 'Event Coordinator',
      timestamp: '2024-07-02T11:30:00',
      status: 'pending',
    },
    {
      id: 3,
      event: 'Wedding Reception',
      eventDate: '2024-06-28',
      rating: 5,
      comment:
        'Absolutely perfect! The couple was very happy with the food and presentation.',
      from: 'Venue Staff',
      timestamp: '2024-06-29T10:00:00',
      status: 'resolved',
    },
  ];

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyText, setReplyText] = useState('');

  const handleSendReply = () => {
    if (replyText.trim()) {
      alert('Reply sent successfully!');
      setReplyText('');
      setSelectedMessage(null);
    }
  };

  const handleResolveFeedback = (feedbackId) => {
    alert(`Feedback ${feedbackId} marked as resolved!`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Feedback & Communication
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveTab('messages')}
          className={`px-6 py-3 font-medium transition-colors border-b-2 ${
            activeTab === 'messages'
              ? 'border-blue-600 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
          }`}
        >
          Messages ({messages.filter((m) => !m.read).length} unread)
        </button>
        <button
          onClick={() => setActiveTab('feedback')}
          className={`px-6 py-3 font-medium transition-colors border-b-2 ${
            activeTab === 'feedback'
              ? 'border-blue-600 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
          }`}
        >
          Feedback ({feedback.filter((f) => f.status === 'pending').length}{' '}
          pending)
        </button>
      </div>

      {activeTab === 'messages' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Inbox
              </h3>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-[600px] overflow-y-auto">
              {messages.map((msg) => (
                <button
                  key={msg.id}
                  onClick={() => setSelectedMessage(msg)}
                  className={`w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                    selectedMessage?.id === msg.id
                      ? 'bg-blue-50 dark:bg-blue-900/20'
                      : ''
                  } ${!msg.read ? 'bg-gray-50 dark:bg-gray-700/50' : ''}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <p
                      className={`text-sm font-medium ${
                        !msg.read
                          ? 'text-gray-900 dark:text-white'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {msg.from}
                    </p>
                    {!msg.read && (
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    {msg.subject}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                    {msg.message}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                    {new Date(msg.timestamp).toLocaleString()}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            {selectedMessage ? (
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {selectedMessage.subject}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        From: {selectedMessage.from}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Event: {selectedMessage.event}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(selectedMessage.timestamp).toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                    {selectedMessage.message}
                  </p>
                </div>
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Type your reply..."
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                    rows="4"
                  />
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={handleSendReply}
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                    >
                      Send Reply
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center text-gray-500 dark:text-gray-400">
                <p className="text-lg">Select a message to view details</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Feedback from Venue Staff
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {feedback.map((item) => (
                <div
                  key={item.id}
                  className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {item.event}
                        </h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(item.eventDate).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        From: {item.from}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-xl ${
                              i < item.rating
                                ? 'text-yellow-400'
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === 'resolved'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        }`}
                      >
                        {item.status === 'resolved' ? 'Resolved' : 'Pending'}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {item.comment}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(item.timestamp).toLocaleString()}
                    </span>
                    {item.status === 'pending' && (
                      <button
                        onClick={() => handleResolveFeedback(item.id)}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        Mark as Resolved
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
