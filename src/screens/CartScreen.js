import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Para el icono de eliminar

export default function CartScreen({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // MEJORA OBLIGATORIA: Función para eliminar producto individual 
  const removeProduct = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi carrito</Text>

      <FlatList
        data={cart}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
            {/* Botón de eliminar individual  */}
            <TouchableOpacity onPress={() => removeProduct(index)} style={styles.removeBtn}>
              <Ionicons name="trash-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Tu carrito está vacío</Text>}
      />

      <View style={styles.footer}>
        <Text style={styles.total}>Total: ${total}</Text>
        <TouchableOpacity style={styles.button} onPress={() => setCart([])}>
          <Text style={styles.buttonText}>Vaciar carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 16 },
  title: { fontSize: 26, fontWeight: "700", marginBottom: 18 },
  card: { flexDirection: "row", backgroundColor: "#fff", borderRadius: 12, marginBottom: 12, padding: 10, alignItems: 'center' },
  image: { width: 70, height: 70, borderRadius: 8 },
  info: { marginLeft: 12, flex: 1 },
  name: { fontSize: 16, fontWeight: "600" },
  price: { fontSize: 15, color: "#2ecc71", fontWeight: "600" },
  removeBtn: { padding: 10 }, // Estilo para el botón de eliminar
  footer: { borderTopWidth: 1, borderColor: '#ddd', paddingTop: 10 },
  total: { fontSize: 20, fontWeight: "700", marginBottom: 10 },
  button: { backgroundColor: "#000", padding: 15, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "600" },
  emptyText: { textAlign: "center", marginTop: 40, color: "#777" }
});