import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from 'react-native';


export default function TabOneScreen() {
  return (
    <View className="flex-1 w-[100%]">
      <Text className="text-red-500">Tab One</Text>
      <View  />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
