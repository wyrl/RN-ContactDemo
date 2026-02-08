/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

//import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet,  View } from 'react-native';
import {
  SafeAreaProvider,
  //useSafeAreaInsets,
} from 'react-native-safe-area-context';
import MainApp from './src/main';

function App() {
  //const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle='light-content' />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  //const safeAreaInsets = useSafeAreaInsets();

  // return (
  //   <View style={styles.container}>
  //     <NewAppScreen
  //       templateFileName="App.tsx"
  //       safeAreaInsets={safeAreaInsets}
  //     />
  //   </View>
  // );



  return (
    <View style={styles.container}>
      <MainApp />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
