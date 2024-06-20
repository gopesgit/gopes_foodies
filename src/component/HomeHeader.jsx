import { StyleSheet, Text, View } from 'react-native'
import { Icon, withBadge } from 'react-native-elements'
import { colors, globalStyle, parameters } from '../global/styles'
export default function HomeHeader() {
    const BadgeIcon=withBadge(0)(Icon)
    return (
        <View style={[globalStyle.header,{justifyContent: 'space-between'}]}>
            <View style={{ justifyContent:'flex-start'}}>
                <Icon
                    name='menu'
                    size={30}
                    type="entypo"
                    color={colors.hedertext}
                />
            </View>
            <View style={{justifyContent:'center'}}>
                <Text style={globalStyle.headerText}>Foodies</Text>
            </View>
            <View style={{justifyContent:'flex-end',marginEnd:8}}>
                <BadgeIcon
                    name='shopping-cart'
                    size={30}
                    type="entypo"
                    color={colors.hedertext}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,

    }
})