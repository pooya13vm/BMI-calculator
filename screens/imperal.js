import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import MyIcon from "../components/shared/icon";
import MySlider from "../components/shared/mySliderArea";
import CalculateBtn from "../components/shared/calculateBtn";
import { styles } from "./../styles";

export default function Imperal(props) {
  const [height, setHeight] = useState(58);
  const [weight, setWeight] = useState(170);
  const [age, setAge] = useState(45);
  const [man, setMan] = useState(true);

  return (
    <View style={styles.main}>
      <View style={styles.body}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <View style={styles.sexIcons}>
            <MyIcon sex={"male"} setMan={setMan} man={man} />
            <MyIcon sex={"female"} setMan={setMan} man={man} />
          </View>
          <View style={styles.sliders}>
            <MySlider
              man={man}
              state={height}
              setState={setHeight}
              min={50}
              max={66}
              title={"Height"}
              measure={"in"}
              btnChange={0.5}
            />
            <MySlider
              man={man}
              state={weight}
              setState={setWeight}
              min={110}
              max={225}
              title={"Weight"}
              measure={"lbs"}
              btnChange={0.1}
            />
            <MySlider
              man={man}
              state={age}
              setState={setAge}
              min={18}
              max={70}
              title={"Age"}
              measure={""}
              btnChange={1}
            />
          </View>
        </ScrollView>
      </View>
      <CalculateBtn
        weight={weight}
        height={height}
        man={man}
        page={false}
        age={age}
        navigation={props.navigation}
      />
    </View>
  );
}
