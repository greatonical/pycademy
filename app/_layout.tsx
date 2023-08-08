import { Stack } from "expo-router";



export default function Layout() {
  return (
    <Stack initialRouteName="index" screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="auth/onboarding"/>
      <Stack.Screen name="auth/login"/>
      <Stack.Screen name="auth/signup"/>
      <Stack.Screen name="home"/>
      <Stack.Screen name="profile"/>
    </Stack>
  )
}