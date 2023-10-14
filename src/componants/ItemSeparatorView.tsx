import { StyleSheet, View } from "react-native";

const ItemSeparatorView = (props: {horizontalMargin: number}) => {
    return <View style={styles.separator} />;
  };
  export default ItemSeparatorView;
  
  const styles = StyleSheet.create({
    separator: {
      height: 1,
      backgroundColor: 'rgba(23,183,96,0.20)',
    },
  });