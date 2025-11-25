// src/services/LocationService.ts
import * as Location from 'expo-location';

export class LocationService {
  static async requestPermissions(): Promise<boolean> {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      return status === 'granted';
    } catch (error) {
      console.error('Error requesting location permissions:', error);
      return false;
    }
  }

  static async getCurrentLocation(): Promise<{
    latitude: number | null;
    longitude: number | null;
  }> {
    try {
      const hasPermission = await this.requestPermissions();
      
      if (!hasPermission) {
        return { latitude: null, longitude: null };
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      return {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
    } catch (error) {
      console.error('Error getting location:', error);
      return { latitude: null, longitude: null };
    }
  }
}