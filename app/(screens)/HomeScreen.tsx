import StaticSidebar from '@/components/nav/Sidebar';
import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
const menuItems = [
  { id: "home", label: "Home" },
  {
    id: "profile",
    label: "Profile",
    subItems: [
      { id: "viewProfile", label: "View Profile" },
      { id: "editProfile", label: "Edit Profile" },
    ],
  },
  { id: "settings", label: "Settings" },
  { id: "logout", label: "Logout" },
];

  const [sidebarVisible, setSidebarVisible] = useState(false);
  const handleItemPress = (item: any) => {
    console.log('Menu item pressed:', item);
    setSidebarVisible(false);
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-gray-100">
      <TouchableOpacity onPress={() => setSidebarVisible(true)} className="px-4 py-2 bg-blue-600 rounded-lg">
        <Text className="text-white font-medium">Open Sidebar</Text>
      </TouchableOpacity>
      <StaticSidebar
        visible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
        items={menuItems}
        onItemPress={handleItemPress}
      />
    </SafeAreaView>
  );
}
