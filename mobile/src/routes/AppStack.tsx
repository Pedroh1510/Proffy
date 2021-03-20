import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../pages/Landing";
import RegisterGiveClasses from "../pages/GiveClasses/RegisterGiveClasses";
import StudyTabs from "./StudyTabs";
import Onboarding from "../pages/Onboarding";
import Login from "../pages/Access/Login";
import OkGiveClasses from "../pages/GiveClasses/OkGiveClasses";
import Profile from "../pages/Profile";

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />
        {/* <Screen name="Onboarding" component={Onboarding} /> */}
        <Screen name="Landing" component={Landing} />
        <Screen name="Profile" component={Profile} />
        <Screen name="GiveClasses" component={RegisterGiveClasses} />
        <Screen name="OkGiveClasses" component={OkGiveClasses} />
        <Screen name="Study" component={StudyTabs} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
