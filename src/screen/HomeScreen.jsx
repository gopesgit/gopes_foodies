import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, globalStyle } from '../global/styles'
import HomeHeader from '../component/HomeHeader'
import { useState } from 'react'
import { Icon } from 'react-native-elements'
import { foodmenu } from '../global/data'

export default function HomeScreen() {
  const [delivery, setDelevery] = useState(true)
  const [pickup, setPickup] = useState(true)
  return (
    <View style={globalStyle.homeContainer}>
      <HomeHeader />

      <ScrollView
        stickyHeaderIndices={[0]}
      >

        <View>
          <View style={globalStyle.deleveryAndPickHolder}>
            <TouchableOpacity
              onPress={() => setDelevery(true)}
            >
              <View style={delivery ? globalStyle.activeBtn : globalStyle.deactiveBtn}>
                <Text style={globalStyle.buttonTextSmall}>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setDelevery(false)}
            >
              <View style={!delivery ? globalStyle.activeBtn : globalStyle.deactiveBtn}>
                <Text style={globalStyle.buttonTextSmall}>Pickup</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 3 }}>
          <View style={globalStyle.locationWraper}>
            <View>
              <Icon
                type='material-community'
                name='map-marker'
                size={28}
                color={colors.grey1}
                onPress={() => { }}
              />
            </View>
            <View>
              <Text style={{ fontSize: 18 }}>Some Location</Text>
            </View>
            <View style={globalStyle.locationWraperInner}>
              <View>
                <Icon
                  type='material-community'
                  name='clock'
                  size={28}
                  color={colors.grey1}
                  onPress={() => { }}
                />
              </View>
              <View>
                <Text>Now</Text>
              </View>
            </View>

          </View>
          <View style={globalStyle.locationWraper1}>
            <Icon
              type='material-community'
              name='tune'
              size={28}
              color={colors.grey1}
              onPress={() => { }}
            />
          </View>
        </View>
        <View>
          <Text style={[globalStyle.titlewithbackground]}>Categories</Text>
        </View>
        <View>
          {/* {foodmenu.map((item)=>(
            <View>
              <Text>{item.name}</Text>
            </View>
          )
          
          )} */}
          <FlatList
            data={foodmenu}
            keyExtractor={(item) => item.id}
            horizontal={true}
            renderItem={({ item, index }) => (

              <TouchableOpacity
                key={index}
              >     
              <Image source={{ uri: item.image }} style={{ width: 40, height: 40 }} />
                <Text>{item.name}</Text>

              </TouchableOpacity>

            )}
          />
        </View>
        <View>
          <Text style={[globalStyle.titlewithbackground]}>Free Delivery Now</Text>
        </View>

      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({


})