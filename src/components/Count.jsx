import { View } from "react-native"
import Text from "./Text"
import { StyleSheet } from "react-native"
import { formatCount } from "../utils/formatCount"

const styles = StyleSheet.create({
  count: {
    display: 'flex',
    justifyContent: 'center',
    gap: 5
  }
})

const Count = ({ text, value }) => {

  const countFormatted = formatCount(value)

  return (
    <View style={styles.count}>
      <Text fontWeight="bold" textAlign="center">{countFormatted}</Text>
      <Text color="textSecondary" textAlign="center">{text}</Text>
    </View>
  )
}

export default Count
