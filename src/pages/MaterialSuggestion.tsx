
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const MaterialSuggestion = () => {
  const [currentPlastic, setCurrentPlastic] = useState('');
  const [application, setApplication] = useState('');
  const [properties, setProperties] = useState('');

  const handleGetSuggestion = () => {
    // Simulate API call
    console.log('Getting suggestion for:', { currentPlastic, application, properties });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Material Suggestion Tool</h1>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm max-w-2xl">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Find Sustainable Alternatives</h2>
          <p className="text-gray-600">
            Describe the plastic you are currently using and its application. Our AI will suggest a more sustainable alternative material.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Plastic Type
            </label>
            <input
              type="text"
              placeholder="e.g., PET, HDPE, Polystyrene"
              value={currentPlastic}
              onChange={(e) => setCurrentPlastic(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">Specify the type of plastic you are currently using.</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Application / Use Case
            </label>
            <textarea
              placeholder="e.g., Disposable water bottles, food packaging, children's toys"
              value={application}
              onChange={(e) => setApplication(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
            />
            <p className="text-xs text-gray-500 mt-1">Describe how this plastic is being used.</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Desired Properties (Optional)
            </label>
            <textarea
              placeholder="e.g., Waterproof, durable, heat-resistant, transparent"
              value={properties}
              onChange={(e) => setProperties(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
            />
            <p className="text-xs text-gray-500 mt-1">List any specific properties the alternative material should have.</p>
          </div>

          <Button 
            onClick={handleGetSuggestion}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Get Suggestion
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MaterialSuggestion;
