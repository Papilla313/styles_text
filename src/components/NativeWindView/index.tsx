import React, { useState } from 'react';
import { View, Text, TextInput, Image, Animated, Pressable } from 'react-native';

const EditableSpan = ({ maxLength, name, hide }: { maxLength: number, name: string, hide?: boolean }) => {
    const [value, setValue] = useState<string>("");
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <View className={`absolute transition-all ${
            (()=>{
                if (name === "Number") return ("top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[70%]");
                if (name === "Date") return ("max-w-2/5 w-2/5 bottom-3 left-3");
                if (name === "SecurityNumber") return ("max-w-2/5 w-2/5 top-3 right-3 rotate-180");
                return ""
            })()
        } ${ hide ? "opacity-0":"opacity-100"}`}>
            <TextInput
                className={`text-lg font-bold border border-white rounded px-3 py-2 text-blue-500 placeholder-transparent ${
                    isFocused ? "border-blue-500" : ""
                } ${value.length ? "text-white" : ""} ${
                    value.length && value.length !== maxLength ? "text-red-500" : ""
                }`}
                placeholder={"X".repeat(maxLength)}
                onChangeText={(text) => setValue(text)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                maxLength={maxLength}
                keyboardType="numeric"
            />
        </View>
    );
};

const SectionCollapse = ({ title, children, setIsActive, isActive }: { title: string, children: React.ReactNode, isActive: string, setIsActive: (value: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
 
    return (
        <View className={`flex-col mx-auto xy-8 w-4/5 bg-white rounded-lg shadow-md `}>
            <Pressable
                onPress={()=>setIsOpen(!isOpen)}
                className={`flex-row justify-between p-3 bg-gray-100 rounded ${
                    isActive === "collapse" ? "opacity-70" : ""
                }`}
                onPressIn={() => setIsActive("collapse")}
                onPressOut={() => setIsActive("")}
            >
                <Text className="text-lg font-bold">{title}</Text>
                <Text className={"text-lg transition-transform " + (isOpen && "-rotate-90")}>
                    ◀
                </Text>
            </Pressable>
            <Animated.View
                className={`overflow-hidden transition-all px-8 ${isOpen ? "opacity-100 max-h-[400px] py-8" : "opacity-0 max-h-[0px] py-0"}`}
            >
                {children}
            </Animated.View>
        </View>
    );
};

const ReactNativeView = ({ navBarOptions, navBarAction }: { navBarOptions: string[], navBarAction?: (option: string) => void }) => {
    // const [assets] = useAssets([require('../../../assets/images/avatar.jpeg')]);
    const [displayBurger, setDisplayBurger] = useState(false);
    const [flipCard, setFlipCard] = useState(false);
    const [isActive, setIsActive] = useState("");
    const [isAvatarScaled, setIsAvatarScaled] = useState(false);
    const [isOptionActive, setOptionActive] = useState(0);

    const onOptionClick = (option: string) => {
        navBarAction?.(option);
        setDisplayBurger(false);
        
    };

    const toggleBurgerMenu = () => {
        const validator = !displayBurger;
        setDisplayBurger(validator);
        toggleHeight();
    };

    const toggleHeight = () => {
       
    };

    const toggleScale = () => {
        setIsAvatarScaled(!isAvatarScaled);
    };

    const flipCardAnimation = () => {
        setFlipCard(!flipCard);
    };

    // const flipCardRotation = flipAnim.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: ["0deg", "180deg"],
    // });

    // const rotateInterpolate = rotateAnim.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: ["0deg", "-90deg"],
    // });

    return (
        <View>
            <View className="flex-row bg-blue-500 p-3 shadow-md z-10">
                <View className="ml-auto relative">
                    <Pressable
                        className={`flex-row items-center bg-blue-500 rounded px-3 py-2 ${
                            isActive === "burger" ? "opacity-70" : ""
                        }`}
                        onPress={toggleBurgerMenu}
                        onPressIn={() => setIsActive("burger")}
                        onPressOut={() => setIsActive("")}
                    >
                        <Text className="text-lg text-white mr-2">Menu</Text>
                        <Text className={"text-lg text-white transition-transform " + (displayBurger && "-rotate-90")}>
                            ◀
                        </Text>
                    </Pressable>
                    <View
                        className={"absolute top-full overflow-hidden right-0 bg-blue-700 rounded p-3 transition-all h-fit w-64 max-h-96 origin-top " + (displayBurger ? "opacity-100 max-h-[200px]" : "opacity-0 max-h-[0px]")}
                    >
                        {navBarOptions.map((option, index) => (
                            <Pressable
                                key={index}
                                className={`bg-blue-700 rounded px-3 py-2 ${
                                    isOptionActive === index + 1 ? "opacity-70 bg-blue-800" : ""
                                }`}
                                onPress={() => onOptionClick(option)}
                                onPressIn={() => setOptionActive(index + 1)}
                                onPressOut={() => setOptionActive(0)}
                            >
                                <Text className="text-lg font-bold text-white">{option}</Text>
                            </Pressable>
                        ))}
                    </View>
                </View>
            </View>
            <View className="flex-col items-center mx-auto my-8 p-8 w-4/5 rounded-lg shadow-md bg-white">
                <Pressable
                    className="rounded-full shadow-md mb-8"
                    onPress={() => toggleScale()}
                >
                    <View
                        className={"w-[200px] h-[200px] transition-all " + (isAvatarScaled ? "scale-110" : "scale-100")}
                    >
                        <Image 
                          className="rounded-full" 
                          style={{ width: "100%", height: "100%" }} 
                          source={require('../../../assets/images/avatar.jpeg')} 
                        />
                    </View>
                </Pressable>
                <Text className={`text-2xl text-blue-500 font-bold mb-[24px]`} >John Dog</Text>
                <Text className={`text-[16px] text-[#333]`}>My dreams wallet.</Text>
            </View>
            
            <SectionCollapse title="Wallet" isActive={isActive} setIsActive={setIsActive}>
                <View
                    className={`items-center justify-center transition-all ${flipCard ? "rotate-180" : "rotate-0"}`}>
                    <View className={`relative w-80 aspect-video bg-purple-600 rounded-3xl shadow-md flex justify-center items-center`}>
                        <EditableSpan 
                            name="Number" 
                            maxLength={16} 
                            hide={flipCard}
                        />
                        <EditableSpan 
                            name="Date" 
                            maxLength={4} 
                            hide={flipCard}
                        />
                        <EditableSpan 
                            name="SecurityNumber" 
                            maxLength={3} 
                            hide={!flipCard}
                        />
                    </View>
                </View>
                <Pressable 
                    onPress={flipCardAnimation} 
                    className={`bg-green-500 py-4 px-12 rounded mt-12 mx-auto bg-green-600 bg-black/10 ${
                        isActive === "flip" ? "opacity-70" : ""
                    }`}
                    onPressIn={()=>setIsActive("flip")}
                    onPressOut={()=>setIsActive("")}
                >
                    <Text className="text-white font-bold text-lg">Flip</Text>
                </Pressable>
            </SectionCollapse>
        </View>
    );
};

export default ReactNativeView