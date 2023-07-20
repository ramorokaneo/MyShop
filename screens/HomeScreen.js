import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList, Image, Dimmension} from 'react-native';
import COLORS from '../consts/colors';
import Icon from "react-native-vector-icons/MaterialIcons";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import fruits from '../consts/fruits';
const width = Dimensions.get('windows').width / 2 - 30; 


const HomeScreen = () => {
  const categories = [ 'BERRIES', 'CITRUS', 'TROPICAL', 'POME', 'MELONS', 'DRUPES'];

  const [ categoryIndex,setCategoryIndex] = React.useState(0)

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({fruit}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', plant)}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: fruit.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
              <Icon
                name="favorite"
                size={18}
                color={fruit.like ? COLORS.red : COLORS.black}
              />
            </View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={fruit.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {fruit.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              ${plant.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.green,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: COLORS.white,
    }}>
    <View style={style.header}>
      <View>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to</Text>
        <Text style={{fontSize:38, fontWeight: "bold", color: COLORS.green}}>the Basket</Text>
      </View>
      <Icon name="shopping-cart" size={28} />
    </View>
    <View style={{marginTop: 30, flexDirection: 'row'}}>
      <View style={StyleSheet.searchContainer}>
      <Icon name="serch" size={25} style={{marginLeft: 20}}/>
      <TextInput placeholder="Search" style={style.input} />
      </View>
      <View style={style.sortBtn}>
        <Icon name="sort" size={30} color={COLORS.white}/>
      </View>
    </View>
    <CategoriesList />
    <FlatList
    columnWrapperStyle={{justifyContent: 'space-between'}}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      marginTop: 10,
      paddingBottom: 50,
    }}
    numColumns={2}
        data={fruits}
        renderItem={({item}) => {
          return <Card fruit={item} />;
        }}
        />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;