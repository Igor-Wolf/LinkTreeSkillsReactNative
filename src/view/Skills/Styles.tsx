import styled from "styled-components";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #07073b;
  align-items: center;
  width: 100%;
`;

export const ImageContainer = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 150px;
  margin-top: 70px;
  margin-bottom: 50px;
  border: 3px solid black;
`;

export const ExternalContainer = styled.ScrollView`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
`;

export const MainText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  margin-bottom: 20px;
`;
export const NormalText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`;

export const SkillBUtton = styled.TouchableOpacity`
  color: white;
  width: 130px;
  height: 130px;
  elevation: 50;
  border-radius: 100px;
  border: 5px solid white;
  background-color: #10103f;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  padding: 20px;
`;

export const InternalContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color:rgba(156, 152, 152, 0.6);
  width: 85%;
  border-radius: 5px;
  padding: 5px;
`;

export const FullTechContainer = styled.View`
  display: flex;
  flex-direction: row;
  width:100%;
`;

export const TechContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  
`;
export const StarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:flex-end;
  flex:1;
  padding: 10px;
`;

export const ImageTech = styled.Image`
  width: 60px;
  height: 60px;
  margin-top: 10px;
  
`;
