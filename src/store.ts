import { atom } from 'recoil';

export const darkModeState = atom({
  key: 'darkModeState',
  default: true,
});

export const screenWidthState = atom({
  key: 'screenWidthState',
  default: window.innerWidth,
});

export enum PageTypes {
  Home = 'Home',
  About = 'About',
  Portfolio = 'Portfolio',
}

export interface DisplayedPage {
  type: PageTypes;
}

export const displayedPage = atom<DisplayedPage>({
  key: 'selectedPage',
  default: {
    type: PageTypes.Home,
  },
});

export interface DarkModeWindowProps {
  $darkMode?: boolean;
  $windowWidth: number;
}

export interface ProjectInfo {
  projName: string;
  name: string;
  image: string;
  type: string;
  tech: string;
  repos: string;
  preview: string;
  description: string;
}