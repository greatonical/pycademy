import { View, Text, Touchable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  RoundButton,
  OutlinedRoundButton,
  CustomButton,
  CustomPasswordTextInput,
  SuccessModal,
} from "@components";
import * as Colors from "@colors";
import * as OutlinedIcon from "react-native-heroicons/outline";
import { CustomTextInput } from "@components";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { home, login } from "@routes";
import { SignUp } from "@lib/auth";



export default function signup() {
  const [fullName, setFullName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [isModalShown, setModalShown] = useState(false)


  const router = useRouter()

  function showModal (){
    setModalShown(true)
    setTimeout(() => {
      router.push(home)
  }, 3000);
  }


  return (
    <SafeAreaView className="flex-1">
     <ScrollView className=" p-5" showsVerticalScrollIndicator={false}>
     <OutlinedRoundButton
        className="w-12 h-12 mt-4"
        onPress={() =>{router.back()}}
        icon={
          <OutlinedIcon.ArrowLeftIcon color={Colors.primaryColor} size={20} />
        }
      />
      <Text className="text-3xl text-primary mt-10 font-dmsans-extrabold tracking-tighter">
        Sign Up
      </Text>
      <Text className="font-dmsans text-gray-500 text-lg">
      Create a free account to save your progress and your preferences
      </Text>
      <View className="mt-10">
        <CustomTextInput
          text={"Full Name"}
          placeholder={"Enter your full name"}
          value={fullName}
          onChangeText={(text:string) => {setFullName(text)}}
        />
      </View>

      <View className="mt-6">
        <CustomTextInput
          text={"Email Address"}
          placeholder={"Enter your email"}
          value={emailAddress}
          onChangeText={(text:string) => {setEmailAddress(text)}}
        />
      </View>

      <View className="mt-6">
        <CustomPasswordTextInput
          text={"Password"}
          placeholder={"Enter your password"}
          secured={true}
          value={password}
          onChangeText={(text:string) => {setPassword(text)}}
        />
      </View>

      <TouchableOpacity className="flex-row mt-5" activeOpacity={0.5} onPress={() => {router.push(login)}}>
        <Text
          children="Already have an account"
          className="font-dmsans text-gray-500"
        />
        <Text
          children="Sign in"
          className="text-primary font-dmsans-bold ml-1"
        />
      </TouchableOpacity>

      <CustomButton
        className="mt-[30%] self-center"
        text="Continue"
        onPress={()=>SignUp(fullName, emailAddress, password, showModal())}
      />

     

     </ScrollView>
     {
      isModalShown ? (<SuccessModal text="You have successfully signed up!"/>):(null)
     }
     
    </SafeAreaView>
  );
}
