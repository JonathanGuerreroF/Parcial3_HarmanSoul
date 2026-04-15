import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

// Estos son los productos que se mostrarán en tu catálogo
const PRODUCTS = [
  {
    id: "1",
    name: "Moondrop Aria",
    price: 1500,
    image: require("../../assets/aria.jpg"),
    description: "IEMs icónicos con un perfil de sonido equilibrado y excelente detalle. Ideales para iniciar en el mundo del audio Hi-Fi.",
  },
  {
    id: "2",
    name: "Truthear x Crinacle Zero",
    price: 1100,
    image: require("../../assets/zero.jpg"),
    description: "Configuración de doble driver dinámico para una respuesta de bajos potente y limpia. Tuneado por el experto Crinacle.",
  },
  {
    id: "3",
    name: "FiiO KA11 DAC",
    price: 650,
    image: require("../../assets/k11.jpg"),
    description: "Dongle DAC compacto y potente. Mejora drásticamente la calidad de audio de tu smartphone o laptop.",
  },

  {
    id: "4",
    name: "Sennheiser hd 600",
    price: 2650,
    image: require("../../assets/600.jpg"),
    description: "Somos expertos en audio y amantes de la música que hemos estado luchando por la mejor experiencia de audio.",
  },
];

export default function ProductListScreen({ navigation }) {
  
  // Función para renderizar cada tarjeta de producto
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      // CRITICO: Enviamos el objeto completo bajo la clave 'product'
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
    >
      <Image 
  source={item.image} // Así directo, sin llaves extras ni "uri"
  style={styles.image} 
  resizeMode="contain"
/>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.tapText}>Toca para ver detalles</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Catálogo Harman Soul</Text>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#000",
    padding: 20,
    textAlign: "center",
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 15,
    marginBottom: 15,
    padding: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
    // Sombra para look premium
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: "#ddd",
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  price: {
    fontSize: 16,
    color: "#2ecc71",
    fontWeight: "600",
    marginTop: 4,
  },
  tapText: {
    fontSize: 12,
    color: "#999",
    marginTop: 8,
    fontStyle: "italic",
  },
});