import { Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { categories } from "../constants/common";
import Animated, { FadeInRight } from "react-native-reanimated";
import { useSearches } from "../store/useSearches";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="my-3 min-h-[30px]"
    >
      {categories.map((category, idx) => {
        return <CategoryItem title={category} delay={idx * 200} key={idx} />;
      })}
    </ScrollView>
  );
};

const CategoryItem = ({ title, delay }) => {
  const { category, updateCategory, updateSearch, enableRefetch } =
    useSearches();
  function changeCategory(text) {
    updateCategory(text);
    updateSearch("");
    enableRefetch();
  }
  const isActive = category === title;
  return (
    <Animated.View entering={FadeInRight.duration(500).delay(delay)}>
      <Pressable
        onPress={() => {
          if (isActive) {
            changeCategory("");
          } else {
            changeCategory(title);
          }
        }}
        className={`rounded px-3 h-[30px] mr-3 items-center justify-center ${
          isActive ? "bg-black" : "bg-white"
        }`}
      >
        <Text className={isActive ? "text-white" : "text-black"}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
};

export default Categories;
