import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native'
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {

    const { logout, authState: { isLoggedIn } } = useContext( AuthContext );

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>AlbumsScreen</Text>

            {
                isLoggedIn && (
                    <Button
                        title="Logout"
                        onPress={ logout }
                    />
                )
            }

        </View>
    )
}
