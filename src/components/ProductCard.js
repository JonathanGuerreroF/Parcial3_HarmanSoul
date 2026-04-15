import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductCard({ name, price, image, navigation }) {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => 
        navigation.navigate("ProductDetail", {
          name: name,
          price: price,
          image: image,
        })
      }
    >
      {}
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: image }} 
          style={styles.image} 
          resizeMode="contain" 
        />
      </View>
      
      {}
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    overflow: "hidden", // Mantiene los bordes redondeados
    marginBottom: 16,
    elevation: 4,               // Sombra para Android
    shadowColor: "#000",        // Configuración de sombra para iOS
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  imageContainer: {
    width: "100%",
    height: 180, // Mantenemos la altura fija para que todas las tarjetas sean iguales
    backgroundColor: "#f9f9f9", // Un fondo gris muy suave por si la imagen no ocupa todo el ancho
    justifyContent: "center", // Centra la imagen verticalmente si es más baja
    alignItems: "center",     // Centra la imagen horizontalmente si es más estrecha
  },
  image: {
    width: "100%",  // La imagen ocupará todo el ancho disponible
    height: "100%", // La imagen ocupará todo el alto disponible
    // resizeMode="contain" (ya definido en el componente) escala la imagen
    // para que encaje *completamente* dentro de las dimensiones del contenedor (100% x 100%),
    // manteniendo la relación de aspecto original.
  },
  infoContainer: {
    padding: 14,
    backgroundColor: "#fff", // Fondo blanco para la zona de texto
  },
  productName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111",
  },
  productPrice: {
    fontSize: 15,
    color: "#666",
    marginTop: 6,
  },
});