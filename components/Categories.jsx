import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { categories } from "../constants/common";
import Animated, { FadeInRight } from "react-native-reanimated";

const Categories = () => {
  const [active, setActive] = useState("");
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="my-3 min-h-[50px]"
    >
      {categories.map((category, idx) => {
        return (
          <CategoryItem
            title={category}
            active={active}
            setActive={setActive}
            delay={idx * 200}
            key={idx}
          />
        );
      })}
    </ScrollView>
  );
};

const CategoryItem = ({ title, active, setActive, delay }) => {
  const isActive = active === title;
  return (
    <Animated.View entering={FadeInRight.duration(500).delay(delay)}>
      <Pressable
        onPress={() => {
          if (isActive) {
            setActive("");
          } else {
            setActive(title);
          }
        }}
        className={`rounded px-3 py-2 h-[50px] mr-3 items-center justify-center ${
          isActive ? "bg-black" : "bg-white"
        }`}
      >
        <Text className={isActive ? "text-white" : "text-black"}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
};

export default Categories;
