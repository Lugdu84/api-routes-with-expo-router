import { Stack } from 'expo-router';

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{ title: 'Api routes with Expo Router' }}
			/>
		</Stack>
	);
}
