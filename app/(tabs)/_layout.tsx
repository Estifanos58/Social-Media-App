import { Tabs } from "expo-router";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import { Image, Platform } from "react-native";
import Home from "@/assets/icons/home.svg";
import Search from "@/assets/icons/search.svg";
import Notification from "@/assets/icons/notification.svg";
import CustomTabButton from "../components/CustomTabButton";

const tabs = [
  {
    id: 1,
    name: "Home",
    icon: "home",
  },
  {
    id: 2,
    name: "Search",
    icon: "search",
  },
  {
    id: 3,
    name: "Plus",
    icon: "plus",
  },
  {
    id: 4,
    name: "Notification",
    icon: "bell",
  },
  {
    id: 5,
    name: "Profile",
    icon: "",
  },
];

export default function TabLayout() {
  const [selected, setSelected] = useState(1);

  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, 
    }}>
      {tabs.map((tab, index) => (
        <Tabs.Screen
          listeners={{
            tabPress: () => setSelected(tab.id),
          }}
          key={index}
          name={tab.name}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Icon
                name={tab.icon}
                size={20}
                style={tab.id === selected && { color: "yellow" }}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
