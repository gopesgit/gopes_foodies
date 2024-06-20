import { StyleSheet } from "react-native"

export const colors = {
    buttons: "#ff8c52",
    grey1: "#43484d",
    grey2: "#5e6977",
    grey3: "#86939e",
    grey4: "#bdc6cf",
    grey5: "#e1e8ee",
    CardComment: "#86939e",
    cardbackground: "white",
    hedertext: "#EAF0F1",
    borderI: '#86939e',
}
export const parameters = {
    headerHeight: 40,
    titlefont: 25,
    titlefont1: 20,
    titlefontB: 30,
    subtitle: 15,
    borderR1: 12,
}

export const globalStyle = StyleSheet.create({
    orangeBTN: {
        marginHorizontal: 20,
        borderRadius: parameters.borderR1,
        marginBottom: 15,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.buttons,
    },
    WhiteBTN: {
        marginHorizontal: 20,
        borderRadius: parameters.borderR1,
        borderWidth: 1,
        borderColor: colors.borderI,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.cardbackground,
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    btnTextB: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    btnTextO: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.buttons,
    },
    centeritem: {
        alignItems: 'center',
    },
    paddingH12: {
        paddingHorizontal: 12,
    },
    textInputO: {
        borderWidth: 1,
        borderColor: colors.borderI,
        marginHorizontal: 20,
        borderRadius: parameters.borderR1,
        marginBottom: 15,
        alignContent: 'center',
        alignItems: 'center',
    },
    textInputT: {
        borderWidth: 1,
        borderColor: colors.borderI,
        marginHorizontal: 20,
        borderRadius: parameters.borderR1,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    hedertextBlack: {
        fontSize: parameters.titlefont,
        color: colors.grey1,
        fontWeight: 'bold',
    },
    mt25: {
        marginTop: 25,
    },
    socialicon: {
        borderRadius: parameters.borderR1,
        marginHorizontal: 20,
        marginBottom: 15,
    },
    titleB: {
        fontSize: parameters.titlefontB,
        color: colors.buttons,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    slider1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#0000ff",
        borderRadius: parameters.borderR1,
    },
    slider2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00ff00",
        borderRadius: parameters.borderR1,
    },
    slider3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ff0000",
        borderRadius: parameters.borderR1,
    },
    welcomeScreenHeader: {
        flex: 2,
        justifyContent: 'flex-start',
    },
    welcomeScreenSlider: {
        flex: 4,
        margin: 8,
        alignItems: 'center',
    },
    welcomeScreenFooter: {
        flex: 3,
        justifyContent: 'flex-end',
        marginBottom: 8
    },
    slideImage: {
        height: "100%",
        width: "100%",
        objectFit: 'cover',
        borderRadius: 12
    },
    //homeScreen
    homeContainer: {
        flex: 1,
        // justifyContent:'center',
        // alignItems:'center'
    },
    headerText: {
        color: colors.hedertext,
        fontSize: 22,
        fontWeight: 'bold',

    },
    header: {
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        paddingHorizontal:8,
        paddingVertical:3, 
       
    },
    activeBtn:{
        paddingHorizontal:25,
        borderRadius:15,
        paddingVertical:5,
        backgroundColor:colors.buttons
      },
      deactiveBtn:{
        paddingHorizontal:25,
        borderRadius:15,
        paddingVertical:5,
        backgroundColor:colors.grey4,
      },
      buttonTextSmall:{
        fontSize:16
      },
      deleveryAndPickHolder:{
        marginTop:12,
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingHorizontal:40
      },
      locationWraper:{
        marginTop:12,
        flexDirection:'row',
        justifyContent:'space-between',
        gap:25,
        backgroundColor:colors.grey5,
        paddingVertical:3,
        borderRadius:15,
        marginHorizontal:12,
        paddingHorizontal:20
      },
      locationWraper1:{
        marginTop:12,
        paddingVertical:3,
        borderRadius:15,
        marginHorizontal:12
      },
      locationWraperInner:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:colors.cardbackground,
        alignItems:'center',
        paddingHorizontal:15,
        borderRadius:15,
    },
    titlewithbackground: {
        fontSize: parameters.titlefont1,
        color: colors.grey1,
        fontWeight: 'bold',
        textAlign:'center',
        backgroundColor:colors.grey5,
        paddingVertical:3,
        marginTop:12,        
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 3,
      },


})