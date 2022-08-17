import React, { useContext } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { PermissionsContext } from '../context/PermissionsContext';

export const PermissionsScreen = () => {

  const { permissions, askLocationPermission } = useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>PermissionsScreen</Text>
      <Button
        title='Permiso'
        onPress={askLocationPermission}
      />
      <Text style={{ color: 'black' }}>
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
  }

});