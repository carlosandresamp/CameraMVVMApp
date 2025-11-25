// src/views/CameraScreen.tsx
import React, { useRef, useEffect } from 'react';
import { Camera } from 'expo-camera';
import { useCameraViewModel } from '../viewmodels/CameraViewModel';
import {
  Box,
  Button,
  ButtonText,
  VStack,
  HStack,
  Text,
  Center,
  Spinner,
} from '@gluestack-ui/themed';
import { router } from 'expo-router';

const CameraScreen: React.FC = () => {
  const cameraRef = useRef<Camera>(null);
  const {
    cameraState,
    requestPermissions,
    toggleCameraType,
    setCameraReady,
    takePicture,
  } = useCameraViewModel();

  useEffect(() => {
    requestPermissions();
  }, [requestPermissions]);

  const handleTakePicture = async () => {
    const photo = await takePicture(cameraRef);
    if (photo) {
      // Podemos navegar para a galeria ou mostrar mensagem de sucesso
      console.log('Foto capturada:', photo);
      // Por enquanto, vamos apenas mostrar no console
      alert('Foto capturada com sucesso!');
    }
  };

  if (cameraState.hasCameraPermission === null) {
    return (
      <Center flex={1}>
        <VStack space="lg" alignItems="center">
          <Spinner size="large" />
          <Text>Solicitando permissões...</Text>
        </VStack>
      </Center>
    );
  }

  if (cameraState.hasCameraPermission === false) {
    return (
      <Center flex={1}>
        <VStack space="lg" alignItems="center">
          <Text color="$red500" textAlign="center">
            Acesso à câmera negado!{'\n'}
            Por favor, permita o acesso à câmera nas configurações do dispositivo.
          </Text>
          <Button onPress={requestPermissions}>
            <ButtonText>Tentar Novamente</ButtonText>
          </Button>
        </VStack>
      </Center>
    );
  }

  return (
    <Box flex={1} bg="$black">
      <Camera
        ref={cameraRef}
        style={{ flex: 1 }}
        type={cameraState.cameraType === 'back' ? CameraType.back : CameraType.front}
        onCameraReady={() => setCameraReady(true)}
        ratio="16:9"
      >
        <Box flex={1} backgroundColor="transparent" justifyContent="flex-end">
          <VStack space="lg" padding="$4" bg="rgba(0,0,0,0.3)">
            <HStack justifyContent="space-between" alignItems="center">
              <Button
                variant="outline"
                action="secondary"
                onPress={toggleCameraType}
              >
                <ButtonText>
                  {cameraState.cameraType === 'back' ? 'Frontal' : 'Traseira'}
                </ButtonText>
              </Button>

              <Button
                size="xl"
                borderRadius="$full"
                width={80}
                height={80}
                onPress={handleTakePicture}
                disabled={!cameraState.isCameraReady}
              >
                <ButtonText>📸</ButtonText>
              </Button>

              <Button
                variant="outline"
                action="secondary"
                onPress={() => router.back()}
              >
                <ButtonText>Voltar</ButtonText>
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Camera>
    </Box>
  );
};

export default CameraScreen;