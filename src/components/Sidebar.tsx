
import React from 'react';
import { NavLink } from 'react-router-dom';
import { BarChart3, Lightbulb, MapPin, Leaf } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/', label: 'Dashboard', icon: BarChart3 },
    { path: '/material-suggestion', label: 'Material Suggestion', icon: Lightbulb },
    { path: '/local-resources', label: 'Local Resources', icon: MapPin }
  ];

  return (
    <div className="w-64 bg-green-50 border-r border-green-100 min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Leaf className="w-6 h-6 text-green-600" />
        <span className="text-lg font-semibold text-gray-800">EcoSolve</span>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-green-200 text-green-800' 
                    : 'text-gray-700 hover:bg-green-100'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
