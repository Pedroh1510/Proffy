import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';

import AppStack from './src/routes/AppStack';

import {
	Archivo_700Bold,
	Archivo_400Regular,
	useFonts,
} from '@expo-google-fonts/archivo';
import {
	Poppins_400Regular,
	Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

export default function App() {
	let [fontLoaded] = useFonts({
		Archivo_700Bold,
		Archivo_400Regular,
		Poppins_400Regular,
		Poppins_600SemiBold,
	});

	if (!fontLoaded) {
		return <AppLoading />;
	} else {
		return (
			<>
				<AppStack />
				<StatusBar style='light' />
			</>
		);
	}
}
