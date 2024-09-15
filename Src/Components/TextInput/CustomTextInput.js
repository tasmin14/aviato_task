import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../utils/Scaling';
const CustomTextInput = ({
  label,
  placeholder,
  secureTextEntry,
  keyboardType,
  value,
  onChangeText,
  error,
  maxLength
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      placeholder={placeholder}
      style={[styles.input, error ? styles.inputError : null]}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      maxLength={maxLength}
      value={value}
      onChangeText={onChangeText}
    />
    {error ? <Text style={styles.errorText}>{error}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: scale(16),
  },
  label: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginBottom: scale(8),
    color: '#800000',
  },
  input: {
    height: scale(45),
    borderColor: '#ccc',
    borderWidth: 1.5,
    borderRadius: moderateScale(8),
    paddingHorizontal: scale(10),
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: moderateScale(12),
    marginTop: scale(4),
  },
});

export default CustomTextInput;