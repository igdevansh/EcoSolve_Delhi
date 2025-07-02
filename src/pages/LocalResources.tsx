
import React from 'react';
import { Phone, Globe, Clock } from 'lucide-react';
import { mockResources } from '../data/mockResources';

const LocalResources = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Local Eco-Resources</h1>
        <p className="text-gray-600">Find local recycling centers, eco-friendly shops, and community programs near you.</p>
      </div>

      <div className="space-y-6">
        {mockResources.map((resource, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <div className="w-5 h-5 text-green-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                  </svg>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{resource.name}</h3>
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    {resource.type}
                  </span>
                </div>
                
                {resource.description && (
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                )}
                
                {resource.address && (
                  <div className="mb-2">
                    <span className="font-medium text-gray-700">Address: </span>
                    <span className="text-gray-600">{resource.address}</span>
                  </div>
                )}
                
                {resource.hours && (
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span><strong>Hours:</strong> {resource.hours}</span>
                  </div>
                )}
                
                <div className="flex gap-3">
                  {resource.phone && (
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                      <Phone className="w-4 h-4" />
                      Call
                    </button>
                  )}
                  
                  {resource.website && (
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                      <Globe className="w-4 h-4" />
                      Website
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalResources;
