
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Recycle, Factory, Leaf, TrendingDown } from 'lucide-react';
import StatCard from '../components/StatCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  const statsData = [
    { title: 'Plastic Waste Recycled', value: '2,847', unit: 'tons', change: '+12% from last month', icon: Recycle, trend: 'up' as const },
    { title: 'Manufacturing Units', value: '156', unit: 'active', change: '+5 new units', icon: Factory, trend: 'up' as const },
    { title: 'Carbon Footprint Reduced', value: '1,234', unit: 'kg CO₂', change: '-18% this month', icon: Leaf, trend: 'down' as const },
    { title: 'Waste Diverted', value: '89.2', unit: '%', change: '+3.2% improvement', icon: TrendingDown, trend: 'up' as const },
  ];

  const monthlyData = [
    { name: 'Jan', recycled: 2400, diverted: 2100 },
    { name: 'Feb', recycled: 2600, diverted: 2300 },
    { name: 'Mar', recycled: 2800, diverted: 2500 },
    { name: 'Apr', recycled: 2750, diverted: 2400 },
    { name: 'May', recycled: 2900, diverted: 2600 },
    { name: 'Jun', recycled: 2847, diverted: 2650 },
  ];

  const wasteTypeData = [
    { name: 'PET Bottles', value: 35, color: '#22c55e' },
    { name: 'HDPE', value: 25, color: '#3b82f6' },
    { name: 'Packaging', value: 20, color: '#f59e0b' },
    { name: 'Others', value: 20, color: '#ef4444' },
  ];

  const trendData = [
    { month: 'Jan', efficiency: 78 },
    { month: 'Feb', efficiency: 82 },
    { month: 'Mar', efficiency: 85 },
    { month: 'Apr', efficiency: 83 },
    { month: 'May', efficiency: 88 },
    { month: 'Jun', efficiency: 89 },
  ];

  return (
    <div className="p-2 md:p-6 bg-gray-50 min-h-screen">
      <div className="mb-4 md:mb-6">
        <h1 className="text-lg md:text-2xl font-bold text-gray-800 mb-2">EcoSolve Delhi Dashboard</h1>
        <p className="text-gray-600 text-xs md:text-base">Monitor plastic waste management and sustainability metrics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-4 md:mb-8">
        {statsData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 md:gap-6 mb-4 md:mb-8">
        <Card className="shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] transform">
          <CardHeader className="pb-2 md:pb-4 px-3 md:px-6 pt-3 md:pt-6">
            <CardTitle className="text-sm md:text-xl">Monthly Recycling Trends</CardTitle>
            <CardDescription className="text-xs md:text-sm">Plastic waste recycled and diverted over time</CardDescription>
          </CardHeader>
          <CardContent className="px-2 md:px-6 pb-3 md:pb-6">
            <ResponsiveContainer width="100%" height={200} className="md:h-[300px]">
              <BarChart data={monthlyData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} className="md:text-xs" />
                <YAxis tick={{ fontSize: 10 }} className="md:text-xs" />
                <Bar dataKey="recycled" fill="#22c55e" name="Recycled" />
                <Bar dataKey="diverted" fill="#3b82f6" name="Diverted" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] transform">
          <CardHeader className="pb-2 md:pb-4 px-3 md:px-6 pt-3 md:pt-6">
            <CardTitle className="text-sm md:text-xl">Waste Type Distribution</CardTitle>
            <CardDescription className="text-xs md:text-sm">Breakdown of plastic waste types processed</CardDescription>
          </CardHeader>
          <CardContent className="px-2 md:px-6 pb-3 md:pb-6">
            <ResponsiveContainer width="100%" height={200} className="md:h-[300px]">
              <PieChart>
                <Pie
                  data={wasteTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={60}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {wasteTypeData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] transform">
        <CardHeader className="pb-2 md:pb-4 px-3 md:px-6 pt-3 md:pt-6">
          <CardTitle className="text-sm md:text-xl">Processing Efficiency Trends</CardTitle>
          <CardDescription className="text-xs md:text-sm">Monthly efficiency percentage in waste processing</CardDescription>
        </CardHeader>
        <CardContent className="px-2 md:px-6 pb-3 md:pb-6">
          <ResponsiveContainer width="100%" height={200} className="md:h-[300px]">
            <LineChart data={trendData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 10 }} className="md:text-xs" />
              <YAxis domain={[70, 95]} tick={{ fontSize: 10 }} className="md:text-xs" />
              <Line 
                type="monotone" 
                dataKey="efficiency" 
                stroke="#22c55e" 
                strokeWidth={2}
                dot={{ fill: '#22c55e', r: 3 }}
                className="md:stroke-[3px]"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
