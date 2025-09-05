import React from "react";

const RideflowUI = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            {/* Blue icon/logo */}
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="text-white"
              >
                <path d="M2 3h8l-1 6H3L2 3z" fill="currentColor" />
              </svg>
            </div>
            <span className="text-lg font-medium text-gray-900">Rideflow</span>
          </div>
        </div>
      </header>

      {/* Main Content - Empty state matching the image */}
      <main className="p-0">
        <div className="bg-white min-h-[calc(100vh-73px)]">
          {/* Completely empty content area as shown in the image */}
        </div>
      </main>
    </div>
  );
};

export default RideflowUI;
