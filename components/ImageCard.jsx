import React from "react";
import { Image } from "expo-image";
import { Pressable } from "react-native";

const ImageCard = ({ item, index }) => {
  return (
    <Pressable
      className={`bg-gray-300 overflow-hidden mb-2 rounded ${
        index % 2 === 0 ? "mr-2" : ""
      }`}
    >
      <Image
        className="w-full h-[300px]"
        source={{ uri: item?.webformatURL }}
        transition={100}
      />
    </Pressable>
  );
};

export default ImageCard;
