import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Routes';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
