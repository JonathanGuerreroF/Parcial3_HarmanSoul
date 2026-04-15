import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Paso 7
import { Ionicons } from "@expo/vector-icons"; // Paso 14

import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); // Paso 8

// Paso 9: Stack interno para la sección de Inicio
function HomeStack({ cart, setCart }) {
  // Base de datos que ya tenías
  const HARMAN_SOUL_DB = [
    { id: '1', name: "IEMs Planar", price: 299, image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=400", description: "Sonido planar puro." },
    { id: '2', name: "DAC Portable", price: 150, image: "https://images.unsplash.com/photo-1549497538-303791108f94?q=80&w=400", description: "Audio Hi-Res portátil." },
  ];

  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" options={{ title: "Inicio" }}>
        {(props) => <HomeScreen {...props} products={HARMAN_SOUL_DB} />}
      </Stack.Screen>
      <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: "Productos" }} />
      <Stack.Screen name="ProductDetail" options={{ title: "Detalle" }}>
        {(props) => <ProductDetailScreen {...props} cart={cart} setCart={setCart} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const [cart, setCart] = useState([]); // El carrito sigue siendo global

  return (
    <NavigationContainer>
      <Tab.Navigator
        // Paso 15: Configuración de iconos
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Inicio") iconName = "home";
            else if (route.name === "Carrito") iconName = "cart";
            else if (route.name === "Perfil") iconName = "person";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "gray",
        })}
      >
        {/* Pestaña Inicio con el Stack interno */}
        <Tab.Screen name="Inicio" options={{ headerShown: false }}>
          {() => <HomeStack cart={cart} setCart={setCart} />}
        </Tab.Screen>

        {/* Pestaña Carrito directa */}
        <Tab.Screen name="Carrito">
          {(props) => <CartScreen {...props} cart={cart} setCart={setCart} />}
        </Tab.Screen>

        {/* Pestaña Perfil directa */}
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}