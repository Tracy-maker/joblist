import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, handlePress }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuItemPress = (page) => {
    setMenuVisible(false);
    handlePress(page);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={toggleMenu}
        activeOpacity={0.8}
      >
        {iconUrl && (
          <Image
            source={iconUrl}
            resizeMode="contain"
            style={styles.btnIcon}
          />
        )}
      </TouchableOpacity>

      {menuVisible && (
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress("Home")}
          >
            <Text style={styles.menuItemText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress("About")}
          >
            <Text style={styles.menuItemText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress("Job Advice")}
          >
            <Text style={styles.menuItemText}>Job Advice</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ScreenHeaderBtn;
