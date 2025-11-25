// src/views/components/PhotoCard.tsx
import React from 'react';
import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
import { MyPhoto } from '../../models/Photo';

interface PhotoCardProps {
  photo: MyPhoto;
  onDelete: (photoId: string) => void;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onDelete }) => {
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  const formatCoordinates = () => {
    if (photo.latitude && photo.longitude) {
      return `${photo.latitude.toFixed(6)}, ${photo.longitude.toFixed(6)}`;
    }
    return 'Localização não disponível';
  };

  return (
    <Box
      bg="$white"
      borderRadius="$lg"
      padding="$4"
      marginVertical="$2"
      marginHorizontal="$4"
      shadowColor="$black"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity="$25"
      shadowRadius="$3.5"
      elevation="$5"
    >
      <VStack space="md">
        <Image
          source={{ uri: photo.uri }}
          alt={`Foto ${photo.id}`}
          width="100%"
          height={200}
          borderRadius="$md"
          resizeMode="cover"
        />
        
        <VStack space="xs">
          <Text size="sm" color="$textLight500">
            {formatDate(photo.timestamp)}
          </Text>
          
          <HStack alignItems="center" space="sm">
            <Text size="sm" fontWeight="$bold" color="$textLight700">
              Localização:
            </Text>
            <Text size="sm" color="$textLight600" flex={1}>
              {formatCoordinates()}
            </Text>
          </HStack>
        </VStack>

        <Button
          variant="outline"
          action="negative"
          onPress={() => onDelete(photo.id)}
        >
          <ButtonText>Excluir</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
};