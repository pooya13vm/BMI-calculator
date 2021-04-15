import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "./sharedStyle";

export default function MyIcon({ sex, setMan, man }) {
  let backGround = "#323232";
  let border;
  if ((sex === "male" && man == true) || (sex === "female" && man == false)) {
    backGround = "#505050";
    border = 2;
  }
  return (
    <View
      style={[
        styles.icons,
        { backgroundColor: backGround, borderBottomWidth: border },
      ]}
    >
      <Icon
        name={sex}
        type="font-awesome-5"
        size={70}
        color="white"
        onPress={() => {
          if (sex === "male") {
            setMan(true);
          } else {
            setMan(false);
          }
        }}
      />
    </View>
  );
}
