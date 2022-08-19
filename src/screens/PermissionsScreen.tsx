import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BlackButton } from '../components/BlackButton';
import { PermissionsContext } from '../context/PermissionsContext';

export const PermissionsScreen = () => {

  const { permissions, askLocationPermission } = useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Es necesario usar el GPS para usar esta aplicación</Text>
      <BlackButton
        title='Permiso'
        onPress={askLocationPermission}
      />
      <Text style={{ color: 'black', marginTop: 20 }}>
        {JSON.stringify(permissions, null, 5)}
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    width: 200,
  },

});