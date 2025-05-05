import React, { useState } from "react";
import { LineChart as Chart } from "react-native-chart-kit";
import { Dimensions, View, Text, TouchableOpacity } from "react-native";
import { colors } from "../components/SendMoneyProps/portraits/colors";

const screenWidth = Dimensions.get("window").width;

export const LineChart = () => {
  const [lineColor, setLineColor] = useState(colors.primary); // Initially set to primary color

  const data = {
    labels: ["Taxi", "Shopping"],
    datasets: [
      {
        data: [86, 286],
        color: (opacity = 1) => lineColor, // Use dynamic color
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: colors.graylight,
    backgroundGradientTo: colors.graylight,
    decimalPlaces: 2,
    color: (opacity = 1) => colors.secondary,
    labelColor: (opacity = 1) => colors.secondary,
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: lineColor,
    },
  };

  const handleTouch = () => {
    // Toggle between primary and secondary color on touch
    setLineColor(lineColor === colors.primary ? colors.secondary : colors.primary);
  };

  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 20, marginBottom: 10, color: colors.secondary }}>
        Spending Chart
      </Text>
      <TouchableOpacity onPress={handleTouch}>
        <Chart
          data={data}
          width={screenWidth - 32}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={{
            marginHorizontal: 16,
            borderRadius: 16,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
