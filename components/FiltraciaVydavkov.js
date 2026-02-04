import { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../constant/styles";
import { Ionicons } from "@expo/vector-icons";

export default function FiltraciaVydavkov({ vydavky, onFilter }) {
  const [hladanie, setHladanie] = useState("");

  function handleHladanie(text) {
    setHladanie(text);
    
    if (text.trim() === "") {
      onFilter(vydavky);
    } else {
      const vyfiltrovaneVydavky = vydavky.filter((vydavok) =>
        vydavok.popis.toLowerCase().includes(text.toLowerCase())
      );
      onFilter(vyfiltrovaneVydavky);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Hľadaj výdavok..."
          placeholderTextColor="#9CA3AF"
          value={hladanie}
          onChangeText={handleHladanie}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TouchableOpacity 
          style={styles.iconButton}
          activeOpacity={0.85}
        >
          <Ionicons 
            name="search-outline" 
            size={20} 
            color="#F9FAFB"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  searchWrapper: {
    position: 'relative',
    width: '100%',
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#F3F4F6',
    borderRadius: 999,
    paddingLeft: 18,
    paddingRight: 52,
    color: '#1F2937',
    fontSize: 16,
    borderWidth: 0,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 2,
    elevation: 2,
  },
  iconButton: {
    position: 'absolute',
    right: -20,
    top: (48 - 40) / 2,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#A67C52',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
});