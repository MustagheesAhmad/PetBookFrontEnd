import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

const DoctorSignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [licenseNo, setLicenseNo] = useState('');
  const [areaOfSpecialty, setAreaOfSpecialty] = useState('');
  const [experience, setExperience] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/signup', {
        name,
        email,
        password,
        userType: 'doctor',
        licenseNo,
        areaOfSpecialty,
        experience
      });

      console.log(response.data);
      navigation.navigate('DoctorInfo');
    } catch (error) {
      console.error('Signup Error:', error.response?.data || error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Image and Title View */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="License Number"
        value={licenseNo}
        onChangeText={setLicenseNo}
      />
      <TextInput
        style={styles.input}
        placeholder="Area of Specialty"
        value={areaOfSpecialty}
        onChangeText={setAreaOfSpecialty}
      />
      <TextInput
        style={styles.input}
        placeholder="Experience (Years)"
        value={experience}
        onChangeText={text => setExperience(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01ACE4'
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});

export default DoctorSignUp;
