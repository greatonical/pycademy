import { styled } from "nativewind";
import { View, Text, TextInput, TextInputProps, TextProps } from "react-native";

export const CustomTextInput = styled(({text, placeholder, onChangeText, value}:{text: string, placeholder:string, onChangeText: any, value: string} ) => {

  return (
    <View className="h-auto">
      <Text className="font-dmsans-medium text-base" >{text}</Text>

      <TextInput
        className="border-neutral-400 mt-3 pl-5 pb-2 h-14 w-full rounded-md text-base text-neutral-700"
        style={{ borderWidth: 0.5 }}
        placeholder={placeholder}
        placeholderTextColor={'rgb(133,133,133)'}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
});

export const CustomPasswordTextInput = styled(({text, placeholder, onChangeText, secured, value}:{text: string, placeholder:string, onChangeText: any, secured: boolean, value: string} ) => {

    return (
      <View className="h-auto">
        <Text className="font-dmsans-medium text-base" >{text}</Text>
  
        <TextInput
          className="border-neutral-400 mt-3 pl-5 pb-2 h-14 w-full rounded-md text-base text-neutral-700"
          style={{ borderWidth: 0.5 }}
          placeholder={placeholder}
          placeholderTextColor={'rgb(133,133,133)'}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secured}
        />
      </View>
    );
  });

