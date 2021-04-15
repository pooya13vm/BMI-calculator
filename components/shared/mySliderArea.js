import React from "react";
import { Text, View } from "react-native";
import { Button, Icon, Slider } from "react-native-elements";
import { styles } from "./sharedStyle";

export default function MySlider({
  state,
  setState,
  max,
  min,
  title,
  measure,
  btnChange,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.buttons}>
        <Button
          onPress={() => {
            if (state > min) setState(state - btnChange);
          }}
          style={styles.sliderButton}
          icon={<Icon name="minus" type="font-awesome" color={"white"} />}
          buttonStyle={{
            height: 30,
            width: 80,
            backgroundColor: "#323232",
          }}
        />
        <Text style={styles.counterTxt}>
          {title === "Weight" ? state.toFixed(1) : state} {measure}
        </Text>
        <Button
          onPress={() => {
            if (state < max) setState(state + btnChange);
          }}
          style={styles.sliderButton}
          icon={<Icon name="plus" type="font-awesome" color={"white"} />}
          buttonStyle={{
            height: 30,
            width: 80,
            backgroundColor: "#323232",
          }}
        />
      </View>
      <View style={styles.Slider}>
        <Slider
          value={state}
          allowTouchTrack={true}
          onValueChange={(value) => setState(value)}
          maximumValue={max}
          minimumValue={min}
          step={1}
          style={styles.slider}
          trackStyle={{ height: 5, backgroundColor: "transparent" }}
          thumbStyle={{
            height: 20,
            width: 20,
            backgroundColor: "transparent",
          }}
          thumbProps={{
            children: (
              <Icon
                name="arrows-v"
                type="font-awesome"
                size={15}
                reverse
                containerStyle={{ bottom: 15, right: 15 }}
                color="#f50"
              />
            ),
          }}
        />
      </View>
    </View>
  );
}
