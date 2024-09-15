import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler'

import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import image from '../../Assets/Images/Img4.png'
import { scale, verticalScale, moderateScale } from '../../utils/Scaling'
import { COLORS } from '../../Theme/Colors'
const Gesturehandler = ({ navigation }) => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const animation = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.startX = x.value;
      context.startY = y.value;
    },
    onActive: (event, context) => {
      x.value = context.startX + event.translationX;
      y.value = context.startY + event.translationY;
    },
    onEnd: (event, context) => {
      x.value = withSpring(0, {})
      y.value = withSpring(0, {});

      // y.value = withSpring(0, {});
      // y.value = withTiming(0, { duration: 700 });
    }
  })
  const animatedstyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }, { translateY: y.value }]
    };
  });

  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor='transparent' translucent barStyle="light-content" />
      <Text style={Styles.text}>Moveable Image</Text>
      <View style={Styles.container}>

        <PanGestureHandler onGestureEvent={animation}>
          <Animated.View style={[
            animatedstyle]}>
            <Image source={image}
              style={Styles.imagecontainer} />
          </Animated.View>
        </PanGestureHandler>
      </View >
    </GestureHandlerRootView >
  );
};

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  },
  imagecontainer: {
    width: scale(100),
    height: scale(100),
    alignSelf: 'center',
  },
  text: {
    fontSize: scale(22),
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'center',
    marginVertical: verticalScale(35)
  },
  button: {
    paddingVertical: verticalScale(13),
    paddingHorizontal: scale(20),
    borderRadius: moderateScale(8),
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },

})
export default Gesturehandler;
