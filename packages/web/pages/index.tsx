import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    color: 'white',
  },
});

export default (props: any) => (
  <View style={styles.container} {...props}>
    <Text style={styles.text}>Silk</Text>
    <Text style={styles.text}>Built with Next + Apollo + RNW</Text>
  </View>
);
