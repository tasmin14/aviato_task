import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from '../../utils/Scaling';

export default function Category({ route }) {
    const item = route.params.item;
    return (
        <View style={styles.container}>

            <Image source={item.image}
                style={styles.image} />
            <Text style={styles.name}>Product Name - {item.name}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: verticalScale(10)

    },
    image: {
        height: scale(200),
        width: scale(200),
        marginVertical: verticalScale(10),
        alignSelf: 'center'
    },
    name: {
        fontSize: moderateScale(15),
        color: '#000',
        fontWeight: '500'
    }

});