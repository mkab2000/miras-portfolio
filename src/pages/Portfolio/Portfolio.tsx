import { useRecoilState } from "recoil";
import useWindowWidth from "../../components/window-width-hook";
import { darkModeState } from "../../store";
import Banner from "../../components/Banner";
import ProjectsList from "./components/ProjectsList";
import styled from "styled-components";

const Portfolio = () => {
  const [darkMode] = useRecoilState(darkModeState);
  const windowWidth = useWindowWidth();
  
  return (
    <StyledPortfolio $darkMode={darkMode} windowWidth={windowWidth}>
      <StyledWrapper $darkMode={darkMode}>
        <Banner
          backgroundText="WORKS"
          foregroundTextPrimary="PORTFOLIO"
          foregroundTextSecondary="MY"
          backgroundFontSizes={["30px", "40px", "50px"]}
          foregroundFontSizes={["16px", "19px", "24px"]}
        />
        <ProjectsList />
      </StyledWrapper>
      
    </StyledPortfolio>
  )
}

const StyledPortfolio = styled.div<{ $darkMode: boolean; windowWidth: number }>`
  height: 100%;
  background-color: ${({$darkMode}) => ($darkMode ? "var(--background-color-dark)" : "var(--background-color-light)")};
  display: flex;
  font-family: sans-serif;
  /* padding-bottom: ${({ windowWidth }) => (windowWidth <= 1000 ? "60px" : "0")}; */
  flex-direction: column;
  overflow-y: auto;
  text-align: ${({ windowWidth }) => (windowWidth <= 1000 ? "center" : "left")};
  transition: background-color 0.6s ease;
`;

const StyledWrapper = styled.div<{ $darkMode: boolean }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default Portfolio;