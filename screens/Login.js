import { Formik } from 'formik'
import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { signInValidationSchema } from '../utils/validations/signValidation'

function Login({ navigation }) {
	const submitHandle = (values, { resetForm }) => {
		console.log(values)

		resetForm()
	}

	return (
		<SafeAreaView className="p-10 h-full bg-white flex-col justify-between">
			<View>
				<View className="flex-col gap-y-2">
					<Text className="font-bold text-2xl text-gray-900">Login In</Text>
					<Text className="text-sm text-gray-600">
						Login with your data that you entered during your registration
					</Text>
				</View>
				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					onSubmit={submitHandle}
					validationSchema={signInValidationSchema}
				>
					{({
						handleChange,
						handleBlur,
						handleSubmit,
						values,
						errors,
						touched,
					}) => (
						<View className="flex-col gap-y-3 pt-8">
							<View className="flex-col gap-y-2">
								<Text className="font-inter-semibold text-gray-900 text-md">
									Email Addres
								</Text>
								<TextInput
									name="email"
									onChangeText={handleChange('email')}
									value={values.email}
									placeholderTextColor="#000"
									className="bg-gray-200 rounded-md h-12 px-5 text-gray-900 placeholder:text-gray-900 w-full"
									placeholder="local@gmail.com"
								/>
								{errors.email && touched.email && (
									<Text className="pt-1 pl-3 text-[12px] font-semibold text-rose-600">
										{errors.email}
									</Text>
								)}
							</View>
							<View className="flex-col gap-y-2">
								<Text className="font-inter-semibold text-gray-900 text-md">
									Password
								</Text>
								<TextInput
									name="password"
									onChangeText={handleChange('password')}
									value={values.password}
									secureTextEntry={true}
									placeholderTextColor="#000"
									className="bg-gray-200 rounded-md h-12 px-5 text-gray-900 placeholder:text-gray-900 w-full"
									placeholder="*****"
								/>
								{errors.password && touched.password && (
									<Text className="pt-1 pl-3 text-[12px] font-semibold text-rose-600">
										{errors.password}
									</Text>
								)}
							</View>
							<View className="pt-5">
								<TouchableOpacity
									onPress={handleSubmit}
									activeOpacity={0.8}
									className="bg-blue-800 disabled:bg-blue-300 rounded-xl"
								>
									<Text className="text-white font-inter-semibold py-4 text-center">
										Login In
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					)}
				</Formik>
			</View>
			<Text className="text-gray-500 text-center">
				Don't have an account?{' '}
				<Text onPress={() => navigation.push('register')} className="text-blue-500 underline font-semibold">Sign Up</Text>
			</Text>
		</SafeAreaView>
	)
}

export default Login
