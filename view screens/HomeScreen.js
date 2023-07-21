import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../consts/colors';
import furnitures from '../consts/furnitures';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('screen');

const HomeScreen = () => {
  const navigation = useNavigation();

  const categoryItems = [
    { name: 'Chair', iconName: 'seat-outline' },
    { name: 'Table', iconName: 'table-furniture' },
    { name: 'Cupboard', iconName: 'cupboard-outline' },
    { name: 'Bed', iconName: 'bed-queen-outline' },
  ];

  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

    return (
      <View style={styles.categoriesContainer}>
        {categoryItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <View
              style={[
                styles.categoryItemBtn,
                {
                  backgroundColor:
                    selectedCategoryIndex === index
                      ? COLORS.primary
                      : COLORS.white,
                },
              ]}
            >
              <Icon
                name={item.iconName}
                size={20}
                color={
                  selectedCategoryIndex === index
                    ? COLORS.white
                    : COLORS.primary
                }
              />
              <Text
                style={[
                  styles.categoryText,
                  {
                    color:
                      selectedCategoryIndex === index
                        ? COLORS.white
                        : COLORS.primary,
                  },
                ]}
              >
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({ furniture }) => {
    return (
      <Pressable
        onPress={() => navigation.navigate('DetailsScreen', furniture)}
      >
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Icon
              name="heart"
              color={furniture.liked ? COLORS.red : COLORS.primary}
            />
          </View>
          <Image
            source={furniture.image}
            style={{ height: 120, width: '100%', borderRadius: 10 }}
          />

          <Text style={styles.cardName}>{furniture.name}</Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.price}>{furniture.price}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="star" color={COLORS.yellow} size={18} />
              <Text style={styles.rating}>4.3</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  const PopularItemCard = ({ furniture }) => {
    return (
      <View style={styles.popularItemCard}>
        <View style={styles.iconContainer}>
          <Icon
            name="heart"
            color={furniture.liked ? COLORS.red : COLORS.primary}
          />
        </View>
        <Image
          source={furniture.image}
          style={{
            width: 100,
            height: '100%',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            marginRight: 10,
          }}
        />
        <View style={{ paddingVertical: 15, justifyContent: 'center' }}>
          <Text style={styles.cardName}>{furniture.name}</Text>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text style={styles.price}>{furniture.price}</Text>
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
              <Icon name="star" color={COLORS.yellow} size={18} />
              <Text style={styles.rating}>4.3</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      {/* Header container */}
      <View style={styles.header}>
        <Icon name="sort-variant" size={28} color={COLORS.primary} />
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Icon name="cart-outline" size={28} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headerTitle}>Best Furniture For Your Home.</Text>

        {/* Input and sort button container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}
        >
          <View style={styles.searchInputContainer}>
            <Icon name="magnify" color={COLORS.grey} size={25} />
            <TextInput placeholder="Search" />
          </View>
          <View style={styles.sortBtn}>
            <Icon name="tune" color={COLORS.white} size={25} />
          </View>
        </View>

        <Text style={styles.title}>Categories</Text>
        <ListCategories />

        <Text style={styles.title}>Top Furniture</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20 }}
          data={furnitures}
          horizontal
          renderItem={({ item }) => <Card furniture={item} />}
        />

        <Text style={styles.title}>Popular</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20 }}
          data={furnitures}
          renderItem={({ item }) => <PopularItemCard furniture={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    width: '55%',
    lineHeight: 30,
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  sortBtn: {
    backgroundColor: COLORS.primary,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  categoryItemBtn: {
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 7,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginLeft: 5,
  },
  card: {
    height: 190,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width / 2.5,
    marginRight: 20,
    padding: 10,
    marginVertical: 20,
    borderRadius: 10,
  },
  cardName: {
    marginTop: 10,
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  price: { fontWeight: 'bold', color: COLORS.primary, fontSize: 12 },
  rating: { fontWeight: 'bold', color: COLORS.primary, fontSize: 12 },
  title: { fontSize: 18, fontWeight: 'bold', paddingHorizontal: 20 },
  iconContainer: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.white,
    position: 'absolute',
    elevation: 2,
    right: 15,
    top: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularItemCard: {
    height: 90,
    width: width - 100,
    backgroundColor: COLORS.white,
    elevation: 10,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
});

export default HomeScreen;
