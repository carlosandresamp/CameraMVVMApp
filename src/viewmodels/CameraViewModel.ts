// src/viewmodels/CameraViewModel.ts
import { useState, useCallback } from 'react';
import { CameraType } from 'expo-camera';
import { CameraState, MyPhoto } from '../models/Photo';
import { LocationService } from '../services/LocationService';

export const useCameraViewModel = () => {
  const [cameraState, setCameraState] = useState<CameraState>({
    hasCameraPermission: null,
    hasLocationPermission: null,
    cameraType: 'back',
    isCameraReady: false,
  });

  const requestPermissions = useCallback(async () => {
    const { Camera } = await import('expo-camera');
    
    const cameraPermission = await Camera.requestCameraPermissionsAsync();
    const locationPermission = await LocationService.requestPermissions();

    setCameraState(prev => ({
      ...prev,
      hasCameraPermission: cameraPermission.status === 'granted',
      hasLocationPermission: locationPermission,
    }));
  }, []);

  const toggleCameraType = useCallback(() => {
    setCameraState(prev => ({
      ...prev,
      cameraType: prev.cameraType === 'back' ? 'front' : 'back',
    }));
  }, []);

  const setCameraReady = useCallback((isReady: boolean) => {
    setCameraState(prev => ({ ...prev, isCameraReady: isReady }));
  }, []);

  const takePicture = useCallback(async (cameraRef: React.RefObject<any>) => {
    if (!cameraRef.current || !cameraState.isCameraReady) {
      return null;
    }

    try {
      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.7,
        base64: false,
      });

      const location = await LocationService.getCurrentLocation();

      const newPhoto: MyPhoto = {
        id: Date.now().toString(),
        uri: photo.uri,
        latitude: location.latitude,
        longitude: location.longitude,
        timestamp: Date.now(),
      };

      return newPhoto;
    } catch (error) {
      console.error('Error taking picture:', error);
      return null;
    }
  }, [cameraState.isCameraReady]);

  return {
    cameraState,
    requestPermissions,
    toggleCameraType,
    setCameraReady,
    takePicture,
  };
};