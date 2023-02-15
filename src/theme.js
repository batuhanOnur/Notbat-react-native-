import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        mainBackground: '#0E121A',
        primary: '#007AFF',
        secondary: '#1D2330'
    }
}

export default theme