import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgrounds.appBar,
    padding: 10
  },
  tab: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15
  }
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.scrollView}>
          <Pressable>
            <Link to="/">
              <Text style={styles.tab}>Repositories</Text>
            </Link>
          </Pressable>
          <Pressable>
            <Link to="/signin">
              <Text style={styles.tab}>Sign In</Text>
            </Link>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  )
}

export default AppBar;
