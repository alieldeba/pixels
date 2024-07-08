import { ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getImages } from "../api";
import { MasonryFlashList } from "@shopify/flash-list";
import ImageCard from "./ImageCard";
import { useSearches } from "../store/useSearches";

const ImagesGrid = () => {
  const {
    page,
    search,
    category,
    refetch,
    disableRefetch,
    images,
    updateImages,
  } = useSearches();

  useEffect(() => {
    if (refetch) {
      fetchImages();
      disableRefetch();
    }
  }, [page, search, category, refetch]);

  // TODO: fetch more images when scroll to the nd by increasing page (infinite scrolling).
  const fetchImages = async () => {
    const res = await getImages(page, search, category);
    updateImages(res.data.hits);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="w-full rounded">
      {images.length == 0 && !refetch ? (
        <Text className="m-auto">No Results Found 😔</Text>
      ) : (
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
