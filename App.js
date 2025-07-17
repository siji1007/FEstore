import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './pages/homeScreen';
import AddProductScreen from './pages/AddProduct';
import ProductListScreen from './pages/ProductList';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Add Product') iconName = 'add-circle';
            else if (route.name === 'Product List') iconName = 'list';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add Product" component={AddProductScreen} />
        <Tab.Screen name="Product List" component={ProductListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
