import { StatusBar } from 'expo-status-bar';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import { View,Text,StyleSheet } from 'react-native'
import theme from './src/theme'

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text style={{color: theme.colors.primary}}>Open up App.js to start working on your app!</Text>
      </View>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center'
  }
});
