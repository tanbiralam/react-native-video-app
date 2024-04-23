import { View, Text } from "react-native";
import React from "react";

const Infobox = ({ title, subtitle, containerStyles, titleStyle }) => {
  return (
    <View className={containerStyles}>
      <Text className={`text-white text-center font-psemibold ${titleStyle}`}>
        {title}
      </Text>
      <Text className="text-sm text-gray-100 text-center font-pregular">
        {subtitle}
      </Text>
    </View>
  );
};

export default Infobox;
