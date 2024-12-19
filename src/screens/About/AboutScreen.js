import React, { useLayoutEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import styles from "./styles";
import MenuImage from "../../components/MenuImage/MenuImage";

export default function AboutScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  // Function to handle opening the hyperlink
  const openGitHubProfile = () => {
    const url = "https://github.com/BDCoy";
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={require("../../../assets/profile.jpg")}
        />
        <Text style={styles.profileName}>Brayan Coy</Text>
        <Text style={styles.profileRole}>React Native Developer</Text>
      </View>

      {/* Profile Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>GitHub Profile</Text>
          <TouchableOpacity onPress={openGitHubProfile}>
            <Text style={styles.hyperlink}>https://github.com/BDCoy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
