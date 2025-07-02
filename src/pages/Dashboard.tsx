
import React from 'react';
import StatCard from '../components/StatCard';
import { Trash2, Recycle, Target, Lightbulb } from 'lucide-react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

const Dashboard = () => {
  const wasteTypeData = [
    { name: 'PET', value: 35, color: '#22c55e' },
    { name: 'HDPE', value: 25, color: '#84cc16' },
    { name: 'PVC', value: 15, color: '#f97316' },
    { name: 'LDPE', value: 15, color: '#3b82f6' },
    { name: 'Other', value: 10, color: '#ef4444' }
  ];

  const progressData = [
    { month: 'Jan', plasticSaved: 85, targetSaving: 80 },
    { month: 'Feb', plasticSaved: 88, targetSaving: 85 },
    { month: 'Mar', plasticSaved: 92, targetSaving: 90 },
    { month: 'Apr', plasticSaved: 96, targetSaving: 92 },
    { month: 'May', plasticSaved: 102, targetSaving: 95 },
    { month: 'Jun', plasticSaved: 108, targetSaving: 98 }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">EcoSolve Delhi Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Delhi: Monthly Plastic Waste"
          value="1237"
          unit="kg"
          change="+0% from last month"
          icon={Trash2}
          trend="up"
        />
        <StatCard
          title="Delhi: Recycling Rate"
          value="44.4"
          unit="%"
          change="+0.5% from last month"
          icon={Recycle}
          trend="up"
        />
        <StatCard
          title="Delhi: Eco Initiatives"
          value="18"
          unit="projects"
          change=""
          icon={Lightbulb}
          trend="up"
        />
        <StatCard
          title="Delhi: Waste Reduction Goal"
          value="60.9"
          unit="% of target"
          change=""
          icon={Target}
          trend="up"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Delhi: Plastic Waste by Type</h3>
            <p className="text-sm text-gray-600">Breakdown of commonly found plastic types in Delhi's waste.</p>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={wasteTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {wasteTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  iconType="circle"
                  wrapperStyle={{ paddingTop: '20px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Line Chart */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Delhi: Waste Reduction Progress</h3>
            <p className="text-sm text-gray-600">Monthly progress towards plastic waste reduction targets in Delhi (in kg).</p>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#666' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#666' }}
                  domain={[0, 120]}
                />
                <Line 
                  type="monotone" 
                  dataKey="plasticSaved" 
                  stroke="#22c55e" 
                  strokeWidth={3}
                  dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
                  name="Plastic Saved (kg)"
                />
                <Line 
                  type="monotone" 
                  dataKey="targetSaving" 
                  stroke="#84cc16" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: '#84cc16', strokeWidth: 2, r: 4 }}
                  name="Target Saving (kg)"
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  wrapperStyle={{ paddingTop: '20px' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
