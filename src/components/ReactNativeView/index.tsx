import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, Animated, Pressable, StyleProp, ViewStyle, Easing, Platform } from 'react-native';
import { styles } from './styles';

// EditableSpan Component
const EditableSpan = ({ maxLength, className, extraStyles }: { maxLength: number, className: string, extraStyles?:StyleProp<ViewStyle> }) => {
    const [value, setValue] = useState<string>("");
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [extraStyle, setExtraStyle] = useState<any>({});
    useEffect(()=>{
        if (className === "Number") setExtraStyle(styles.inputNumber)
        if (className === "Date") setExtraStyle(styles.inputDate)
        if (className === "SecurityNumber") setExtraStyle(styles.inputSecurityNumber)
        
    }, [className])
    return (
        <Animated.View style={[styles.editableSpanContainer, extraStyle, extraStyles]}>
            <TextInput
                style={[
                    styles.input, 
                    isFocused && styles.activeInput , 
                    !!value.length && styles.activeInputFilled,
                    (!!value.length && value.length !== maxLength) && styles.invalidInput,
                    {
                        textAlign: className === "Number" ? "center" : "left"
                    },
                    Platform.OS === 'web' && ({ outlineStyle: 'none' } as any)
                ]}
                placeholder={"X".repeat(maxLength)}
                onChangeText={(text) => setValue(text)}
                onFocus={() => setIsFocused(true)} // Set focus state
                onBlur={() => setIsFocused(false)} // Reset focus state
                maxLength={maxLength}
                keyboardType="numeric"
            />
        </Animated.View>
    );
};

// SectionCollapse Component (Accordion-like)
const SectionCollapse = ({ title, children, setIsActive, isActive }: { title: string, children: React.ReactNode, isActive:string, setIsActive:(value:string)=>void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [growAnim] = useState(new Animated.Value(0));
    const [rotateAnim] = useState(new Animated.Value(0));
    const [paddingAnim] = useState(new Animated.Value(0));

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
        Animated.timing(growAnim, {
            toValue: !isOpen ? 350 : 0,
            duration: 250,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease)
        }).start();
        Animated.timing(paddingAnim, {
            toValue: !isOpen ? 16 : 0,
            duration: 250,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease)
        }).start();
        Animated.timing(rotateAnim, {
            toValue: isOpen ? 0 : 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }

    const rotateInterpolate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-90deg'],
    });

    return (
        <View style={[styles.accordion, isOpen && styles.showCollapse]}>
            <Pressable 
                onPress={toggleCollapse} 
                style={[styles.accordionHeaderButton, (isActive=="collapse"&&styles.burgerButtonActive)]}
                onPressIn={()=>setIsActive("collapse")}
                onPressOut={()=>setIsActive("")}    
            >
                <Text style={styles.accordionText}>{title}</Text>
                <Animated.Text style={[styles.arrowIcon, styles.arrowIconCollapse, {transform:[{rotateZ: rotateInterpolate}]}]}>◀</Animated.Text>
            </Pressable>
            <Animated.View 
                style={[styles.sectionCollapse, {maxHeight: growAnim, padding: paddingAnim}]}
            >
                {children}
            </Animated.View>
        </View>
    );
};

// ReactNativeView Component (Main View)
const ReactNativeView = ({ navBarOptions, navBarAction }: { navBarOptions: string[], navBarAction?: (option: string) => void }) => {
    const [displayBurger, setDisplayBurger] = useState(false);
    const [flipCard, setFlipCard] = useState(false);
    const [slideAnim] = useState(new Animated.Value(0));
    const [flipAnim] = useState(new Animated.Value(0));
    const [heightAnim] = useState(new Animated.Value(0));
    const [rotateAnim] = useState(new Animated.Value(0));
    const [scaleAnim] = useState(new Animated.Value(1));
    const [opacityAnim] = useState(new Animated.ValueXY({x: 0, y: 1}));
    const [isActive, setIsActive] = useState("");
    const [isAvatarScaled, setIsAvatarScaled] = useState(false);
    const [isOptionActive, setOptionActive] = useState(0);

    const onOptionClick = (option: string) => {
        navBarAction?.(option);
        setDisplayBurger(false);
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
        toggleHeight()
    };

    const toggleBurgerMenu = () => {
        const validator = !displayBurger;
        setDisplayBurger(validator);
        Animated.timing(slideAnim, {
            toValue: !validator ? 0 : 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setDisplayBurger(validator);
        Animated.timing(rotateAnim, {
            toValue: !validator ? 0 : 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
        toggleHeight()
    };

    const toggleHeight = () => {
        Animated.timing(heightAnim, {
          toValue: displayBurger ? 0 : 500,
          duration: 300, 
          useNativeDriver: false, 
        }).start();
      };

    const toggleScale = () => {
        console.log(isAvatarScaled)
        setIsAvatarScaled(!isAvatarScaled)
        Animated.timing(scaleAnim, {
          toValue: !isAvatarScaled ? 1.05 : 1,
          duration: 200, 
          useNativeDriver: false, 
        }).start();
      };

    const flipCardAnimation = () => {
        Animated.timing(flipAnim, {
            toValue: flipCard ? 0 : 1,
            duration: 500,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease)
        }).start();
        setFlipCard(!flipCard);
        Animated.timing(opacityAnim, {
            toValue: flipCard ? { x: 0, y: 1 } : { x: 1, y: 0 },
            duration: 500,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease)
        }).start();
        setFlipCard(!flipCard);
    };


    const flipCardRotation = flipAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    const rotateInterpolate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-90deg'],
    });

    return (
        <View>
            {/* Navigation Bar */}
            <View style={styles.navigationBar}>
                <View style={styles.burgerMenu}>
                    <Pressable 
                        style={{...styles.burgerButton, ...(isActive=="burger"&&styles.burgerButtonActive)}} 
                        onPress={toggleBurgerMenu} 
                        onPressIn={()=>setIsActive("burger")}
                        onPressOut={()=>setIsActive("")}
                    >
                        <Text style={styles.burgerButtonText}>Menu</Text>
                        <Animated.Text style={[styles.arrowIcon, {transform:[{rotateZ: rotateInterpolate}]}]}>◀</Animated.Text>
                    </Pressable>
                    <Animated.View
                        style={[
                            styles.burgerMenuCollapse,
                            {
                                opacity: slideAnim,
                                maxHeight: heightAnim
                            },
                        ]}
                    >
                        {navBarOptions.map((option, index) => (
                            <Pressable 
                                key={index} 
                                style={{...styles.navBarOptionButton, ...(isOptionActive===(index+1)&&styles.burgerButtonActive)}} 
                                onPress={() => onOptionClick(option)}
                                onPressIn={()=>setOptionActive(index+1)}
                                onPressOut={()=>setOptionActive(0)}
                            >
                                <Text style={styles.navBarOptionText}>{option}</Text>
                            </Pressable>
                        ))}
                    </Animated.View>
                </View>
            </View>

            {/* Profile Section */}
            <View style={styles.profileContainer}>
                <Pressable 
                    style={[styles.avatar, styles.avatarContainer]}
                    onPress={() => toggleScale()}
                >
                    <Animated.View style={[styles.avatar, styles.avatarAnimated, { transform: [{ scale: scaleAnim }] }]} >
                        <Image style={styles.avatarImg} source={{ uri: '/img/avatar.jpeg' }} />
                    </Animated.View>
                </Pressable>
                <Text style={styles.profileName}>John Dog</Text>
                <Text style={styles.profileDescription}>My dreams wallet.</Text>
            </View>

            {/* Wallet Section */}
            <SectionCollapse title="Wallet" isActive={isActive} setIsActive={setIsActive}>
                <Animated.View
                    style={[styles.walletContainer, { transform: [{ rotateY: flipCardRotation }] }]}>
                    <View style={styles.creditCard}>
                        <EditableSpan 
                            className="Number" 
                            maxLength={16} 
                            extraStyles={{
                                opacity: opacityAnim.y
                            }}
                        />
                        <EditableSpan 
                            className="Date" 
                            maxLength={4} 
                            extraStyles={{
                                opacity: opacityAnim.y
                            }}
                        />
                        <EditableSpan 
                            className="SecurityNumber" 
                            maxLength={3} 
                            extraStyles={{
                                opacity: opacityAnim.x
                            }}
                        />
                    </View>
                </Animated.View>
                <Pressable 
                    onPress={flipCardAnimation} 
                    style={{...styles.flipCardButton, ...(isActive=="flip"&&{...styles.burgerButtonActive, ...styles.flipCardButtonActive})}}
                    onPressIn={()=>setIsActive("flip")}
                    onPressOut={()=>setIsActive("")}
                >
                    <Text style={styles.flipCardButtonText}>Flip</Text>
                </Pressable>
            </SectionCollapse>
        </View>
    );
};


export default ReactNativeView;
