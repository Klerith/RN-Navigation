import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { View, Text } from 'react-native';

import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';

// interface RouterParams {
//     id: number;
//     nombre: string
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};

export const PersonaScreen = ( { route, navigation }: Props ) => {

    // const params = route.params as RouterParams;
    const params = route.params;

    useEffect( () => {

        navigation.setOptions({
            title: params.nombre
        })

    },[])



    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>
                {
                    JSON.stringify( params, null, 3 )
                }

            </Text>
        </View>
    )
}
