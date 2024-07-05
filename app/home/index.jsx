import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Categories from "../../components/Categories";
import { StatusBar } from "expo-status-bar";
import ImagesGrid from "../../components/ImagesGrid";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView className="w-full h-full px-6 pt-6">
      <View className="flex flex-row justify-between">
        <Text className="text-3xl font-bold">Pixels</Text>
        <EvilIcons name="navicon" size={32} color="black" />
      </View>
      <View className="border border-[#ddd] rounded-full mt-3 py-2 flex-row pl-3 items-center w-full bg-white">
        <View className="pb-1">
          <EvilIcons name="search" size={30} color="black" />
        </View>

        <TextInput
          placeholder="Search for food items..."
          className="flex-1 pr-12"
          value={search}
          onChangeText={(e) => setSearch(e)}
        />

        {search && (
          <Pressable className="pr-2" onPress={() => setSearch("")}>
            <AntDesign name="closecircle" size={24} color="black" />
          </Pressable>
        )}
      </View>
      <Categories />
      <ImagesGrid />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Home;
