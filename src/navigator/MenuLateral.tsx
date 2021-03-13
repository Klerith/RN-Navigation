import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';

import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();



export const MenuLateral = () => {
  
    const { width } = useWindowDimensions();

    return (
    <Drawer.Navigator
      drawerType={ width >= 768 ? 'permanent' : 'front' }
      drawerContent={ (props) => <MenuInterno { ...props } /> }
    >
      <Drawer.Screen name="Tabs" component={ Tabs } />
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
            style={{ 
              ...styles.menuBoton,
              flexDirection: 'row'
            }}
            onPress={ () => navigation.navigate('Tabs') }
          >
            <Icon name="compass-outline" size={ 23 } color="black" />
            <Text style={ styles.menuTexto }> Navegacion</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={{ 
              ...styles.menuBoton,
              flexDirection: 'row'
            }}
            onPress={ () => navigation.navigate('SettingsScreen') }
          >
            <Icon name="cog-outline" size={ 23 } color="black" />
            <Text style={ styles.menuTexto }> Ajustes</Text>
          </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  );
}