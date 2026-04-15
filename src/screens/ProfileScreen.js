import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/HarmanSoul.png")} 
        style={styles.image} 
      />
      <Text style={styles.name}>Jonathan Guerrero</Text>
      <Text style={styles.email}>harman@soul.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", 
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60, 
    marginBottom: 20,
    resizeMode: "contain"
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginTop: 8,
  },
});