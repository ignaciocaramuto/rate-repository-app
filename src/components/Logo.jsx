import { Image, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 5
  },
});

const Logo = ({ uri }) => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri }}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

export default Logo
