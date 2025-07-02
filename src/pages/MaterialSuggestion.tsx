
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MaterialSuggestion = () => {
  const [currentPlastic, setCurrentPlastic] = useState('');
  const [application, setApplication] = useState('');
  const [properties, setProperties] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateAISuggestion = async () => {
    if (!currentPlastic || !application) {
      toast({
        title: "Missing Information",
        description: "Please fill in the current plastic type and application fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate AI processing with a more realistic response
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockSuggestions = {
        'PET': {
          'Food Packaging': `Based on your PET food packaging application, here are sustainable alternatives:

**Recommended Material: PLA (Polylactic Acid)**
- Made from renewable resources like corn starch or sugarcane
- Biodegradable under industrial composting conditions
- Similar clarity and barrier properties to PET
- Temperature range: -10°C to 50°C

**Alternative: rPET (Recycled PET)**
- Made from 100% recycled PET bottles
- Reduces environmental impact by 75%
- Same performance characteristics as virgin PET
- Readily available and cost-effective

**Implementation Notes:**
- Consider barrier coating for extended shelf life
- Ensure compliance with food safety regulations
- Gradual transition recommended for supply chain adaptation`,
          default: `For your PET application, consider these eco-friendly alternatives:

**Bio-based PET**: Made from renewable feedstock
**rPET**: Recycled content reduces environmental impact
**PLA**: Plant-based alternative for appropriate temperature ranges`
        },
        'HDPE': {
          default: `For your HDPE application, sustainable options include:

**Bio-HDPE**: Made from sugarcane ethanol
**rHDPE**: High recycled content maintains durability
**PP alternatives**: Polypropylene with better recyclability`
        },
        default: `Based on your inputs, here are general sustainable material recommendations:

**Bioplastics**: PLA, PHA, or starch-based materials
**Recycled Content**: Materials with high post-consumer recycled content
**Design for Circularity**: Materials that support end-of-life recycling

Consider factors like biodegradability, recyclability, and carbon footprint reduction.`
      };

      const materialKey = currentPlastic.toUpperCase();
      const suggestionData = mockSuggestions[materialKey] || mockSuggestions.default;
      const finalSuggestion = typeof suggestionData === 'object' 
        ? (suggestionData[application] || suggestionData.default)
        : suggestionData;

      setSuggestion(finalSuggestion);
      
      toast({
        title: "Suggestion Generated!",
        description: "AI has analyzed your requirements and provided recommendations.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate suggestion. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Material Suggestion Tool</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl">
        <Card className="shadow-sm hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">Find Sustainable Alternatives</CardTitle>
            <CardDescription>
              Describe the plastic you are currently using and its application. Our AI will suggest a more sustainable alternative material.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Plastic Type *
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
                Application / Use Case *
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
              onClick={generateAISuggestion}
              disabled={isLoading}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 w-full"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Get AI Suggestion
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {suggestion && (
          <Card className="shadow-sm hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-green-600" />
                AI Recommendation
              </CardTitle>
              <CardDescription>
                Sustainable material alternatives based on your requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans leading-relaxed">
                  {suggestion}
                </pre>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MaterialSuggestion;
