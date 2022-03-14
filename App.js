import React, { useState } from "react";
import { Button, Text, View, Image } from "react-native";

const Cat = (props) => {
  
  const [imageCat, setCatFeeling] = useState("https://reactnative.dev/docs/assets/p_cat2.png");
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View style={{padding: 15}}>
      <Text>
        Eu sou {props.name}, e eu estou {isHungry ? "faminto" : "cheio"}!
      </Text>
      <Image
          source={{
            uri: imageCat,
          }}
          style={{ width: 200, height: 200 }}
        />
      <Button
        onPress={() => {
          setIsHungry(!isHungry);
          isHungry ? setCatFeeling("https://reactnative.dev/docs/assets/p_cat1.png"):
          setCatFeeling("https://reactnative.dev/docs/assets/p_cat2.png");
        }}
        //disabled={!isHungry}
        title={isHungry ? "Me de comida, por favor!" : "Obrigado!"}
      />
    </View>
  );
}

const Cafe = () => {
  return (
    <>
      <Cat name="Drogo" />
      <Cat name="Gatito" />
    </>
  );
}

export default Cafe;