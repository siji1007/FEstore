import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AddProductScreen() {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('Pack');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ilagay ang produkto</Text>

      <Text style={styles.label}>Product name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter product name"
        value={productName}
        onChangeText={setProductName}
      />

    <Text style={styles.label}>Product Category</Text>
    <View style={styles.pickerWrapper}>
      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
        style={styles.picker}
        dropdownIconColor="#000" // This ensures the dropdown arrow is also visible
      >
        <Picker.Item label="Pack" value="Pack" />
        <Picker.Item label="Piece" value="Piece" />
        <Picker.Item label="Box" value="Box" />
      </Picker>
    </View>

      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <Text style={styles.label}>Quantity</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter quantity"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />

     <TouchableOpacity
      style={styles.button}
      onPress={() => {
        alert(
          `Product Name: ${productName}\nCategory: ${category}\nPrice: ${price}\nQuantity: ${quantity}`
        );
      }}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 10,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    marginBottom: 10,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#000',        // Make sure the text is visible (black)
    fontSize: 16,         // Optional: increase font size
  },
  button: {
    backgroundColor: '#800000',
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
