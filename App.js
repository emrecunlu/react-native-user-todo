import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider, useSelector } from 'react-redux'
import Login from './screens/Login'
import Register from './screens/Register'
import { userSelector } from './store/features/user'
import { store } from './store/store'

export default function App() {
	const Stack = createNativeStackNavigator()

	const [fontsLoaded] = useFonts({
		Inter: require('./assets/fonts/Inter-Regular.ttf'),
		'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
		'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
		'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
	})

	if (!fontsLoaded) return null

	return (
		<SafeAreaProvider>
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name="register"
							component={Register}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="login"
							component={Login}
							options={{ headerShown: false }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
		</SafeAreaProvider>
	)
}
