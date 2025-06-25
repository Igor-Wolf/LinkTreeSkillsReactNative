import {
  Container,
  ExternalContainer,
  FullTechContainer,
  ImageContainer,
  ImageTech,
  InternalContainer,
  MainText,
  NormalText,
  SkillBUtton,
  StarContainer,
  TechContainer,
} from "./Styles";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { useNavigation } from "@react-navigation/native";

export default function Skills() {
  const navigation = useNavigation<any>();
  return (
    <Container>
      <ExternalContainer>
        <Container>
          <ImageContainer
            source={require("../../../assets/perfil.jpg")}
          ></ImageContainer>
          <MainText>IGOR REIS BARBOSA</MainText>

          <InternalContainer>
            <FullTechContainer>
              <TechContainer>
                <ImageTech
                  source={require("../../../assets/nodejs-logo-adesivo-sticker-800x800.png")}
                ></ImageTech>
                <NormalText>Node.js</NormalText>
              </TechContainer>
              <StarContainer>
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
              </StarContainer>
            </FullTechContainer>
            <FullTechContainer>
              <TechContainer>
                <ImageTech
                  source={require("../../../assets/js.png")}
                ></ImageTech>
                <NormalText>JS</NormalText>
              </TechContainer>
              <StarContainer>
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
              </StarContainer>
            </FullTechContainer>
            <FullTechContainer>
              <TechContainer>
                <ImageTech
                  source={require("../../../assets/next.png")}
                ></ImageTech>
                <NormalText>Next.js</NormalText>
              </TechContainer>
              <StarContainer>
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons
                  name="star-half-full"
                  size={40}
                  color="orange"
                />
              </StarContainer>
            </FullTechContainer>
            <FullTechContainer>
              <TechContainer>
                <ImageTech
                  source={require("../../../assets/react.webp")}
                ></ImageTech>
                <NormalText>REACT</NormalText>
              </TechContainer>
              <StarContainer>
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
              </StarContainer>
            </FullTechContainer>
            <FullTechContainer>
              <TechContainer>
                <ImageTech
                  source={require("../../../assets/pyton.png")}
                ></ImageTech>
                <NormalText>Python</NormalText>
              </TechContainer>
              <StarContainer>
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
              </StarContainer>
            </FullTechContainer>
            <FullTechContainer>
              <TechContainer>
                <ImageTech
                  source={require("../../../assets/mongo.png")}
                ></ImageTech>
                <NormalText>MongoDB</NormalText>
              </TechContainer>
              <StarContainer>
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
              </StarContainer>
            </FullTechContainer>
            <FullTechContainer>
              <TechContainer>
                <ImageTech
                  source={require("../../../assets/Godot_icon.svg.png")}
                ></ImageTech>
                <NormalText>Godot</NormalText>
              </TechContainer>
              <StarContainer>
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
              </StarContainer>
            </FullTechContainer>

            <FullTechContainer>
              <TechContainer>
                <ImageTech
                  source={require("../../../assets/html.png")}
                ></ImageTech>
                <NormalText>HTML</NormalText>
              </TechContainer>
              <StarContainer>
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
              </StarContainer>
            </FullTechContainer>

            <FullTechContainer>
              <TechContainer>
                <ImageTech
                  source={require("../../../assets/css.png")}
                ></ImageTech>
                <NormalText>CSS</NormalText>
              </TechContainer>
              <StarContainer>
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
              </StarContainer>
            </FullTechContainer>
            <FullTechContainer>
              <TechContainer>
                <ImageTech
                  source={require("../../../assets/typescript.png")}
                ></ImageTech>
                <NormalText>TS</NormalText>
              </TechContainer>
              <StarContainer>
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons
                  name="star-half-full"
                  size={40}
                  color="orange"
                />
              </StarContainer>
            </FullTechContainer>
            <FullTechContainer>
              <TechContainer>
                <ImageTech
                  source={require("../../../assets/mysql.png")}
                ></ImageTech>
                <NormalText>MySQL</NormalText>
              </TechContainer>
              <StarContainer>
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
              </StarContainer>
            </FullTechContainer>

            <FullTechContainer>
              <TechContainer>
                <ImageTech
                  source={require("../../../assets/csharp.png")}
                ></ImageTech>
                <NormalText>C#</NormalText>
              </TechContainer>
              <StarContainer>
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
              </StarContainer>
            </FullTechContainer>
            <FullTechContainer>
              <TechContainer>
                <ImageTech
                  source={require("../../../assets/unity.png")}
                ></ImageTech>
                <NormalText>Unity</NormalText>
              </TechContainer>
              <StarContainer>
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons name="star" size={40} color="orange" />
                <MaterialCommunityIcons
                  name="star-half-full"
                  size={40}
                  color="orange"
                />
              </StarContainer>
            </FullTechContainer>
          </InternalContainer>

          <SkillBUtton onPress={() => navigation.navigate("Home")}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              size={50}
              color="white"
            />
            <NormalText style={{ fontsize: 10 }}>VOLTAR</NormalText>
          </SkillBUtton>
        </Container>
      </ExternalContainer>
    </Container>
  );
}
