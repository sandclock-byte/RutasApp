import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

export const LoadingScreen = () => {
  return (
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
      }}>
        <ActivityIndicator size={50} color='black' />
      </View>
  )
}


const styles = StyleSheet.create({

});