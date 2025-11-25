// src/viewmodels/PhotoListViewModel.ts
import { useState, useCallback } from 'react';
import { MyPhoto } from '../models/Photo';

export const usePhotoListViewModel = () => {
  const [photos, setPhotos] = useState<MyPhoto[]>([]);

  const addPhoto = useCallback((photo: MyPhoto) => {
    setPhotos(prev => [photo, ...prev]);
  }, []);

  const deletePhoto = useCallback((photoId: string) => {
    setPhotos(prev => prev.filter(photo => photo.id !== photoId));
  }, []);

  const clearAllPhotos = useCallback(() => {
    setPhotos([]);
  }, []);

  const getSortedPhotos = useCallback(() => {
    return [...photos].sort((a, b) => b.timestamp - a.timestamp);
  }, [photos]);

  return {
    photos: getSortedPhotos(),
    addPhoto,
    deletePhoto,
    clearAllPhotos,
  };
};