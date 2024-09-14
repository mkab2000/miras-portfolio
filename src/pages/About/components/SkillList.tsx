import { useRecoilState } from "recoil";
import useWindowWidth from "../../../components/window-width-hook";
import { skillsData } from "../../../constants/skillsData";
import { darkModeState } from "../../../store";
import { StyledDivider } from "./EducationInfo";
import styled from 'styled-components';



const SkillList = () => {
  const [darkMode] = useRecoilState(darkModeState);
  const windowWidth = useWindowWidth();
  
  return (
    <>
      <StyledDivider/>
      
      <StyledWrapper windowWidth={windowWidth}>
        <TitleWrapper>
          <Title $darkMode={darkMode}>My Skills</Title>
        </TitleWrapper>
        <ChartWrapper $windowWidth={windowWidth} $darkMode={darkMode}>
          {skillsData.map((data, index) => (
            <div key={index}>
              <StyledImg src={ data.icon } $darkMode={darkMode} />
              <h3>{data.label}</h3>
            </div>
          ))}
        </ChartWrapper>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div<{ windowWidth: number }>`
  display: flex;
  flex-direction: column;
  margin: ${({ windowWidth }) =>
  windowWidth <= 550 ? "0 5% 20px 5%" : "0 10% 20px 10%"};
  margin-bottom: 60px;
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 10% 20px 10%;
`;

const Title = styled.h2<{ $darkMode: boolean }>`
  font-size: 26px;
  color: ${({ $darkMode }) => ($darkMode ? "white" : "#666")};
`;

const ChartWrapper = styled.div<{ $windowWidth: number; $darkMode: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 20px;
  > div {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${({ $windowWidth: windowWidth }) => (windowWidth <= 800 ? "150px" : "300px")};

    h3 {
      color: ${({ $darkMode }) => ($darkMode ? "white" : "#666")};
    }
  }
`;

const StyledImg = styled.img<{ $darkMode: boolean }>`
  filter: ${props => (props.$darkMode ?
    "invert(14%) sepia(86%) saturate(4515%) hue-rotate(335deg) brightness(104%) contrast(115%)" :
    "invert(78%) sepia(67%) saturate(3837%) hue-rotate(3deg) brightness(106%) contrast(104%)"
)};
  height: 100%;
  margin-bottom: 8px;
`;

export default SkillList;
