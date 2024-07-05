import { ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getImages } from "../api";
import { MasonryFlashList } from "@shopify/flash-list";
import ImageCard from "./ImageCard";

const ImagesGrid = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const res = await getImages();
    setImages(res.data.hits);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="w-full rounded">
      {images && (
        <MasonryFlashList
          data={images}
          numColumns={2}
          initialNumToRender={1000}
          renderItem={({ item, index }) => (
            <ImageCard item={item} index={index} />
          )}
          estimatedItemSize={200}
        />
      )}
    </ScrollView>
  );
};

export default ImagesGrid;
