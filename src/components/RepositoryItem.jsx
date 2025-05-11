import { StyleSheet } from "react-native";
import { View } from "react-native";
import theme from "../theme";
import Count from "./Count";
import Logo from "./Logo";
import Text from "./Text"
import Tag from "./Tag";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgrounds.repositoryItem,
    padding: 12
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 12
  },
  counts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})

const RepositoryItem = ({ item }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Logo uri={item.ownerAvatarUrl} style={{ flex: 1 }}></Logo>
      <View style={{ flex: 5, display: 'flex', gap: 6 }}>
        <Text fontWeight="bold">{item.fullName}</Text>
        <Text color="textSecondary">{item.description}</Text>
        <Tag text={item.language}></Tag>
      </View>
    </View>
    <View style={styles.counts}>
      <Count text="Stars" value={item.stargazersCount}></Count>
      <Count text="Forks" value={item.forksCount}></Count>
      <Count text="Reviews" value={item.reviewCount}></Count>
      <Count text="Rating" value={item.ratingAverage}></Count>
    </View>
  </View>
);

export default RepositoryItem

