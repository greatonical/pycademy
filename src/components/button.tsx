import { styled } from "nativewind";
import React from "react";
import {
  TouchableOpacity,
  Pressable,
  Text,
  type TouchableOpacityProps,
} from "react-native";

export const RoundButton = styled(
  (props: TouchableOpacityProps & { icon: any }) => {
    const { icon, ...rest } = props;
    return (
      <TouchableOpacity
        className="w-14 h-14 bg-primary rounded-full items-center justify-center"
        activeOpacity={0.8}
        {...rest}
      >
        {icon}
      </TouchableOpacity>
    );
  }
);

export const OutlinedRoundButton = styled(
  (props: TouchableOpacityProps & { icon: any }) => {
    const { icon, ...rest } = props;
    return (
      <TouchableOpacity
        className="w-14 h-14 border-primary border-2 rounded-full items-center justify-center"
        activeOpacity={0.8}
        {...rest}
      >
        {icon}
      </TouchableOpacity>
    );
  }
);

export const CustomButton = styled(
  (props: TouchableOpacityProps & { text: string }) => {
    const { text, ...rest } = props;
    return (
      <TouchableOpacity
        className="w-full h-16 bg-primary  rounded-xl items-center justify-center"
        activeOpacity={0.8}
        {...rest}
      >
        <Text className="text-white text-lg font-dmsans">{text}</Text>
      </TouchableOpacity>
    );
  }
);

export const OutlinedCustomButton = styled(
  (props: TouchableOpacityProps & { text: string }) => {
    const { text, ...rest } = props;
    return (
      <TouchableOpacity
        className="w-full h-16 bg-primary  rounded-xl items-center justify-center"
        activeOpacity={0.8}
        {...rest}
      >
        <Text className="text-white text-lg font-dmsans">{text}</Text>
      </TouchableOpacity>
    );
  }
);
