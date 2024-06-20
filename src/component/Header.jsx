import { StyleSheet, Text, View } from 'react-native'
import { colors, globalStyle, parameters } from '../global/styles'
import { Icon } from 'react-native-elements'

export default function Header({ title,type,navigation }) {
  //console.log(navigation);
  return (
    <View style={globalStyle.header}>
      <View style={styles.headerIcon}>
        <Icon
          name={type}
          size={28}
          color={colors.hedertext}
          type="entypo"
          onPress={() =>navigation.goBack()}
        />
      </View>
      <View>
        <Text style={[globalStyle.headerText,{marginLeft:30}]}>{title}</Text>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  
  headerIcon:{
    marginLeft:20,
  }
})