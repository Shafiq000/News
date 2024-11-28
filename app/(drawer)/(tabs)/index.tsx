import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Pressable,
  Share,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Header from "../../../components/header/Header";
import data from "../../../constants/data/data.json";
import Icon from "react-native-vector-icons/MaterialIcons";
import Fav from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage"; 
const { width, height } = Dimensions.get("window");
import { useRouter } from "expo-router";

const MainScreen = ({navigation}) => {
  const [carouselData, setCarouselData] = useState([]);
  const [favoritedItems, setFavoritedItems] = useState({});
  const router = useRouter();

  useEffect(() => {
    setCarouselData(data.news_posts || []);
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const savedFavorites = await AsyncStorage.getItem("favorites");
      setFavoritedItems(savedFavorites ? JSON.parse(savedFavorites) : {});
    } catch (error) {
      console.error("Error loading favorites", error);
    }
  };

  const handleShare = async (item) => {
    try {
      const result = await Share.share({
        message: `${item.title}\n\n${item.content}\n\nRead more: ${item.url}`,
      });
    } catch (error) {
      console.error("Error sharing content", error);
    }
  };

  const renderCarouselItem = (item) => (
    <View style={styles.carouselItem}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.carouselImage} />
      ) : (
        <Text>No image available</Text>
      )}
      <Text style={styles.carouselTitle}>{item.title}</Text>
    </View>
  );

  const toggleFavorite = async (item) => {
    try {
      const updatedFavorites = { ...favoritedItems };
      if (updatedFavorites[item.id]) {
        delete updatedFavorites[item.id]; 
      } else {
        updatedFavorites[item.id] = item; 
      }

      await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavoritedItems(updatedFavorites);
    } catch (error) {
      console.error("Error toggling favorite", error);
    }
  };
  
  const renderFlatListItem = ({ item }) => (
    <View style={styles.flatListItem}>
<Pressable
  onPress={() => router.push({
    pathname: "/DetailScreen",
    params: { item: JSON.stringify(item) }, // Stringify the item
  })}
>
  <Image source={{ uri: item.image }} style={styles.flatListImage} />
  <Text style={styles.flatListTitle}>{item.title}</Text>
  <Text style={styles.flatListDescription}>
    {item.content.length > 70 ? `${item.content.slice(0, 70)}...` : item.content}
  </Text>
</Pressable>


  
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => toggleFavorite(item)}
        >
          <Fav
            name={favoritedItems[item.id] ? "bookmark" : "bookmark-o"}
            size={24}
            color={favoritedItems[item.id] ? "#000" : "#ccc"}
          />
        </TouchableOpacity>
  
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => handleShare(item)}
        >
          <Icon name="share" size={24} color="#1E90FF" />
        </TouchableOpacity>
      </View>
    </View>
  );
  

  return (
    <View style={styles.container}>
      <Header title="Top News" navigation={navigation}/>

      <FlatList
        data={carouselData}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() =>
          carouselData.length > 0 ? (
            <Carousel
              loop
              autoPlay
              autoPlayInterval={3000}
              width={width}
              height={height * 0.4}
              data={carouselData}
              scrollAnimationDuration={1000}
              renderItem={({ item }) => renderCarouselItem(item)}
            />
          ) : (
            <Text style={styles.loadingText}>Loading carousel...</Text>
          )
        }
        renderItem={renderFlatListItem}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
  carouselItem: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    borderRadius: 10,
    height: height * 0.35,
    width: width * 0.94,
    overflow: "hidden",
    // padding: 10,
    // position: 'relative',
  },
  carouselImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  carouselTitle: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    borderRadius: 5,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  },
  flatListContainer: {
    padding: 10,
  },
  flatListItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 15,
    // margin: 8,
  },
  flatListImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  flatListTitle: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
  },
  flatListDescription: {
    fontSize: 14,
    color: "#000",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 10,
  },
  iconButton: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
});
