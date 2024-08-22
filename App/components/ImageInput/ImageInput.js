import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import colors from "../../config/colors";

function ImageInput({ imagrUri, onChangeImage }) {
  const cameraPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) Alert("tla9 lina l camera a khona ");
  };
  useEffect(() => {
    cameraPermission();
  }, []);

  const handlePress = () => {
    if (!imagrUri) selectImage();
    else
      Alert.alert("Supprimer", "Wach baghi tmas7 had tsswira", [
        { text: "Ah", onPress: () => onChangeImage(null) },
        { text: "La" },
      ]);
  };

  const selectImage = async () => {
    try {
      const { canceled, assets } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!canceled) onChangeImage(assets[0].uri);
    } catch (error) {
      console.error("Why ?", error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imagrUri ? (
          <MaterialCommunityIcons
            size={40}
            color={colors.mazarineBlue}
            name="camera"
          />
        ) : (
          <Image source={{ uri: imagrUri }} style={styles.image} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lynxWhite,
    borderRadius: 15,
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
