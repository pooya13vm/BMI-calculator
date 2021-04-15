import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import CalculateBtn from "../components/shared/calculateBtn";
import MyIcon from "../components/shared/icon";
import MySlider from "../components/shared/mySliderArea";
import { styles } from "./../styles";

export default function Metric(props) {
  const [height, setHeight] = useState(176);
  const [weight, setWeight] = useState(85);
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
              state={height}
              setState={setHeight}
              min={152}
              max={200}
              title={"Height"}
              measure={"cm"}
              btnChange={0.5}
            />
            <MySlider
              state={weight}
              setState={setWeight}
              min={45}
              max={120}
              title={"Weight"}
              measure={"kgs"}
              btnChange={0.1}
            />
            <MySlider
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
        page={true}
        age={age}
        navigation={props.navigation}
      />
    </View>
  );
}
