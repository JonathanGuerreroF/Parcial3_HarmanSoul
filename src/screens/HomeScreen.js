import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

export default function HomeScreen({ navigation, products }) {
  // Solo tomamos los primeros 2 productos para la vista previa
  const previewProducts = products.slice(0, 2);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Tu Header y Banner Principal existentes... */}
      <View style={styles.headerContainer}>
        <Image source={require("../../assets/HarmanSoul.png")} style={styles.logo} />
        <Text style={styles.brandName}>HARMAN SOUL</Text>
        <Text style={styles.brandSlogan}>El sonido en su máxima expresión</Text>
      </View>

      <Image 
        source={{ uri: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=600&auto=format&fit=crop" }} 
        style={styles.banner} 
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Edición Limitada</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
          <Text style={styles.seeAllText}>Ver todo</Text>
        </TouchableOpacity>
      </View>

      {/* PASO 3: Convertir placeholders en botones funcionales */}
      <View style={styles.productsPreview}>
        {previewProducts.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.productCard}
            // PASO 4: Navegar al detalle pasando el producto específico (Params)
            onPress={() => navigation.navigate("ProductDetail", { product: item })}
          >
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productNameDraft}>{item.name}</Text>
            <Text style={styles.productPriceDraft}>${item.price.toFixed(2)}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.navigationButtons}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ProductList")}>
          <Text style={styles.buttonText}>Explorar Catálogo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.cartButton]} onPress={() => navigation.navigate("Cart")}>
          <Text style={styles.buttonText}>Revisar Carrito 🛒</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // ... mantén tus estilos anteriores ...
  container: { flex: 1, backgroundColor: "#fff" },
  headerContainer: { alignItems: "center", marginTop: 30, marginBottom: 20 },
  logo: { width: 100, height: 100, resizeMode: "contain" },
  brandName: { fontSize: 28, fontWeight: "800", color: "#000", letterSpacing: 2, marginTop: 5 },
  brandSlogan: { fontSize: 12, color: "#666", fontStyle: "italic", marginTop: -2 },
  banner: { width: "90%", height: 200, alignSelf: "center", borderRadius: 15, marginTop: 10 },
  sectionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, marginTop: 30 },
  sectionTitle: { fontSize: 22, fontWeight: "700", color: "#222" },
  seeAllText: { fontSize: 14, color: "#000", fontWeight: "600" },
  productsPreview: { flexDirection: "row", justifyContent: "space-around", marginTop: 20, paddingHorizontal: 10 },
  productCard: { width: "45%", backgroundColor: "#f9f9f9", borderRadius: 12, padding: 10, alignItems: "center", borderWidth: 1, borderColor: "#eee" },
  
  // Nuevo estilo para la imagen en la tarjeta
  productImage: { width: "100%", height: 100, borderRadius: 8, marginBottom: 10 },
  
  productNameDraft: { fontSize: 16, fontWeight: "600", color: "#333", textAlign: "center" },
  productPriceDraft: { fontSize: 14, color: "#666", marginTop: 4 },
  navigationButtons: { marginBottom: 40 },
  button: { backgroundColor: "#000", marginHorizontal: 20, marginTop: 20, padding: 18, borderRadius: 30, alignItems: "center", elevation: 6 },
  cartButton: { backgroundColor: "#444", marginTop: 15 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "700", letterSpacing: 1 },
});