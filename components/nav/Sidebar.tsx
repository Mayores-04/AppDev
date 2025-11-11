import { useRouter } from "expo-router";
import { ChevronDown, ChevronUp } from "lucide-react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Types
type MenuItem = {
  id: string;
  label: string;
  subItems?: MenuItem[];
  onPress?: () => void;
};

// Dummy logout service (replace with your actual logout logic)
const logout = async () => {
  console.log("Logging out...");
};

const { width } = Dimensions.get("window");
const SIDEBAR_WIDTH = width * 0.75;

// Reusable logout confirmation modal
function LogoutModal({
  visible,
  onCancel,
  onConfirm,
}: {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View className="flex-1 bg-black/50 justify-center items-center px-6">
        <View className="bg-white w-full max-w-md rounded-2xl p-6 shadow-lg">
          <Text className="text-xl font-semibold text-gray-800 mb-3 text-center">
            Logout Confirmation
          </Text>
          <Text className="text-gray-600 text-center mb-6">
            Are you sure you want to log out?
          </Text>
          <View className="flex-row justify-center space-x-4">
            <TouchableOpacity
              onPress={onCancel}
              className="px-5 py-2 bg-gray-200 rounded-xl"
            >
              <Text className="text-gray-700 font-medium">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onConfirm}
              className="px-5 py-2 bg-red-600 rounded-xl"
            >
              <Text className="text-white font-medium">Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default function StaticSidebar({
  items = [],
  onItemPress,
  userName = "User",
  userEmail = "",
  userImage = "https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
  visible = false,
  onClose,
}: {
  items?: MenuItem[];
  onItemPress?: (item: MenuItem) => void;
  userName?: string;
  userEmail?: string;
  userImage?: string;
  visible?: boolean;
  onClose?: () => void;
}) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const router = useRouter();
  const translateX = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;

  const handleItemPress = (item: MenuItem) => {
    if (item.subItems) {
      setExpanded((prev) => ({ ...prev, [item.id]: !prev[item.id] }));
    } else if (item.onPress) {
      item.onPress();
    } else if (onItemPress) {
      onItemPress(item);
    }
  };

  const handleLogoutPress = () => setShowLogoutModal(true);

  const confirmLogout = async () => {
    setShowLogoutModal(false);
    await logout();
    setTimeout(() => {
      // cast router to any to avoid strict route string typing in this helper
      (router as any).replace("/AuthScreen");
    }, 500);
  };

  useEffect(() => {
    // animate in/out when `visible` changes
    if (visible) {
      Animated.timing(translateX, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateX, {
        toValue: -SIDEBAR_WIDTH,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, translateX]);

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Animated.View
          style={{
            width: SIDEBAR_WIDTH,
            transform: [{ translateX: translateX as any }],
          }}
        >
          <View className="bg-black flex-1 ">
            {/* <ImageBackground
                source={require("../../assets/background/Sidebar.png")}
                resizeMode="cover"
                className="flex-1 h-full"
            > */}
            {/* Header */}
            <View className="gap-2 p-5 flex-row items-center border-b border-[#D9D9D9]/40">
              <View className="w-20 h-20 rounded-full bg-white justify-center items-center shadow">
                {userImage ? (
                  <Image
                    source={{ uri: userImage }}
                    className="w-full h-full rounded-full"
                    resizeMode="cover"
                  />
                ) : (
                  <Text className="text-2xl font-bold text-[#845EC2]">
                    {userName.charAt(0).toUpperCase()}
                  </Text>
                )}
              </View>
              <View className="flex flex-col">
                <Text className="text-[#845EC2] text-2xl font-bold">
                  {userName}
                </Text>
                {userEmail ? (
                  <Text className="text-[#845EC2]/80 text-sm">{userEmail}</Text>
                ) : null}
              </View>
            </View>

            {/* Menu Items */}
            <ScrollView
              className="flex-1"
              contentContainerStyle={{ paddingVertical: 10 }}
            >
              {items
                .filter((it) => it.id !== "logout")
                .map((item) => (
                  <View key={item.id}>
                    <TouchableOpacity
                      onPress={() => {
                        handleItemPress(item);
                        if (onClose) onClose();
                      }}
                      activeOpacity={0.7}
                      className={`flex-row items-center justify-between px-6 py-4`}
                    >
                      <Text className={`text-lg font-semibold tracking-wide`}>
                        {item.label}
                      </Text>
                      {item.subItems &&
                        (expanded[item.id] ? (
                          <ChevronUp color="#845EC2" size={20} />
                        ) : (
                          <ChevronDown color="#845EC2" size={20} />
                        ))}
                    </TouchableOpacity>

                    {item.subItems && expanded[item.id] && (
                      <View className="pl-10">
                        {item.subItems.map((sub) => (
                          <TouchableOpacity
                            key={sub.id}
                            onPress={() => {
                              handleItemPress(sub);
                              if (onClose) onClose();
                            }}
                            className="py-3"
                          >
                            <Text className="text-[#845EC2] text-base font-medium">
                              {sub.label}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    )}
                  </View>
                ))}
            </ScrollView>

            {items.find((it) => it.id === "logout") && (
              <View className="p-4 border-t border-[#D9D9D9]/40">
                <TouchableOpacity
                  onPress={() => {
                    handleLogoutPress();
                    if (onClose) onClose();
                  }}
                  activeOpacity={0.7}
                  className={`flex-row items-center justify-between px-6 py-4`}
                >
                  <Text
                    className={`text-lg font-semibold tracking-wide text-red-500`}
                  >
                    Logout
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            <LogoutModal
              visible={showLogoutModal}
              onCancel={() => setShowLogoutModal(false)}
              onConfirm={confirmLogout}
            />
            {/* </ImageBackground> */}
          </View>
        </Animated.View>

        <Pressable
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
          onPress={onClose}
        />
      </View>
    </Modal>
  );
}
