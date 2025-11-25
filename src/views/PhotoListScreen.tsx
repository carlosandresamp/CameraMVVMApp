// src/views/PhotoListScreen.tsx
import React from 'react';
import { usePhotoListViewModel } from '../viewmodels/PhotoListViewModel';
import { PhotoCard } from './components/PhotoCard';
import {
  Box,
  Button,
  ButtonText,
  VStack,
  Text,
  Center,
  FlatList,
  HStack,
} from '@gluestack-ui/themed';
import { router } from 'expo-router';

const PhotoListScreen: React.FC = () => {
  const { photos, deletePhoto, clearAllPhotos } = usePhotoListViewModel();

  return (
    <Box flex={1} bg="$backgroundLight100">
      <VStack flex={1} space="md" paddingTop="$4">
        <HStack justifyContent="space-between" alignItems="center" paddingHorizontal="$4">
          <Text size="2xl" fontWeight="$bold">
            Minhas Fotos ({photos.length})
          </Text>
          
          <HStack space="sm">
            {photos.length > 0 && (
              <Button variant="outline" action="negative" onPress={clearAllPhotos}>
                <ButtonText>Limpar Tudo</ButtonText>
              </Button>
            )}
            
            <Button onPress={() => router.back()}>
              <ButtonText>Voltar</ButtonText>
            </Button>
          </HStack>
        </HStack>

        {photos.length === 0 ? (
          <Center flex={1}>
            <VStack space="lg" alignItems="center">
              <Text size="lg" color="$textLight500">
                Nenhuma foto capturada ainda
              </Text>
              <Button onPress={() => router.back()}>
                <ButtonText>Tirar Primeira Foto</ButtonText>
              </Button>
            </VStack>
          </Center>
        ) : (
          <FlatList
            data={photos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <PhotoCard photo={item} onDelete={deletePhoto} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}
      </VStack>
    </Box>
  );
};

export default PhotoListScreen;