import React, { useEffect, useMemo, useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import { View } from "react-native";
import { VanillaView } from "../VanillaView";
import ReactNativeView from "../ReactNativeView";
import NativeWindView from "../NativeWindView";

export const Home = () => {
    const location = useLocation();
    const [currentViewName, setCurrentViewName] = useState<string | null>(null);
    const navigate = useNavigate();

    const views: any = useMemo(() => {
        return {
            default: VanillaView,
            ReactNativeView: ReactNativeView,
            NativeWindView: NativeWindView,
        }
    }, [])

    const currentViewComponent = useMemo(() => {
        return views[currentViewName || ""] || views["default"]

    }, [currentViewName, views])

    const setQueryParam = (newView: string) => {
        const updatedParams = new URLSearchParams(location.search);
        updatedParams.set('view', newView);
        setCurrentViewName(newView || 'default')
        
        navigate({
          pathname: location.pathname,  // Keep the current path
          search: updatedParams.toString(),  // Update query string
        });
      };

    useEffect(() => {
        // Parse query parameters
        const params = new URLSearchParams(location.search);
        const currentView = params.get('view'); // Assume ?view=someView
        console.log(currentView)
        setCurrentViewName(currentView || 'default'); // Fallback to 'default'
    }, [location.search]);

    return (
        <View>
            {!!currentViewComponent && React.createElement(currentViewComponent, { navBarAction: setQueryParam, navBarOptions: Object.keys(views) })}
        </View>
    )
}