import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export function SettingsScreen({ route, navigation }) {
  function handleHomePress() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.Megakontejner}>
          <View style={styles.Kontejnernaslov}>

            <Text style={styles.Naslov}> Prve Postave: </Text>
          </View>

          <View style={styles.Igraci}>




            <View style={styles.Tim1}>

              <View style={styles.Slika}>
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
                  }}
                  style={{ width: 100, height: 50 }}
                />
              </View>


              <Text style={styles.Text}>11 Brozović</Text>
              <Text style={styles.Text}>12 Grbić</Text>
              <Text style={styles.Text}>20 Gvardiol</Text>
              <Text style={styles.Text}>22 Juranović</Text>
              <Text style={styles.Text}>9 Kramarić</Text>
              <Text style={styles.Text}>6 Lovren</Text>
              <Text style={styles.Text}>10 Modrić</Text>
              <Text style={styles.Text}>15 Pasalić</Text>
              <Text style={styles.Text}>4 Perišić</Text>
              <Text style={styles.Text}>19 Sosa</Text>
              <Text style={styles.Text}>13 Vlasic</Text>
            </View>





            <View style={styles.Tim2}>

              <View style={styles.Slika}>
                <Image
                  source={{
                    uri: "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
                  }}
                  style={{ width: 100, height: 50 }}
                />
              </View>

              <Text style={styles.Text}>Chistayakov 2</Text>
              <Text style={styles.Text}>Erokhin 21</Text>
              <Text style={styles.Text}>Glebov 19</Text>
              <Text style={styles.Text}>Guliherme 1</Text>
              <Text style={styles.Text}>Halkin 16</Text>
              <Text style={styles.Text}>Krugovoy 5</Text>
              <Text style={styles.Text}>Miranchuk 15</Text>
              <Text style={styles.Text}>Mostovoy 22</Text>
              <Text style={styles.Text}>Sergeev 23</Text>
              <Text style={styles.Text}>Sutormin 18</Text>
              <Text style={styles.Text}>Zobnin 11</Text>
            </View>
          </View>
        </View>

        <View style={styles.Megakontejner}>

          <View style={styles.Kontejnernaslov}>
            <Text style={styles.Naslov}> Zamjena </Text>

          </View>


          <View style={styles.Igraci}>




            <View style={styles.Tim1}>

              <View style={styles.Slika}>
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
                  }}
                  style={{ width: 100, height: 50 }}
                />
              </View>

              <Text style={styles.Text}>3 Barišić</Text>
              <Text style={styles.Text}>7 Brekalo </Text>
              <Text style={styles.Text}>5 Caleta-Car</Text>
              <Text style={styles.Text}>16 Jakić</Text>
              <Text style={styles.Text}>14 Livaja</Text>
              <Text style={styles.Text}>1 Livaković</Text>
              <Text style={styles.Text}>8 Majer</Text>
              <Text style={styles.Text}>18 Orsic</Text>
              <Text style={styles.Text}>17 Petković</Text>
              <Text style={styles.Text}>2 Stanisic</Text>
              <Text style={styles.Text}>22 Vida</Text>
            </View>





            <View style={styles.Tim2}>

              <View style={styles.Slika}>
                <Image
                  source={{
                    uri: "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
                  }}
                  style={{ width: 100, height: 50 }}
                />
              </View>

              <Text style={styles.Text}>Chistayakov 2</Text>
              <Text style={styles.Text}>Erokhin 21</Text>
              <Text style={styles.Text}>Glebov 19</Text>
              <Text style={styles.Text}>Guliherme 1</Text>
              <Text style={styles.Text}>Halkin 16</Text>
              <Text style={styles.Text}>Krugovoy 5</Text>
              <Text style={styles.Text}>Miranchuk 15</Text>
              <Text style={styles.Text}>Mostovoy 22</Text>
              <Text style={styles.Text}>Sergeev 23</Text>
              <Text style={styles.Text}>Sutormin 18</Text>
              <Text style={styles.Text}>Zobnin 11</Text>
            </View>
          </View>

        </View>

        <View style={styles.Megakontejner}>
          <View style={styles.Kontejnernaslov}>

            <Text style={styles.Naslov}> Treneri: </Text>
          </View>

          <View style={styles.Igraci}>




            <View style={styles.Tim1}>

              <View style={styles.Slika}>
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
                  }}
                  style={{ width: 100, height: 50 }}
                />
              </View>


              <Text style={styles.Text}>Dalić</Text>

            </View>
            <View style={styles.Tim2}>

<View style={styles.Slika}>
  <Image
    source={{
      uri: "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
    }}
    style={{ width: 100, height: 50 }}
  />
</View>


<Text style={styles.Text}>Karpin</Text>

</View>

          </View>

        </View>


      </ScrollView >
    </View >



  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  Megakontejner: {
    borderWidth: 20,
    borderRadius: 30,
  },

  Kontejnernaslov: {
    backgroundColor: "gray",
  },
  Naslov: {
    fontSize: 50,
    color: "white",
  },
  Igraci: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 50,

  },
  Tim1: {
    textAlign: "left",
  },
  Tim2: { textAlign: "right", },
  Slika: {
    paddingBottom: 50,
  }
});