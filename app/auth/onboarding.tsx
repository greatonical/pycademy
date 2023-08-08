import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import * as Fonts from "src/utils/fonts";
import { Motion } from "@legendapp/motion";
import Swiper from "react-native-swiper";
import { RoundButton } from "@components"
import * as Icons from "react-native-heroicons/solid";
import { useRouter } from "expo-router";
import { Router } from "expo-router/build/types";
import { login, signup } from "@routes";

export default function Onboarding() {
  const router = useRouter()
  return (
    <Swiper loop={false}>
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen router={router}/>
    </Swiper>
  );
}

function FirstScreen() {
  return (
    <SafeAreaView className="flex-1 p-5">
      <Motion.Image
        className="w-32 h-20 mt-5"
        resizeMode={"contain"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        source={require("../../assets/full_logo.png")}
      />

      <Motion.Image
        className="w-56 h-56 self-center mt-20"
        resizeMode="contain"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring" }}
        source={require("@images/first_onboarding_image.png")}
      />
      <Motion.Text
        className="text-2xl font-dmsans-black mt-10 tracking-tighter"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring" }}
      >
        Welcome to Pycademy
      </Motion.Text>
      <Motion.Text
        className="text-base text-gray-500 font-dmsans w-[90%] mt-2 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring" }}
      >
        Start your coding journey today and become a Python expert with our
        interactive lessons, step-by-step guidance, and exciting projects
      </Motion.Text>
    </SafeAreaView>
  );
}

function SecondScreen() {
  return (
    <SafeAreaView className="flex-1 p-5">
      <Motion.Image
        className="w-32 h-20 mt-5"
        resizeMode={"contain"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        source={require("../../assets/full_logo.png")}
      />

      <Motion.Image
        className="w-56 h-56 self-center mt-20"
        resizeMode="contain"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring" }}
        source={require("@images/second_onboarding_image.png")}
      />
      <Motion.Text
        className="text-2xl font-dmsans-black mt-10 tracking-tighter"
  
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring" }}
      >
        Code like a pythonista
      </Motion.Text>
      <Motion.Text
        className="text-base text-gray-500 font-dmsans w-[90%] mt-2 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring" }}
      >
        Take your python skills to the next level by tackling challenging
        exercises, honing problem solving abilities, and thinking like a true
        Pythonista
      </Motion.Text>
    </SafeAreaView>
  );
}

function ThirdScreen({router}:{router: Router}) {
  return (
    <SafeAreaView className="flex-1 p-5">
      <Motion.Image
        className="w-32 h-20 mt-5"
        resizeMode={"contain"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        source={require("../../assets/full_logo.png")}
      />

      <Motion.Image
        className="w-56 h-56 self-center mt-20"
        resizeMode="contain"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring" }}
        source={require("@images/third_onboarding_image.png")}
      />
      <Motion.Text
        className="text-2xl font-dmsans-black mt-10 tracking-tighter"
     
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring" }}
      >
        Create real-life solutions
      </Motion.Text>
      <Motion.Text
        className="text-base text-gray-500 font-dmsans w-[90%] mt-2 tracking-tight"
   
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring" }}
      >
        Discover the immense potential of Python by exploring real-world
        applications, from web development to data science, and build impressive
        projects that leave a mark
      </Motion.Text>
      <RoundButton className="absolute bottom-20 right-5" onPress={() => {router.push(signup)}} icon={<Icons.ArrowRightIcon color={"white"} size={20}/>}/>
    </SafeAreaView>
  );
}
