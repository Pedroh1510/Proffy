import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Login from "../pages/Access/Login";
import OkRegister from "../pages/Access/OkRegister";
import Register from "../pages/Access/Register";
import OkGiveClasses from "../pages/GiveClasses/OkGiveClasses";
import RegisterGiveClasses from "../pages/GiveClasses/RegisterGiveClasses";
import Landing from "../pages/Landing";
import Profile from "../pages/Profile";
import StudyTabs from "./StudyTabs";

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen name="OkRegister" component={OkRegister} />
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
