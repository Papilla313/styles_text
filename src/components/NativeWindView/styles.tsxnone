import { StyleSheet } from "react-native";

const unit = 8;
const darkerPrimaryColor =  '#2c6dd9';
const primaryColor = "#3B82F6"

const defaultFont = {
    fontSize: unit*2,
    fontFamily: "Arial"
}

const shadow = {
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: unit * 0.25 },
    shadowOpacity: 1,
    shadowRadius: unit * 0.5,
}

// Styles
export const styles = StyleSheet.create({
    // Navigation Bar
    navigationBar: {
        flexDirection: 'row',
        backgroundColor: primaryColor,
        padding: unit*1.5,
        // Elevated shadow for iOS and Android
        ...shadow,
        zIndex: 10
    },
    burgerMenu: {
        marginLeft: 'auto',
        position: 'relative',
    },
    burgerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: primaryColor,
        borderRadius: 8,
        padding: unit*1.5,
    },
    burgerButtonActive: {
        opacity: 0.7,
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    flipCardButtonActive: {
        backgroundColor: "#45a049"
    },
    burgerButtonText: {
        ...defaultFont,
        color: '#fff',
        marginRight: unit,
    },
    arrowIcon: {
        ...defaultFont,
        color: "#fff"
    },
    burgerMenuCollapse: {
        backgroundColor: darkerPrimaryColor,
        position: 'absolute',
        top: unit*6,
        right: 0,
        width: unit*30,
        maxHeight: 0,
        opacity: 0,
        overflow: 'hidden',
        borderRadius: unit*0.5,
        padding: unit*1.5,
    },
    navBarOptionButton: {
        backgroundColor: darkerPrimaryColor,
        padding: unit*1.5,
        borderRadius: unit*0.5,
    },
    navBarOptionText: {
        color: '#fff',
        fontWeight: 'bold',
        display: "flex",
        justifyContent: "center",
        ...defaultFont,
    },
    // Profile Section
    profileContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: "auto",
        marginVertical: unit * 3,
        padding: unit * 3,
        width: '80%',
        borderRadius: unit * 1.5,
        ...shadow,
        elevation: 3,
        backgroundColor: '#fff',
    },
    avatar: {
        maxWidth: 460,
        width: "100%",
        aspectRatio: 1,
        ...shadow,
        marginBottom: unit*2,
        borderRadius: "50%",
    },
    avatarContainer:{
        marginBottom: unit*3
    },
    avatarAnimated: {
        overflow: "hidden"
    },
    avatarImg: {
        width: "100%",
        aspectRatio: 1,
    },
    profileName: {
        ...defaultFont,
        fontSize: unit*3,
        fontWeight: "bold",
        color: primaryColor,
        marginBottom: unit*3
    },
    profileDescription: {
        ...defaultFont,
        fontSize: unit*2,
        color: '#333',
    },
    // Accordion Section
    accordion: {
        width: '80%',
        margin: 'auto',
        borderRadius: unit*1.5,
        backgroundColor: '#fff',
        ...shadow
    },
    accordionText: {
        ...defaultFont,
        fontSize: unit*2,
        fontWeight: "bold"
    },
    accordionHeaderButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: unit*1.5,
        backgroundColor: '#f9f9f9',
        borderRadius: unit*0.5,
    },
    sectionCollapse: {
        paddingVertical: unit*2,
        backgroundColor: '#fff',
        overflow: "hidden"
    },
    showCollapse: {
        opacity: 1,
    },
    // EditableSpan Component
    walletContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    creditCard: {
        ...shadow,
        position: "relative",
        width: unit*40,
        aspectRatio: 1.5,
        backgroundColor: '#9013fe',
        borderRadius: unit*1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    editableSpanContainer: {
        position: "absolute",
    },
    input: {
        ...defaultFont,
        fontSize: unit*2,
        borderWidth: unit * 0.25,
        borderRadius: unit*0.5,
        padding: unit*1.5,
        borderColor: '#fff',
        width: '100%',
        fontWeight: "bold",
        margin: 0,
        color: primaryColor
    },
    invalidInput: {
        color: 'red',
    },
    activeInput: {
        borderColor: primaryColor,
    },
    activeInputFilled: {
        color: "#fff",
    },
    inputNumber: { 
        top: "50%",
        left: "50%",
        maxWidth: "80%",
        width: "80%",
        transform: [
            {translateX: "-50%"},
            {translateY: "-70%"}
        ]
    }, 
    inputDate: {
        maxWidth: "40%",
        width: "40%",
        bottom: "10%",
        left: "10%"
    },
    inputSecurityNumber: {
        maxWidth: "40%",
        width: "40%",
        bottom: "10%",
        right: "10%",
        transform: [
            {rotateY: "180deg"},
        ]
    },
    flipCardButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: unit*2,
        paddingHorizontal: unit*3,
        borderRadius: unit*0.5,
        marginTop: unit*3,
        marginHorizontal: "auto"
    },
    flipCardButtonText: {
        ...defaultFont,
        color: '#fff',
        fontWeight: 'bold',
    },
    arrowIconCollapse: {
        color: "unset"
    }
});