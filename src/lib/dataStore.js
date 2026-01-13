// In-memory mock data used by API routes. Swap with a real database when ready.
const state = {
  overview: {
    upcomingEvents: [
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
    ],
    alerts: [
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
    ],
    contractStatus: {
      status: 'active',
      renewalDate: '2024-12-31',
      slaCompliance: '98%',
      totalEvents: 24,
      completedEvents: 20,
    },
  },
  events: [
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
  ],
  documents: [
    {
      id: 1,
      name: 'Summer Menu 2024.pdf',
      category: 'menu',
      uploadDate: '2024-06-15',
      size: '2.4 MB',
      status: 'approved',
    },
    {
      id: 2,
      name: 'Food Safety Certificate.pdf',
      category: 'compliance',
      uploadDate: '2024-06-10',
      size: '1.2 MB',
      status: 'approved',
    },
    {
      id: 3,
      name: 'Invoice_1234.pdf',
      category: 'invoice',
      uploadDate: '2024-07-01',
      size: '856 KB',
      status: 'pending',
    },
    {
      id: 4,
      name: 'Service Guidelines.pdf',
      category: 'documentation',
      uploadDate: '2024-06-20',
      size: '3.1 MB',
      status: 'approved',
    },
  ],
  messages: [
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
  ],
  feedback: [
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
  ],
  inventory: {
    events: [
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
    ],
    items: [
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
    ],
  },
  payments: [
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
  ],
  contract: {
    current: {
      id: 'CT-2024-001',
      vendorName: 'Premium Catering Services',
      venueName: 'Grand Event Venue',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'active',
      renewalDate: '2024-12-31',
      contractValue: '$250,000',
      paymentTerms: 'Net 30',
      slaTerms: {
        responseTime: '2 hours',
        setupTime: '4 hours before event',
        complianceRate: '98%',
        penaltyClause: '5% reduction for SLA violations',
      },
    },
    history: [
      {
        id: 1,
        contractId: 'CT-2023-001',
        period: '2023-01-01 to 2023-12-31',
        status: 'completed',
        eventsCompleted: 28,
        slaCompliance: '97%',
      },
      {
        id: 2,
        contractId: 'CT-2022-001',
        period: '2022-01-01 to 2022-12-31',
        status: 'completed',
        eventsCompleted: 24,
        slaCompliance: '95%',
      },
    ],
    renewal: {
      daysUntilRenewal: 174,
      autoRenewal: true,
      renewalTerms: 'Same terms, 5% increase',
    },
  },
};

const nextId = () => Math.floor(Date.now() + Math.random() * 1000);

export function getOverview() {
  return state.overview;
}

export function getEvents() {
  return state.events;
}

export function addEvent(event) {
  const newEvent = {
    id: nextId(),
    status: 'pending_confirmation',
    confirmationDeadline: null,
    ...event,
  };
  state.events.push(newEvent);
  console.log('[backend] saved event:', newEvent);
  return newEvent;
}

export function getDocuments(category) {
  if (!category || category === 'all') {
    return state.documents;
  }
  return state.documents.filter((doc) => doc.category === category);
}

export function addDocument(document) {
  const newDoc = {
    id: nextId(),
    uploadDate: new Date().toISOString(),
    status: 'pending',
    ...document,
  };
  state.documents.push(newDoc);
  console.log('[backend] saved document:', newDoc);
  return newDoc;
}

export function getMessages() {
  return state.messages;
}

export function addMessage(message) {
  const newMessage = {
    id: nextId(),
    read: false,
    timestamp: new Date().toISOString(),
    ...message,
  };
  state.messages.unshift(newMessage);
  console.log('[backend] saved message:', newMessage);
  return newMessage;
}

export function getFeedback() {
  return state.feedback;
}

export function addFeedback(feedback) {
  const newFeedback = {
    id: nextId(),
    status: 'pending',
    timestamp: new Date().toISOString(),
    ...feedback,
  };
  state.feedback.unshift(newFeedback);
  console.log('[backend] saved feedback:', newFeedback);
  return newFeedback;
}

export function resolveFeedback(feedbackId) {
  const item = state.feedback.find((f) => f.id === feedbackId);
  if (item) {
    item.status = 'resolved';
    console.log('[backend] resolved feedback:', item);
  }
  return item;
}

export function getInventory(eventId) {
  if (!eventId || eventId === 'all') {
    return state.inventory.items;
  }
  const numericId = Number(eventId);
  return state.inventory.items.filter((item) => item.eventId === numericId);
}

export function addInventoryItem(item) {
  const newItem = {
    id: nextId(),
    status: 'assigned',
    assignedDate: new Date().toISOString(),
    returnDate: null,
    ...item,
  };
  state.inventory.items.push(newItem);
  console.log('[backend] saved inventory item:', newItem);
  return newItem;
}

export function getInventoryEvents() {
  return state.inventory.events;
}

export function getPayments(status) {
  if (!status || status === 'all') {
    return state.payments;
  }
  return state.payments.filter((payment) => payment.status === status);
}

export function addPayment(payment) {
  const newPayment = {
    id: nextId(),
    paymentDate: null,
    paymentMethod: null,
    status: 'pending',
    ...payment,
  };
  state.payments.push(newPayment);
  console.log('[backend] saved payment:', newPayment);
  return newPayment;
}

export function getContract() {
  return state.contract;
}

export function logServerEvent(label, payload) {
  console.log(`[backend] ${label}:`, payload);
}
