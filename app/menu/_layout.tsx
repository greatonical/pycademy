import { Tabs } from 'expo-router/tabs';
import * as HeroIcons from 'react-native-heroicons/solid'
import Icon from 'react-native-remix-icon';
import * as Colors from '@colors'


export default function AppLayout() {
  return (
    <Tabs screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tabs.Screen
        // Name of the route to hide.
        name="home"
        options={{
          // This tab will no longer show up in the tab bar.
          tabBarIcon: ({focused}) => (
            <Icon name='home-5-line' size={"28"} color={`${focused ? Colors.primaryColor: Colors.tertiaryColor}`}/>
          )
        }}
      />

<Tabs.Screen
        // Name of the route to hide.
        name="course"
        options={{
          // This tab will no longer show up in the tab bar.
          tabBarIcon: ({focused}) => (
            <Icon name='book-3-line' size={"28"} color={`${focused ? Colors.primaryColor: Colors.tertiaryColor}`}/>
          )
        }}
      />

<Tabs.Screen
        // Name of the route to hide.
        name="quizzes"
        options={{
        
          // This tab will no longer show up in the tab bar.
          tabBarIcon: ({focused}) => (
            <Icon name='bubble-chart-line' size={"28"} color={`${focused ? Colors.primaryColor: Colors.tertiaryColor}`}/>
          )
        }}
      />

<Tabs.Screen
        // Name of the route to hide.
        name="syntax"
        options={{
          // This tab will no longer show up in the tab bar.
          tabBarIcon: ({focused}) => (
            <Icon name='terminal-box-line' size={"28"} color={`${focused ? Colors.primaryColor: Colors.tertiaryColor}`}/>
          )
        }}
      />
    </Tabs>
  );
}