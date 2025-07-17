import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProductListScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Product List goes here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
