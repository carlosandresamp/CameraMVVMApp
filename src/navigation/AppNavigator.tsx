// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from '../views/CameraScreen';
import PhotoListScreen from '../views/PhotoListScreen';
import { Button, ButtonText } from '@gluestack-ui/themed';

export type RootStackParamList = {
  Camera: undefined;
  PhotoList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Camera">
        <Stack.Screen 
          name="Camera" 
          component={CameraScreen}
          options={{
            title: 'Câmera',
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="PhotoList" 
          component={PhotoListScreen}
          options={{
            title: 'Minhas Fotos',
            headerStyle: {
              backgroundColor: '#6366f1',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};