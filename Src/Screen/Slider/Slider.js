import React from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const IMAGES = [
  { id: '1', image: require('../../Assets/sliderimg/Img1.webp') },
  { id: '2', image: require('../../Assets/sliderimg/Img2.webp') },
  { id: '3', image: require('../../Assets/sliderimg/Img3.webp') },
  { id: '4', image: require('../../Assets/sliderimg/Img4.webp') },
  { id: '5', image: require('../../Assets/sliderimg/Img5.webp') },
  { id: '6', image: require('../../Assets/sliderimg/Img6.webp') },
];

const VerticalImageSlider = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={IMAGES}
        renderItem={({ item }) => (
          <Image source={item.image} style={styles.image} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: '100%',
    resizeMode: 'cover',
  },
});

export default VerticalImageSlider;
