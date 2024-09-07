import { View, Pressable, Text } from 'react-native';

export default function HomeScreen() {
	const fetchPostHello = async () => {
		const response = await fetch('/hello', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name: 'React Native with Expo Router' }),
		});
		const data = await response.json();
		console.log(data);
	};
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Pressable onPress={fetchPostHello}>
				<Text>Fetch Post Hello</Text>
			</Pressable>
		</View>
	);
}
