import React, { useState } from "react";
import { Image } from "expo-image";
import { Pressable } from "react-native";

const ImageCard = ({ item, index }) => {
  // const height = item.webformatWidth > item.webformatHeight ? 230 : 300;

  return (
    <Pressable
      className={`bg-gray-300 overflow-hidden mb-2 rounded ${
        index % 2 === 0 ? "mr-2" : ""
      }`}
    >
      <Image
        className="w-full object-contain"
        style={{ height: 230 }}
        source={{ uri: item?.webformatURL }}
        transition={100}
      />
    </Pressable>
  );
};

export default ImageCard;
