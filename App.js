import React, { useState } from 'react';
import Login from './src/screens/BrickSortLogin.jsx';
import Upload from './src/screens/ImageUpload.jsx';
import NotLego from './src/screens/NotALego.jsx';
import MySets from './src/screens/MySets.jsx';
import Privacy from './src/screens/PrivacyDisclaimer.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthContext from './src/contexts/auth.jsx';
import TestScreen from './src/screens/TestScreen.jsx';
import SetParts from './src/screens/SetParts.jsx';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

const Stack = createStackNavigator();

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [rebrickableToken, setToken] = useState("");
  const [partsSet, setPartsSet] = useState("");

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated, rebrickableToken, setToken, partsSet, setPartsSet }}>
      <Nav>
      </Nav>
    </AuthContext.Provider>
  );
}
const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        headerMode="screen"
        screenOptions={{
          headerTintColor: '#000000',
          headerStyle: { backgroundColor: '#F6EC36' },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: 'Bricksort',
          }}
        />
        <Stack.Screen
          name="Privacy"
          component={Privacy}
          options={{
            title: 'Bricksort',
          }}
        />
        <Stack.Screen
          name="TestScreen"
          component={Draw}
          options={{
            title: 'Bricksort',
            headerLeft: null
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const Draw = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="TestScreen"
      drawerContent={props => {
        const filteredProps = {
          ...props,
          state: {
            ...props.state,
            routeNames: props.state.routeNames.filter(
              routeName => routeName !== 'SetParts'
            ),
            routes: props.state.routes.filter(
              route => route.name !== 'SetParts'
            ),
          },
        };
        return (
          <DrawerContentScrollView {...filteredProps}>
            <DrawerItemList {...filteredProps} />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen name="TestScreen" component={TestScreen} />
      <Drawer.Screen
        name="Upload"
        component={Upload}
        options={{
          title: 'Upload',
        }}
      />
      <Drawer.Screen
        name="MySets"
        component={MySets}
        options={{
          title: 'MySets',
          unmountOnBlur:true
        }} />
      <Drawer.Screen
        name="NotLego"
        component={NotLego}
        options={{
          title: 'NotALego',
        }}
      />
      <Drawer.Screen
        name="SetParts"
        component={SetParts}
        options={{
          title: 'SetParts',
          unmountOnBlur:true
        }}
      />
    </Drawer.Navigator>
  )
}
/**<NavigationContainer>
      {authenticated ? (
          <Stack.Navigator>
        <Stack.Screen name="Image Upload" component={Upload} />
        <Stack.Screen name="Not A Lego Piece" component={NotLego} />
        <Stack.Screen name="My Sets" component={MySets} />
          </Stack.Navigator>
        ) : (
            <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Privacy" component={Privacy} />
            </Stack.Navigator>
          )}
      </NavigationContainer>

      const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        headerMode="screen"
        screenOptions={{
          headerTintColor: '#000000',
          headerStyle: { backgroundColor: '#F6EC36' },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: 'Bricksort',
          }}
        />
        <Stack.Screen
          name="Privacy"
          component={Privacy}
          options={{
            title: 'Bricksort',
          }}
        />
        <Stack.Screen
          name="Upload"
          component={Upload}
          options={{
            title: 'Bricksort',
          }}
        />
        <Stack.Screen
          name="MySets"
          component={MySets}
          options={{
            title: 'Bricksort',
          }} />
        <Stack.Screen
          name="NotLego"
          component={NotLego}
          options={{
            title: 'Bricksort',
          }}
        />
        <Stack.Screen
          name="TestScreen"
          component={TestScreen}
          options={{
            title: 'Bricksort',
          }}
        />
        <Stack.Screen
          name="SetParts"
          component={SetParts}
          options={{
            title: 'Bricksort',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}**/