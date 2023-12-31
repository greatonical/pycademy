import { View, Text, Touchable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  RoundButton,
  OutlinedRoundButton,
  CustomButton,
  CustomPasswordTextInput,
} from "@components";
import * as Colors from "@colors";
import * as OutlinedIcon from "react-native-heroicons/outline";
import { CustomTextInput } from "@components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { home, signup } from "@routes";

export default function login() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 p-5">
      <OutlinedRoundButton
        className="w-12 h-12 mt-4"
        onPress={() =>{router.back()}}
        icon={
          <OutlinedIcon.ArrowLeftIcon color={Colors.primaryColor} size={20} />
        }
      />
      <Text className="text-3xl text-primary mt-10 font-dmsans-extrabold tracking-tighter">
        Login
      </Text>
      <Text className="font-dmsans text-gray-500 text-lg">
        Login to your account to save your progress and continue where you left
        off
      </Text>
      <View className="mt-10">
        <CustomTextInput
          text={"Email Address"}
          placeholder={"Enter your email"}
          value={emailAddress}
          onChangeText={(text: string) => {
            setEmailAddress(text);
          }}
        />
      </View>

      <View className="mt-6">
        <CustomPasswordTextInput
          text={"Password"}
          placeholder={"Enter your password"}
          secured={true}
          value={password}
          onChangeText={(text: string) => {
            setPassword(text);
          }}
        />
      </View>

      <CustomButton
        className="absolute bottom-10 self-center"
        text="Continue"
        onPress={() => {
          router.push("menu");
        }}
      />

      <TouchableOpacity
        className="flex-row mt-5"
        activeOpacity={0.5}
        onPress={() => {
          router.push(signup);
        }}
      >
        <Text
          children="Don't have an account"
          className="font-dmsans text-gray-500"
        />
        <Text
          children="Sign up"
          className="text-primary font-dmsans-bold ml-1"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
