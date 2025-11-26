# 📸 Camera MVVM App

**⚠️ Nota:** Este app requer permissões de câmera e localização para funcionar corretamente. Teste sempre em dispositivo físico para melhor experiência.# 📸 Camera MVVM App

Uma aplicação React Native moderna para captura de fotos com geolocalização, desenvolvida com arquitetura MVVM e interface Gluestack UI.

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido como parte da disciplina de **Programação para Dispositivos Móveis (PDM)** e demonstra:

- **Arquitetura MVVM** (Model-View-ViewModel)
- **Separação de responsabilidades**
- **Navegação entre telas**
- **Interface moderna com Gluestack UI**
- **Integração com câmera e geolocalização**

## ✨ Funcionalidades

### 📷 Tela de Câmera
- Preview em tempo real da câmera
- Alternância entre câmera frontal e traseira
- Captura de fotos com um clique
- Botão para acessar a galeria
- Gestão automática de permissões

### 🖼️ Tela de Galeria
- Lista de fotos capturadas ordenadas por data
- Exibição de coordenadas GPS (latitude/longitude)
- Endereço aproximado via reverse geocoding
- Opção para excluir fotos individuais
- Botão para limpar toda a galeria

## 🏗️ Arquitetura MVVM

### 📋 Model
```typescript
interface MyPhoto {
  id: string;
  uri: string;
  latitude: number | null;
  longitude: number | null;
  timestamp: number;
  address?: string;
}
```

### 🧠 ViewModel
- `CameraViewModel`: Gerencia estado da câmera, permissões e captura
- `PhotoListViewModel`: Gerencia lista de fotos e operações

### 🎨 View
- Componentes puramente visuais
- Interface construída com Gluestack UI
- Zero lógica de negócio

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+
- Expo CLI
- Expo Go no dispositivo móvel

### 📥 Instalação

1. **Clone o repositório**
```bash
git clone <repository-url>
cd CameraMVVMApp
```

2. **Instale as dependências**
```bash
npm install
```

3. **Instale as dependências do Expo**
```bash
npx expo install expo-camera expo-location react-native-screens react-native-safe-area-context
```

4. **Instale as bibliotecas adicionais**
```bash
npm install @gluestack-ui/themed @gluestack-ui/config @react-navigation/native @react-navigation/stack
```

### ▶️ Execução

1. **Inicie o servidor de desenvolvimento**
```bash
npx expo start
```

2. **Escaneie o QR Code**
- Abra o app **Expo Go** no seu dispositivo
- Escaneie o QR code exibido no terminal
- Aguarde o build e carregamento

### 📱 Testando no Dispositivo

1. **Permissões necessárias:**
   - Câmera 📸
   - Localização 📍

2. **Funcionalidades para testar:**
   - Capturar fotos com diferentes câmeras
   - Verificar se a localização é registrada
   - Navegar entre câmera e galeria
   - Excluir fotos individuais

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| React Native | SDK 49+ | Framework principal |
| Expo | SDK 49+ | Desenvolvimento e build |
| Expo Camera | ^13.4.4 | Controle da câmera |
| Expo Location | ^16.1.0 | Geolocalização |
| Gluestack UI | ^1.0.14 | Interface e componentes |
| React Navigation | ^6.x | Navegação entre telas |

## 📁 Estrutura do Projeto

```
src/
├── models/
│   └── Photo.ts              # Interfaces e tipos
├── viewmodels/
│   ├── CameraViewModel.ts     # Lógica da câmera
│   └── PhotoListViewModel.ts  # Lógica da galeria
├── views/
│   ├── CameraScreen.tsx       # Tela da câmera
│   ├── PhotoListScreen.tsx    # Tela da galeria
│   └── components/
│       └── PhotoCard.tsx      # Componente de foto
├── services/
│   └── LocationService.ts     # Serviço de localização
└── navigation/
    └── AppNavigator.tsx       # Configuração de navegação
```

## 🎨 Gluestack UI Components

A interface utiliza componentes modernos do Gluestack UI:

- **Box**: Container principal
- **VStack/HStack**: Layout em pilha
- **Button/ButtonText**: Botões interativos
- **Text**: Textos estilizados
- **Image**: Exibição de imagens
- **FlatList**: Lista performática

## 📝 Scripts Disponíveis

```bash
npm start          # Inicia o servidor Expo
npm run android    # Executa no Android
npm run ios        # Executa no iOS
npm run web        # Executa no navegador
```

## 🐛 Solução de Problemas

### Problemas Comuns:

1. **Permissões negadas**
   - Verifique configurações do dispositivo
   - Reinicie o app após conceder permissões

2. **Câmera não carrega**
   - Verifique se o dispositivo suporta a câmera
   - Teste em dispositivo físico (emulador pode ter limitações)

3. **Localização não funciona**
   - Ative GPS no dispositivo
   - Conceda permissão de localização

4. **Erro de build**
   - Execute `npx expo start --clear`
   - Delete `node_modules` e reinstale

## 📄 Licença

Este projeto é destinado para fins educacionais como parte da disciplina PDM.

## 👨‍💻 Desenvolvido por

[Carlos André] - Disciplina de Programação para Dispositivos Móveis

---

**⚠️ Nota:** Este app requer permissões de câmera e localização para funcionar corretamente. Teste sempre em dispositivo físico para melhor experiência.
