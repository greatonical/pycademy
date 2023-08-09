import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View as ProfileHeader } from "react-native";
import { Image, ImageBackground } from "expo-image";
import Icon from "react-native-remix-icon";
import * as Colors from "@colors";

export default function home() {
  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <ProfileHeader className="flex-row items-center">
        <Image
          className="w-10 h-10 rounded-full"
          source={{ uri: "https://vectorified.com/images/account-icon-23.jpg" }}
        />

        <View className="ml-3">
          <Text className="text-gray-500 font-dmsans text-sm">Welcome</Text>

          <Text className="text-primary font-dmsans text-xl">UserName</Text>
        </View>
        <Icon
          className="absolute right-4"
          name="notification-3-line"
          size={24}
          color={Colors.tertiaryColor}
        />
      </ProfileHeader>

      <ImageBackground
        className="w-auto h-48 rounded-4xl mt-8 p-5"
        contentFit="fill"
        source={require("@images/headerImage.png")}
      >
        <Text className=" font-dmsans text-gray-200" children="Start your first course" />
        <Text className=" font-dmsans-extrabold text-2xl text-white mt-4" children="Introduction to Python basics" />
      </ImageBackground>
    </SafeAreaView>
  );
}
