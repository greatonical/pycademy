import { View, Text } from "react-native";
import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const SuccessModal = ({text}:{text: string}) => {
  const animation = useRef(null);
  return (
    <SafeAreaView className="flex-1 w-full h-screen absolute items-center justify-center bg-[#00000066]">
        <View className="w-[80%] h-fit p-6 mb-20 justify-center items-center bg-white rounded-2xl ">
      <LottieView
        autoPlay
        loop
        ref={animation}
        style={{
          width: 200,
          height: 200,
       
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("@animations/success.json")}
      />
      <Text className="text-black font-dmsans-semibold tracking-tighter text-xl text-center">{text}</Text>
    </View>
    </SafeAreaView>
  
  );
};
