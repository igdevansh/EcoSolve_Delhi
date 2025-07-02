
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BarChart3, Lightbulb, MapPin, Leaf } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const AppSidebar = () => {
  const location = useLocation();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const navItems = [
    { path: '/', label: 'Dashboard', icon: BarChart3 },
    { path: '/material-suggestion', label: 'Material Suggestion', icon: Lightbulb },
    { path: '/local-resources', label: 'Local Resources', icon: MapPin }
  ];

  return (
    <Sidebar className="bg-green-50 border-green-100">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2">
          <Leaf className="w-6 h-6 text-green-600" />
          {!isCollapsed && (
            <span className="text-lg font-semibold text-gray-800">EcoSolve</span>
          )}
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <NavLink to={item.path}>
                        <Icon className="w-4 h-4" />
                        {!isCollapsed && <span>{item.label}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
