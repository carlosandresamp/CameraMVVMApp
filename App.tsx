// App.tsx - Versão Final
import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <AppNavigator />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}