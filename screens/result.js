import React, { useState, useRef, useEffect } from "react";
import { Text, View, Share, Animated } from "react-native";
import { Button, Icon, Overlay } from "react-native-elements";
// import Rate, { AndroidMarket } from "react-native-rate";
import { showResult } from "../components/resulttxt";
import { BFResult } from "../components/resulttxt";
import { styles } from "../styles";

export default function Result({ route }) {
  const { BMI, man, age } = route.params;
  const [visible, setVisible] = useState(false);
  // const [rate, setRate] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const bodyFat = man
    ? 1.2 * BMI + 0.23 * 20 - 16.2
    : 1.2 * BMI + 0.23 * 20 - 5.4;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `My Body Mass Index is : ${BMI}
      and my body fat percentage is :${bodyFat}
      i am using a wonderful app`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.mainResult}>
      <View style={styles.containerResult}>
        <Animated.View style={[styles.cardResult, { opacity: fadeAnim }]}>
          <View style={styles.bmiTxt}>
            <Text style={styles.resultTitle}>BMI</Text>
            <Text style={styles.resultNum}>{BMI}</Text>
            <Text style={styles.resultDis}>{showResult(man, BMI)}</Text>
          </View>
          <View style={styles.bmiTxt}>
            <Text style={styles.resultTitle}>Body Fat Percentage</Text>
            <Text style={styles.resultNum}>{Math.round(bodyFat)} %</Text>
            <Text style={styles.resultDis}>{BFResult(man, BMI, age)}</Text>
          </View>
        </Animated.View>
      </View>
      <View style={styles.footerResult}>
        <Icon
          name="share"
          type="material"
          color="#252525"
          size={40}
          onPress={onShare}
        />
        <Icon
          name="comment-medical"
          type="font-awesome-5"
          color="#303030"
          size={40}
          onPress={() => toggleOverlay()}
        />
        {/* <Icon
          name="star-rate"
          type="MaterialIcon"
          color="#404040"
          size={40}
          onPress={() => {
            const options = {
              AppleAppID: "2193813192",
              GooglePackageName: "com.mywebsite.myapp",
              OtherAndroidURL: "http://www.randomappstore.com/app/47172391",
              preferredAndroidMarket: AndroidMarket.Google,
              preferInApp: false,
              openAppStoreIfInAppFails: true,
              fallbackPlatformURL: "http://www.mywebsite.com/myapp.html",
            };
            Rate.rate(options, (success) => {
              if (success) {
                setRate(true);
              }
            });
          }}
        /> */}
      </View>
      <View>
        <Overlay
          isVisible={visible}
          onBackdropPress={() => toggleOverlay()}
          overlayStyle={{
            width: 300,
            height: 370,
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#546E7A",
          }}
        >
          <Text style={styles.overlayTxt}>
            Hi friend , you must consider variables such as body type, heredity,
            age, activity and gender. For instance, the range for a healthy body
            fat percentage in women tends to be higher than that of men, as
            women need more body fat. A certain amount of fat is important for
            bodily functions. It regulates your body temperature, cushions
            organs and tissues, and is the main form of your body’s energy
            storage. So it's important to have neither too much nor too little
            body fat .import {styles} from './../styles';
          </Text>

          <Button
            title="ok"
            titleStyle={{ fontSize: 18, fontWeight: "bold", color: "black" }}
            buttonStyle={{ backgroundColor: "white", width: 70 }}
            onPress={() => toggleOverlay()}
          />
        </Overlay>
      </View>
    </View>
  );
}
