import React, { ReactNode, useEffect, useState } from "react"
import { DefaultViewProps } from "../../Types"
import "./styles.css";
import { useAssets } from "expo-asset";

const SectionCollapse = ({ title, children }: { title: string, children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={["Accordion", isOpen ? "ShowCollapse" : "", title].join(" ")}>
            <button onClick={toggleCollapse} className="AccordionHeaderButton">
                <span>{title}</span>
                <div className="ArrowIcon" dangerouslySetInnerHTML={{ __html: "&#9664;" }}></div>
            </button>
            <div className="SectionCollapse">
                {children}
            </div>
        </div>

    );
};

const EditableSpan = ({ className = "", maxLength = 10 }: { className?: string, maxLength: number }) => {
    const [value, setValue] = useState<string>("")

    return (
        <div className={["EditableSpanContainer", className].join(" ")}>
            <input
                type="text"
                style={{ color: !(value.length === maxLength) ? "red" : "white" }}
                placeholder={"X".repeat(maxLength)}
                onChange={(e) => setValue(e.target.value)}
                maxLength={maxLength}
            />
        </div>
    )
}

export const VanillaView = ({ navBarOptions, navBarAction }: DefaultViewProps) => {
    const [assets,] = useAssets([require('../../../assets/images/avatar.jpeg')]);
    const [displayBurger, setDisplayBurger] = useState(false)
    const [flipCard, setFlipCard] = useState(false)

    const onOptionClick = (option: string) => {
        navBarAction?.(option)
        setDisplayBurger(false)
    }

    return (
        <div>
            {/* Nav Menu */}
            <div className="NavigationBar">
                <div className={["BurgerMenu", displayBurger ? "ShowCollapse" : ""].join(" ")}>
                    <button className={"BurgerButton"} onClick={() => setDisplayBurger(!displayBurger)}>
                        Menu
                        <div className="ArrowIcon" dangerouslySetInnerHTML={{ __html: "&#9664;" }}></div>
                    </button>
                    <div className="BurgerMenuCollapse">
                        {
                            navBarOptions?.map((option, index) => {
                                return (
                                    <button className="NavBarOptionButton" key={index} onClick={() => onOptionClick(option)}>
                                        <span>{option}</span>
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* Profile */}
            <div className="ProfileContainer">
                <img className="Avatar" src={assets?.[0].uri||""} alt="Avatar" />
                <h3>John Dog</h3>
                <span>
                    My dreams wallet.
                </span>
            </div>

            {/* Wallet */}
            <SectionCollapse title="Wallet">
                <div className={["WalletContainer", flipCard ? "Flip" : ""].join(" ")}>
                    <div className="CreditCard">
                        <EditableSpan className="Number" maxLength={16} />
                        <EditableSpan className="Date" maxLength={4} />
                        <EditableSpan className="SecurityNumber" maxLength={3} />
                    </div>
                </div>
                <div className="FlipCardButton">
                    <button onClick={() => setFlipCard(!flipCard)}>Flip</button>
                </div>
            </SectionCollapse>
        </div>
    )
}