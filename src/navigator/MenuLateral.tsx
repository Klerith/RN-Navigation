import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';

import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';


const Drawer = createDrawerNavigator();



export const MenuLateral = () => {
  
    const { width } = useWindowDimensions();

    return (
    <Drawer.Navigator
      drawerType={ width >= 768 ? 'permanent' : 'front' }
      drawerContent={ (props) => <MenuInterno { ...props } /> }
    >
      <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {

  return (
    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View style={ styles.avatarContainer }>
        <Image 
          source={{
            uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif'
          }}
          style={ styles.avatar }
        />
      </View>


      {/* Opciones de menú */}
      <View style={ styles.menuContainer }>

          <TouchableOpacity 
            style={ styles.menuBoton }
            onPress={ () => navigation.navigate('StackNavigator') }
          >
            <Text style={ styles.menuTexto }>Navegacion</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={ styles.menuBoton }
            onPress={ () => navigation.navigate('SettingsScreen') }
          >
            <Text style={ styles.menuTexto }>Ajustes</Text>
          </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  );
}