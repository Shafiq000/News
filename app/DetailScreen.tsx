import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useLocalSearchParams } from "expo-router"; 
// const DetailScreen = () => {
//   const { item } = useLocalSearchParams();

//   const parsedItem = JSON.parse(item);
//   return (
//     <View style={styles.container}>
//       {parsedItem.image && (
//         <Image source={{ uri: parsedItem.image }} style={styles.image} />
//       )}
//       <Text style={styles.title}>{parsedItem.title}</Text>
//       <Text style={styles.content}>{parsedItem.content}</Text>
//     </View>
//   );
// };
const DetailScreen = () => {
  const { item } = useLocalSearchParams();

  // Ensure item is a string before parsing
  const parsedItem = JSON.parse(Array.isArray(item) ? item[0] : item);

  return (
    <View style={styles.container}>
      {parsedItem.image && (
        <Image source={{ uri: parsedItem.image }} style={styles.image} />
      )}
      <Text style={styles.title}>{parsedItem.title}</Text>
      <Text style={styles.content}>{parsedItem.content}</Text>
    </View>
  );
};


export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    top:30
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    // marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});
