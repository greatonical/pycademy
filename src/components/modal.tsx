import { View, Text } from "react-native";
import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";

export const SuccessModal = ({text}:{text: string}) => {
  const animation = useRef(null);
  return (
    <View className="w-[80%] h-40 self-center justify-center bg-white">
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
    </View>
  );
};
