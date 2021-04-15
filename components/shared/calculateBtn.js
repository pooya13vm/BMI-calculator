import React from "react";
import { View } from "react-native";
import { Button, Icon } from "react-native-elements";
import { styles } from "./sharedStyle";

export default function CalculateBtn({
  weight,
  height,
  man,
  page,
  age,
  navigation,
}) {
  const calculate = () => {
    if (page) {
      let h = (height / 100) * (height / 100);
      let w = weight;
      let bmi = Math.round(w / h);
      navigation.navigate("Result", { BMI: bmi, man: man, age: age });
    } else {
      let h = height * height;
      let w = weight;
      let bmi = Math.round((w * 703) / h);
      navigation.navigate("Result", { BMI: bmi, man: man, age: age });
    }
  };
  return (
    <View style={styles.button}>
      <Button
        style={styles.endButton}
        buttonStyle={{
          height: 50,
          width: 400,
          backgroundColor: "#f50",
          alignItems: "center",
          justifyContent: "center",
        }}
        icon={
          <Icon name="calculator" type="font-awesome" size={32} color="white" />
        }
        title="    Calculate"
        titleStyle={{ fontSize: 28, fontFamily: "BebasNeue" }}
        onPress={() => calculate()}
      />
    </View>
  );
}
