import { StatusBar } from 'expo-status-bar';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './src/theme'
import Navigation from './src/navigation';


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Navigation />
      <StatusBar style="auto" />
    </PaperProvider>
  );
}

//AppRegistry.registerComponent(appName, () => Main);

