import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";

export default function ProductDetailScreen({ route, navigation, cart, setCart }) {
  // Verificamos si vienen los parámetros para evitar que la app truene
  if (!route.params || !route.params.product) {
    return (
      <View style={styles.center}><Text>Cargando producto...</Text></View>
    );
  }

  // Extraemos el objeto product que enviamos desde la lista
  const { product } = route.params;

  const handleAddToCart = () => {
    setCart([...cart, product]);
    Alert.alert("Harman Soul", `${product.name} añadido al carrito.`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imgContainer}>
        {/* Usamos product.image y product.name */}
        <Image 
  source={product.image} // Directo desde el objeto que recibes
  style={styles.mainImage} 
  resizeMode="contain" 
/>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>
          {product.description || "Sin descripción disponible."}
        </Text>

        <TouchableOpacity style={styles.buyButton} onPress={handleAddToCart}>
          <Text style={styles.buyText}>Añadir al Carrito</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imgContainer: { backgroundColor: "#f9f9f9", height: 350, padding: 20 },
  mainImage: { width: "100%", height: "100%" },
  content: { padding: 25, marginTop: -30, borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: "#fff" },
  name: { fontSize: 26, fontWeight: "900", color: "#1a1a1a" },
  price: { fontSize: 22, color: "#2ecc71", fontWeight: "700", marginVertical: 10 },
  description: { fontSize: 16, color: "#666", lineHeight: 24, marginBottom: 30 },
  buyButton: { backgroundColor: "#000", padding: 18, borderRadius: 15, alignItems: "center" },
  buyText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});