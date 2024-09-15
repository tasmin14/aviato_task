import React from 'react'
import { Image, Text, View, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native'
import { moderateScale, scale, verticalScale } from '../../utils/Scaling';
import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
  {
    id: 1,
    name: 'Amazon Echo Plus(3nd Gen)',
    sku: '#9256821912-FE',
    category: 'electronics',
    change: '5.7 %',
    price: '$49',
    sold: '6, 643',
    sales: '$10, 331.70',
    image: require('../../Assets/Images/Img1.png')
  },
  {
    id: 2,
    name: 'Aedle VK- X - Premium Custom',
    sku: '#9256821912 - FE',
    category: 'electronics',
    change: '5.7 %',
    price: '$49',
    sold: '6, 643',
    sales: '$10, 331.70',
    image: require('../../Assets/Images/Img2.png')
  },
  {
    id: 3,
    name: ' Nikon D750 FX-format',
    sku: '#9256821912 - FE',
    category: 'electronics',
    change: '5.7 %',
    price: '$49',
    sold: '6, 643',
    sales: '$10, 331.70',
    image: require('../../Assets/Images/Img3.png')
  },
  {
    id: 4,
    name: ' Minimalist wireless headphone',
    sku: '#9256821912 - FE',
    category: 'electronics',
    change: '5.7 %',
    price: '$49',
    sold: '6, 643',
    sales: ' $10, 331.70',
    image: require('../../Assets/Images/Img4.png')
  },
  {
    id: 5,
    name: 'Shinobi Watch 2 - Cream white',
    sku: '#9256821912-FE',
    category: 'electronics',
    change: ' 5.7%',
    price: ' $49',
    sold: '6,643',
    sales: ' $10,331.70',
    image: require('../../Assets/Images/Img5.png')
  },
  {
    id: 6,
    name: 'Polaroid Pronto 600',
    sku: '#9256821912-FE',
    category: 'electronics',
    change: '5.7%',
    price: '$49',
    sold: ' 6,643',
    sales: ' $10,331.70',
    image: require('../../Assets/Images/Img6.png')
  },
  {
    id: 7,
    name: 'Leica M60 Analog Camera',
    sku: '#9256821912-FE',
    category: 'electronics',
    change: ' 5.7%',
    price: ' $49',
    sold: ' 6,643',
    sales: ' $10,331.70',
    image: require('../../Assets/Images/Img7.png')
  },
  {
    id: 8,
    name: ' Amazon Echo Plus (3rd Gen)',
    sku: ' #9256821912-FE',
    category: 'electronics',
    change: '5.7%',
    price: '$49',
    sold: '6,643',
    sales: '$10,331.70',
    image: require('../../Assets/Images/Img8.png')
  }
]
const Item = ({ item, navigation }) => (

  < TouchableOpacity
    onPress={() => navigation.navigate('Category', { item: item })}
    style={styles.cardContainer} >
    <View style={styles.topRow}>

      <Image source={item.image} style={styles.image} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.subtitleRow}>
          <Text style={styles.subtitle}>{item.sku}</Text>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{item.category}</Text>
          </View>
        </View>
      </View>
    </View>


    <View style={styles.infoRow}>
      <Text style={styles.label}>CHANGE</Text>
      <View style={styles.rowValue}>
        <Text style={styles.value}>{item.change}</Text>
      </View>
    </View>

    <View style={styles.infoRow}>
      <Text style={styles.label}>PRICE</Text>
      <Text style={styles.value}>${item.price}</Text>
    </View>

    <View style={styles.infoRow}>
      <Text style={styles.label}>SOLD</Text>
      <Text style={styles.value}>{item.sold}</Text>
    </View>

    <View style={styles.infoRow}>
      <Text style={styles.label}>SALES</Text>
      <Text style={styles.value}>${item.sales}</Text>
    </View>
  </TouchableOpacity >
);

export default function App({ navigation }) {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} navigation={navigation} />}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: moderateScale(15),
    padding: scale(15),
    marginVertical: scale(5),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: moderateScale(10),
    elevation: 3,
    marginHorizontal: scale(10)
  },
  topRow: {
    flexDirection: 'row',
    marginBottom: scale(15),

  },
  image: {
    width: scale(40),
    height: scale(40),
    borderRadius: moderateScale(8),
  },
  titleContainer: {
    marginLeft: scale(10),
    justifyContent: 'center',
  },
  title: {
    fontSize: moderateScale(19),
    fontWeight: 'bold',
    color: 'black'
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(5),
  },
  subtitle: {
    fontSize: moderateScale(17),
    color: 'black',
  },
  tag: {
    backgroundColor: '#80827d',
    borderRadius: moderateScale(5),
    paddingVertical: verticalScale(2),
    paddingHorizontal: scale(6),
    marginLeft: scale(20),
  },
  tagText: {
    fontSize: moderateScale(12),
    color: 'white',
    marginHorizontal: scale(3),
    marginVertical: verticalScale(3)
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scale(5),
    marginHorizontal: scale(50)
  },
  label: {
    fontSize: moderateScale(17),
    color: 'black',
  },
  value: {
    fontSize: moderateScale(17),
    fontWeight: 'bold',
    color: 'black'
  },
  rowValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
