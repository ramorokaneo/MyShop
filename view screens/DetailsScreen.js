import React, { useState, createContext, useContext } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../consts/colors';

// Create the CartContext
const CartContext = createContext();

// Custom hook to access the CartContext easily
export const useCart = () => useContext(CartContext);

// CartProvider to wrap your entire application
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const DetailsScreen = ({ navigation, route }) => {
  const furniture = route.params;
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const itemToAddToCart = {
      id: furniture.id,
      name: furniture.name,
      quantity,
      price: furniture.price,
      image: furniture.image,
    };

    addToCart(itemToAddToCart);
    console.log(`Added ${quantity} ${furniture.name}(s) to cart!`);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.headerBtn}>
            <Icon name="chevron-left" size={25} />
          </View>
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Details</Text>
        <View style={styles.headerBtn}>
          <Icon name="dots-vertical" size={25} color={COLORS.primary} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Furniture image */}
        <ImageBackground
          resizeMode="cover"
          style={styles.backgroundImage}
          source={furniture.image}
        >
          <View
            style={{
              height: 60,
              width: 70,
              backgroundColor: COLORS.primary,
              position: 'absolute',
              borderTopLeftRadius: 15,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 5,
              }}
            >
              <Icon name="star" color={COLORS.yellow} size={18} />
              <Text
                style={{
                  fontSize: 10,
                  color: COLORS.white,
                  fontWeight: 'bold',
                }}
              >
                4.5
              </Text>
            </View>
            <Text
              style={{ fontSize: 9, color: COLORS.white, fontWeight: 'bold' }}
            >
              250 Reviews
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.detailsContainer}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.primary,
            }}
          >
            {furniture.name}
          </Text>
          <Text
            style={{
              marginVertical: 20,
              fontWeight: 'bold',
              fontSize: 16,
              color: COLORS.primary,
            }}
          >
            Description
          </Text>
          <Text style={{ color: COLORS.dark, fontSize: 12, lineHeight: 20 }}>
            Designed modern chair with luxury curves in an organic yet
            structured design that holds the sitting body and provides a feeling
            of relaxation while offering excellent back support.
          </Text>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{ color: COLORS.yellow, fontSize: 22, fontWeight: 'bold' }}
            >
              {furniture.price}
            </Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={decreaseQuantity}>
                <View style={styles.quantityBtn}>
                  <Icon name="minus" size={20} />
                </View>
              </TouchableOpacity>
              <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>
                {quantity}
              </Text>
              <TouchableOpacity onPress={increaseQuantity}>
                <View style={styles.quantityBtn}>
                  <Icon name="plus" size={20} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity>
              <View
                style={{
                  height: 50,
                  width: 50,
                  elevation: 7,
                  marginRight: 30,
                  borderRadius: 25,
                  backgroundColor: COLORS.white,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon name="heart-outline" size={28} color={COLORS.primary} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAddToCart}>
              <View style={styles.addToCartBtn}>
                <Text style={{ color: COLORS.white }}>Add To Cart</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    marginHorizontal: 20,
    height: 300,
    borderRadius: 15,
    overflow: 'hidden',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingTag: {
    height: 30,
    width: 35,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartBtn: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
  },
  detailsContainer: { flex: 1, paddingHorizontal: 20, marginTop: 40 },
  quantityBtn: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityContainer: {
    height: 35,
    width: 100,
    backgroundColor: COLORS.primary,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default DetailsScreen;
