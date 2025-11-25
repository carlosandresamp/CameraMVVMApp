// src/models/Photo.ts
export interface MyPhoto {
  id: string;
  uri: string;
  latitude: number | null;
  longitude: number | null;
  timestamp: number;
  address?: string;
}

export interface CameraState {
  hasCameraPermission: boolean | null;
  hasLocationPermission: boolean | null;
  cameraType: 'front' | 'back';
  isCameraReady: boolean;
}