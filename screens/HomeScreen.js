import { View, Text, TouchableOpacity, ScrollView, Image, Touchable } from 'react-native'
import React from 'react'
import { SafeAreaView} from 'react-native-safe-area-context'
import {Bars3CenterLeftIcon, ShoppingCartIcon} from 'react-native-heroicons/solid';
import {themeColors} from '../theme';
import { categories, featuredFruits } from '../constants';
import FruitCard from '../components/fruitCard';
import { useNavigation } from '@react-navigation/native';
import FruitCardSales from '../components/fruitCardSales';


export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('Oranges');
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-orange-50">

    {/* top bar */}
      <View className="mx-5 flex-row justify-between items-center">
        <Bars3CenterLeftIcon size="30" color="black" />
        <TouchableOpacity className="p-2 rounded-xl bg-orange-100">
          <ShoppingCartIcon size="25" color="orange" />
        </TouchableOpacity>      
      </View>

      {/* categories */}
      <View className="mt-4">
        <Text style={{color: themeColors.text}}
          className="text-2xl tracking-widest font-medium ml-5"
        >
        Seasonal
        </Text>
        <Text style={{color: themeColors.text}}
          className="text-3xl font-semibold ml-5"
        >
        Fruits and Vegetables
        </Text>
        <ScrollView
        horizontal className="mt-8 px-5" 
        showsHorizontalScrollIndicator={false}
        >
          {
            categories.map((category, index)=>{
              let isActive = category == activeCategory;
              let textClass = `text-xl   ${isActive? ' font-bold': ''}`;
              let buttonClass = 'mr-8 relative rounded-2xl';
              return (
                <TouchableOpacity key={index} onPress={()=> setActiveCategory(category)} 
                className="mr-8 relative"
                >

                <Text  style={{color: themeColors.text}} className={textClass}>{category}</Text>
                {
                  isActive? (
                    <Text className="font-extrabold text-orange-400 -mt-3 ml">__ _</Text>
                  ):null
                  
                }
               
                </TouchableOpacity>
              )
            })

          }

        </ScrollView>
      </View>

      {/* Fruits Carousel */}
      <View className="mt-8">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            featuredFruits.map((fruit, index)=>{
              return (
                <FruitCard fruit={fruit} key={index} />
                )
            })
          }
        </ScrollView>
      </View>
      {/* corusel */}
      <View className="carousel mt-8">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            featuredFruits.map((fruit, index)=>{
              return (
                <FruitCard fruit={fruit} key={index} />
              )
            })
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}