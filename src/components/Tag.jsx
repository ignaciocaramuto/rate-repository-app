import { StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { View } from "react-native";

const styles = StyleSheet.create({
  tag: {
    color: theme.colors.white,
    padding: 5,
    borderRadius: 5,
    backgroundColor: theme.backgrounds.tag,
    alignSelf: 'flex-start'
  }
})

const Tag = ({ text }) => (
  <View style={styles.tag}>
    <Text color="white">{text}</Text>
  </View>
)

export default Tag
