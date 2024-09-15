import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
  Alert,
  ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../Theme/Colors';
import { verticalScale, moderateScale, scale } from '../../utils/Scaling';
import CustomTextInput from '../../Components/TextInput/CustomTextInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
export default function Signup({ navigation }) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleValidation = () => {
    const newErrors = {};

    // Validate User Name
    if (!userName.trim()) {
      newErrors.userName = 'User Name is required';
    } else if (userName.trim().length < 3) {
      newErrors.userName = 'User Name must be at least 3 characters long';
    }

    // Validate Email
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    // Validate Mobile
    if (!/^\d{10}$/.test(mobile.trim())) {
      newErrors.mobile = 'Mobile number must be exactly 10 digits';
    }

    // Validate Password
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.trim().length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    console.log('Submitting data:', {
      userName,
      email,
      password,
      mobile,
    });
    setLoading(true);
    if (handleValidation()) {
      try {
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
        const response = await axios.post(apiUrl, {
          title: userName,
          body: `Email: ${email}\nMobile: ${mobile}\npassword:${password}`,
          // userId: 1,
        });

        console.log('Response data:', response.data);
        // Alert.alert('Success', 'You have successfully signed up!');
        navigation.navigate('BottomTab');

      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Something went wrong. Please try again later.');
      }
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#800000', '#600000', '#000000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <StatusBar backgroundColor='transparent' translucent barStyle="light-content" />
      </LinearGradient>
      <LinearGradient
        colors={['#800000', '#600000', '#000000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Task Manager</Text>
        </View>
      </LinearGradient>
      <LinearGradient
        colors={['#800000', '#600000', '#600000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <View style={styles.formContainer}>
          <CustomTextInput
            label="User Name"
            placeholder="Enter UserName"
            value={userName}
            onChangeText={setUserName}
            error={errors.userName}
          />
          <CustomTextInput
            label="User Mobile"
            placeholder="Enter Mobile"
            maxLength={10}
            value={mobile}
            onChangeText={setMobile}
            error={errors.mobile}
          />

          <CustomTextInput
            label="Gmail"
            placeholder="John@gmail.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            error={errors.email}
          />
          <CustomTextInput
            label="Password"
            placeholder="password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            error={errors.password}
          />

          <LinearGradient
            colors={['#800000', '#600000', '#000000']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.buttonGradient}>
            <TouchableOpacity style={styles.button}
              onPress={handleSubmit}
              disabled={loading}>
              {loading ? (
                <ActivityIndicator size="small" color={COLORS.White} />
              ) : (
                <Text style={styles.buttonText}>Sign Up</Text>
              )}
            </TouchableOpacity>

            {/* <Text style={styles.buttonText}>Signup</Text> */}
            {/* </TouchableOpacity> */}
          </LinearGradient>

          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.iconWrapper}>
              <View style={styles.iconBackground}>
                <Icon name="google" size={25} color="#600000" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrapper}>
              <View style={styles.iconBackground}>
                <Icon name="facebook" size={25} color="#600000" />
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </LinearGradient>
      <View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  gradientContainer: {
    padding: scale(20),
  },
  header: {
    padding: scale(15),
    marginVertical: verticalScale(15),
  },
  headerText: {
    color: COLORS.white,
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    textAlign: 'center',
    top: 10,
  },
  formContainer: {
    backgroundColor: COLORS.white,
    borderTopRightRadius: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
    padding: scale(18),
    flex: 1,
    elevation: scale(10),
    marginHorizontal: scale(8),
  },
  buttonGradient: {
    borderRadius: moderateScale(8),
    marginBottom: scale(20),
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
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
  iconWrapper: {
    marginHorizontal: scale(10),
  },
  iconBackground: {
    borderWidth: 1.5,
    borderColor: '#800000',
    padding: scale(10),
    height: scale(50),
    width: scale(50),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
