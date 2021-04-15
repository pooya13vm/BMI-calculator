import React from "react";
import { Text } from "react-native";

export const showResult = (man, BMI) => {
  if (man) {
    if (BMI < 18) {
      return <Text style={{ color: "blue" }}>Underweight</Text>;
    }
    if (BMI >= 18 && BMI < 26) {
      return <Text style={{ color: "green" }}>Healthy</Text>;
    }
    if (BMI >= 26 && BMI < 31) {
      return <Text style={{ color: "yellow" }}>Overweight</Text>;
    }
    if (BMI >= 31 && BMI < 35) {
      return <Text style={{ color: "orange" }}>Obese</Text>;
    }
    if (BMI >= 34.9) {
      return <Text style={{ color: "red" }}>Morbidly obese</Text>;
    }
  } else {
    if (BMI < 18) {
      return <Text style={{ color: "blue" }}>Underweight</Text>;
    }
    if (BMI >= 18 && BMI < 25) {
      return <Text style={{ color: "green" }}>Healthy</Text>;
    }
    if (BMI >= 25 && BMI < 29) {
      return <Text style={{ color: "yellow" }}>Overweight</Text>;
    }
    if (BMI >= 29 && BMI < 33) {
      return <Text style={{ color: "orange" }}>Obese</Text>;
    }
    if (BMI >= 33) {
      return <Text style={{ color: "red" }}>Morbidly obese</Text>;
    }
  }
};

export const BFResult = (man, BMI, age) => {
  const bodyFat = man
    ? 1.2 * BMI + 0.23 * 20 - 16.2
    : 1.2 * BMI + 0.23 * 20 - 5.4;
  if (!man) {
    if (age <= 40) {
      if (bodyFat < 21) {
        return <Text style={{ color: "blue" }}>Under fat</Text>;
      }
      if (bodyFat >= 21 && bodyFat < 33) {
        return <Text style={{ color: "green" }}>Healthy</Text>;
      }
      if (bodyFat >= 33 && bodyFat < 39) {
        return <Text style={{ color: "yellow" }}>Overweight</Text>;
      }
      if (bodyFat >= 39) {
        return <Text style={{ color: "red" }}>Obese</Text>;
      }
    }
    if (age > 40 && age <= 60) {
      if (bodyFat < 23) {
        return <Text style={{ color: "blue" }}>Under fat</Text>;
      }
      if (bodyFat >= 23 && bodyFat < 35) {
        return <Text style={{ color: "green" }}>Healthy</Text>;
      }
      if (bodyFat >= 35 && bodyFat < 40) {
        return <Text style={{ color: "yellow" }}>Overweight</Text>;
      }
      if (bodyFat >= 40) {
        return <Text style={{ color: "red" }}>Obese</Text>;
      }
    }
    if (age >= 61) {
      if (bodyFat < 24) {
        return <Text style={{ color: "blue" }}>Under fat</Text>;
      }
      if (bodyFat >= 24 && bodyFat < 36) {
        return <Text style={{ color: "green" }}>Healthy</Text>;
      }
      if (bodyFat >= 36 && bodyFat < 42) {
        return <Text style={{ color: "yellow" }}>Overweight</Text>;
      }
      if (bodyFat >= 42) {
        return <Text style={{ color: "red" }}>Obese</Text>;
      }
    }
  }
  if (man) {
    if (age <= 40) {
      if (bodyFat < 8) {
        return <Text style={{ color: "blue" }}>Under fat</Text>;
      }
      if (bodyFat >= 8 && bodyFat < 19) {
        return <Text style={{ color: "green" }}>Healthy</Text>;
      }
      if (bodyFat >= 19 && bodyFat < 25) {
        return <Text style={{ color: "yellow" }}>Overweight</Text>;
      }
      if (bodyFat >= 25) {
        return <Text style={{ color: "red" }}>Obese</Text>;
      }
    }
    if (age > 40 && age <= 60) {
      if (bodyFat < 11) {
        return <Text style={{ color: "blue" }}>Under fat</Text>;
      }
      if (bodyFat >= 11 && bodyFat < 22) {
        return <Text style={{ color: "green" }}>Healthy</Text>;
      }
      if (bodyFat >= 22 && bodyFat < 27) {
        return <Text style={{ color: "yellow" }}>Overweight</Text>;
      }
      if (bodyFat >= 27) {
        return <Text style={{ color: "red" }}>Obese</Text>;
      }
    }
    if (age >= 61) {
      if (bodyFat < 13) {
        return <Text style={{ color: "blue" }}>Under fat</Text>;
      }
      if (bodyFat >= 13 && bodyFat < 25) {
        return <Text style={{ color: "green" }}>Healthy</Text>;
      }
      if (bodyFat >= 25 && bodyFat < 30) {
        return <Text style={{ color: "yellow" }}>Overweight</Text>;
      }
      if (bodyFat >= 30) {
        return <Text style={{ color: "red" }}>Obese</Text>;
      }
    }
  }
};
