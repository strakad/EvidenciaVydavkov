import { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import SumaVydavkov from "./SumaVydavkov";
import ZoznamVydavkov from "./ZoznamVydavkov";
import FiltraciaVydavkov from "./FiltraciaVydavkov";
import { GlobalStyles } from "../constant/styles";


export default function ZobrazenieVydavkov({ vydavky, pocetDniVydavkov }) {
  const [vyfiltrovaneVydavky, setVyfiltrovaneVydavky] = useState(vydavky);

  function handleFilter(filtrovaneVydavky) {
    setVyfiltrovaneVydavky(filtrovaneVydavky);
  }

  return (
    <View style={styles.container}>
      <SumaVydavkov vydavky={vyfiltrovaneVydavky} pocetDni={pocetDniVydavkov} />
      <FiltraciaVydavkov vydavky={vydavky} onFilter={handleFilter} />
      <ZoznamVydavkov vydavky={vyfiltrovaneVydavky} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
