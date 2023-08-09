import { Tabs } from 'expo-router/tabs';
import * as HeroIcons from 'react-native-heroicons/solid'
import Icon from 'react-native-remix-icon';
import * as Colors from '@colors'


export default function AppLayout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen
        // Name of the route to hide.
        name="home"
        options={{
          // This tab will no longer show up in the tab bar.
          tabBarIcon: ({focused}) => (
            <Icon name='home-5-fill' size={"24"} color={Colors.primaryColor}/>
          )
        }}
      />
    </Tabs>
  );
}