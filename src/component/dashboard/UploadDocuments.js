'use client';

import { useState } from 'react';

export default function UploadDocuments() {
  const [uploading, setUploading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('menu');
  const initialFiles = [
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
  ];

  const [files, setFiles] = useState(initialFiles);

  const categories = [
    { id: 'menu', label: 'Menus', icon: '📋' },
    { id: 'documentation', label: 'Service Documentation', icon: '📄' },
    { id: 'invoice', label: 'Invoices', icon: '🧾' },
    { id: 'compliance', label: 'Compliance Certificates', icon: '✅' },
  ];

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    // Simulate upload
    setTimeout(() => {
      setUploading(false);
      const newEntry = {
        id: Date.now(),
        name: file.name,
        category: selectedCategory,
        uploadDate: new Date().toISOString(),
        size: `${Math.max(1, Math.round(file.size / 1024))} KB`,
        status: 'pending',
      };
      setFiles((prev) => [newEntry, ...prev]);
      alert(`File "${file.name}" uploaded successfully!`);
      event.target.value = ''; // Reset input
    }, 2000);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file) {
      const input = document.createElement('input');
      input.type = 'file';
      input.files = e.dataTransfer.files;
      handleFileUpload({ target: { files: [file] } });
    }
  };

  const filteredFiles = files.filter((file) => file.category === selectedCategory);

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Upload Documents & Menus
        </h2>
      </div>

      {/* Category Selection */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
          Select Document Category
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedCategory === category.id
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {category.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Upload Area */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Upload New Document
        </h3>
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
        >
          <div className="text-5xl mb-4">📤</div>
          <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Drag and drop your file here
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            or click to browse
          </p>
          <label className="inline-block">
            <input
              type="file"
              onChange={handleFileUpload}
              className="hidden"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              disabled={uploading}
            />
            <span
              className={`inline-block px-6 py-3 rounded-lg font-medium cursor-pointer transition-colors ${
                uploading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {uploading ? 'Uploading...' : 'Choose File'}
            </span>
          </label>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
          </p>
        </div>
      </div>

      {/* Uploaded Files List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Uploaded Documents
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {categories.find((c) => c.id === selectedCategory)?.label}
          </p>
        </div>
        <div className="p-6">
          {filteredFiles.length > 0 ? (
            <div className="space-y-4">
              {filteredFiles.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="text-3xl">📄</div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white">
                        {file.name}
                      </p>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-500 dark:text-gray-400">
                        <span>
                          Uploaded:{' '}
                          {new Date(file.uploadDate).toLocaleDateString()}
                        </span>
                        <span>Size: {file.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        file.status === 'approved'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}
                    >
                      {file.status === 'approved' ? 'Approved' : 'Pending'}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium">
                      Download
                    </button>
                    <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              <p className="text-lg mb-2">No documents uploaded yet</p>
              <p className="text-sm">
                Upload your first document using the form above
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
