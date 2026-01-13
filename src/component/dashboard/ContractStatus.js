'use client';

export default function ContractStatus() {
  // Mock data - replace with actual API calls
  const currentContract = {
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
  };

  const contractHistory = [
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
  ];

  const upcomingRenewal = {
    daysUntilRenewal: 174,
    autoRenewal: true,
    renewalTerms: 'Same terms, 5% increase',
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Contract Status
        </h2>
        <button className="px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
          Download Contract
        </button>
      </div>

      {/* Current Contract Details */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              Current Contract
            </h3>
            <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-xs font-medium capitalize">
              {currentContract.status}
            </span>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Contract ID
              </p>
              <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mt-1 break-all">
                {currentContract.contractId}
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Venue
              </p>
              <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mt-1">
                {currentContract.venueName}
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Contract Period
              </p>
              <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mt-1 text-sm">
                {new Date(currentContract.startDate).toLocaleDateString()} -{' '}
                {new Date(currentContract.endDate).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Contract Value
              </p>
              <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mt-1">
                {currentContract.contractValue}
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Payment Terms
              </p>
              <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mt-1">
                {currentContract.paymentTerms}
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Renewal Date
              </p>
              <p className="text-base sm:text-lg font-semibold text-orange-600 dark:text-orange-400 mt-1">
                {new Date(currentContract.renewalDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SLA Terms */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            SLA Terms & Conditions
          </h3>
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Response Time
              </p>
              <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mt-1">
                {currentContract.slaTerms.responseTime}
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Setup Time
              </p>
              <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mt-1">
                {currentContract.slaTerms.setupTime}
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Compliance Rate
              </p>
              <p className="text-base sm:text-lg font-semibold text-green-600 dark:text-green-400 mt-1">
                {currentContract.slaTerms.complianceRate}
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Penalty Clause
              </p>
              <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mt-1 text-sm">
                {currentContract.slaTerms.penaltyClause}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Renewal Information */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 sm:p-6">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="text-2xl sm:text-3xl flex-shrink-0">🔄</div>
          <div className="flex-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Contract Renewal
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
              {upcomingRenewal.daysUntilRenewal} days until contract renewal
            </p>
            <div className="space-y-2">
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <span className="font-medium">Auto-renewal:</span>{' '}
                {upcomingRenewal.autoRenewal ? 'Enabled' : 'Disabled'}
              </p>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <span className="font-medium">Renewal Terms:</span>{' '}
                {upcomingRenewal.renewalTerms}
              </p>
            </div>
            <button className="mt-3 sm:mt-4 px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs sm:text-sm font-medium transition-colors">
              Review Renewal Terms
            </button>
          </div>
        </div>
      </div>

      {/* Contract History */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            Contract History
          </h3>
        </div>
        <div className="p-4 sm:p-6">
          <div className="space-y-3 sm:space-y-4">
            {contractHistory.map((contract) => (
              <div
                key={contract.id}
                className="p-3 sm:p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                      {contract.contractId}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {contract.period}
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      <span>
                        Events Completed: {contract.eventsCompleted}
                      </span>
                      <span>SLA Compliance: {contract.slaCompliance}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-xs font-medium capitalize flex-shrink-0">
                    {contract.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
