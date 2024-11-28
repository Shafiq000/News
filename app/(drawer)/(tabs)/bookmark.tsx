import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';

const MyFavorites = () => {
  const navigation = useNavigation();  // Hook to access navigation
  const [favoritedItems, setFavoritedItems] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const savedFavorites = await AsyncStorage.getItem("favorites");
        setFavoritedItems(savedFavorites ? Object.values(JSON.parse(savedFavorites)) : []);
      } catch (error) {
        console.error("Error loading favorites", error);
      }
    };

    loadFavorites();

    const unsubscribe = navigation.addListener("focus", loadFavorites);  // Navigation event listener
    return unsubscribe;
  }, [navigation]);

  const removeFavorite = async (id) => {
    try {
      const savedFavorites = await AsyncStorage.getItem("favorites");
      if (savedFavorites) {
        const parsedFavorites = JSON.parse(savedFavorites);
        delete parsedFavorites[id];

        await AsyncStorage.setItem("favorites", JSON.stringify(parsedFavorites));
        setFavoritedItems(Object.values(parsedFavorites));
      }
    } catch (error) {
      console.error("Error removing favorite", error);
    }
  };

  const renderFavItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemText}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>
          {item.content.length > 70
            ? `${item.content.slice(0, 70)}...`
            : item.content}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {favoritedItems.length === 0 ? (
        <View style={styles.noFavoritesContainer}>
          <Icon name="bookmark-border" size={50} color="#FF6347" />
          <Text style={styles.noFavoritesText}>
            You haven’t marked any articles to read them later. To do so, you can tap the bookmark.
          </Text>
        </View>
      ) : (
        <FlatList
          data={favoritedItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderFavItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#fff',
  },
  noFavoritesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noFavoritesText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  itemImage: {
    width: 60,
    height: 65,
    borderRadius: 5,
    marginRight: 10,
  },
  itemText: {
    flex: 1,
  },
  itemTitle: {
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default MyFavorites;
