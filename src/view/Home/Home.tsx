import { Linking, ScrollView } from "react-native";
import {
  ButtonsLinks,
  Container,
  ExternalContainer,
  ImageContainer,
  MainText,
  NormalText,
  SkillBUtton,
} from "./Styles";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";



export default function Home() {

    const navigation = useNavigation<any>();
  return (
    <Container>
      <ExternalContainer>
        <Container>
          <ImageContainer
            source={require("../../../assets/perfil.jpg")}
          ></ImageContainer>
          <MainText>IGOR REIS BARBOSA</MainText>
          <ButtonsLinks
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/igor-reis-barbosa-4412901b4/"
              )
            }
          >
            <NormalText>LINKEDIN</NormalText>
          </ButtonsLinks>
          <ButtonsLinks
            onPress={() => Linking.openURL("https://github.com/Igor-Wolf")}
          >
            <NormalText>GITHUB</NormalText>
          </ButtonsLinks>
          <ButtonsLinks
            onPress={() => Linking.openURL("https://igor-wolf.github.io/")}
          >
            <NormalText>PORTFÓLIO</NormalText>
          </ButtonsLinks>
          <ButtonsLinks
            onPress={() => Linking.openURL("mailto:igorreisbarbosa@gmail.com")}
          >
            <NormalText>EMAIL</NormalText>
          </ButtonsLinks>
          <SkillBUtton onPress={() => navigation.navigate('Skills')}>
            <MaterialCommunityIcons name="tools" size={50} color="white" />
                      <NormalText style={{ fontsize: 10}}>SKILLS</NormalText>
                  </SkillBUtton>
        </Container>
      </ExternalContainer>
    </Container>
  );
}
