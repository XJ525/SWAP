import { transparentize } from 'polished'
import React, { useMemo } from 'react'
import styled, {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
  css,
  DefaultTheme
} from 'styled-components'
import { useIsDarkMode } from '../state/user/hooks'
import { Text, TextProps } from 'rebass'
import { Colors } from './styled'

export * from './components'

const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 600,
  upToMedium: 960,
  upToLarge: 1280,
  upToMoreSmall: 400
}
export const MEDIA_WIDTHSV3 = {
  upToExtraSmall: 500,

  upToSmall: 720,

  upToMedium: 960,

  upToLarge: 1280
}

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
) as any

const white = '#FFFFFF'
const black = '#000000'

export function colors(darkMode: boolean): Colors {
  return {
    // base
    white,
    black,

    // text
    text1: darkMode ? '#000000' : '#FFFFFF',
    text2: darkMode ? '#565A69' : '#C3C5CB',
    text3: darkMode ? '#888D9B' : '#6C7284',
    text4: darkMode ? '#C3C5CB' : '#565A69',
    text5: darkMode ? '#EDEEF2' : '#2C2F36',
    text6: darkMode ? '##F3F4F5' : '##8C8E95',
    text7: darkMode ? '#333333' : '#ffffff',
    text8: darkMode ? '#999' : '#90939B',
    text9: darkMode ? '#E6B37C' : '#E6B37C',
    text10: darkMode ? '#F19635' : '#E6B37C',

    // backgrounds / greys
    bg0: darkMode ? '#FFF' : '#191B1F',
    bg1: darkMode ? '#FFFFFF' : '#0A0C19',
    bg2: darkMode ? '#F8F5FD' : '#0E1530',
    bg3: darkMode ? '#EDEEF2' : '#40444F',
    bg4: darkMode ? '#CED0D9' : '#565A69',
    bg5: darkMode ? '#888D9B' : '#6C7284',
    bg6: darkMode ? '#ffffff' : '#101B39',
    bg7: darkMode ? '#f1f1f1' : '#313f61',
    bg8: darkMode ? '#ffffff' : '##0a0c19',
    bg9: darkMode ? '#ffffff' : '#212637',
    bg10: darkMode ? '#8AB9F6' : '#1D4D91',
    bg11: darkMode ? '#F5F5F5' : '#1A1B27',
    bg12: darkMode ? '#FAF0E5' : '#333136',
    bg13: darkMode ? '#E8F2FF' : '#1E3157',
    bg14: darkMode ? 'rgb(245, 246, 252)' : 'rgb(20, 27, 43)',
    color1: darkMode ? '#F3F4F5' : '#191c2a',
    color2: darkMode ? '#2B3143' : 'rgba(255,255,255,0)',

    //specialty colors
    modalBG: darkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,.425)',
    advancedBG: darkMode ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.1)',

    //primary colors
    primary1: darkMode ? '#ff007a' : '#2172E5',
    primary2: darkMode ? '#FF8CC3' : '#3680E7',
    primary3: darkMode ? '#FF99C9' : '#4D8FEA',
    primary4: darkMode ? '#EBF2FD' : '#376bad70',
    primary5: darkMode ? '#EBF2FD' : '#153d6f70',

    // color text
    primaryText1: darkMode ? '#237FF8' : '#6da8ff',

    // secondary colors
    secondary1: darkMode ? '#ff007a' : '#2172E5',
    secondary2: darkMode ? '#F6DDE8' : '#17000b26',
    secondary3: darkMode ? '#FDEAF1' : '#17000b26',

    // other
    red1: '#FF6871',
    red2: '#F82D3A',
    green1: '#27AE60',
    yellow1: '#FFE270',
    yellow2: '#F3841E'

    // dont wanna forget these blue yet
    // blue4: darkMode ? '#153d6f70' : '#C4D9F8',
    // blue5: darkMode ? '#153d6f70' : '#EBF4FF',
  }
}

export function theme(darkMode: boolean): DefaultTheme {
  return {
    ...colors(darkMode),

    grids: {
      sm: 8,
      md: 12,
      lg: 24
    },

    //shadows
    shadow1: darkMode ? '#2F80ED' : '#000',

    // media queries
    mediaWidth: mediaWidthTemplates,

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `
  }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const darkMode = useIsDarkMode()

  const themeObject = useMemo(() => theme(darkMode), [darkMode])

  return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
}

const TextWrapper = styled(Text)<{ color: keyof Colors }>`
  color: ${({ color, theme }) => (theme as any)[color]};
`

export const TYPE = {
  main(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text2'} {...props} />
  },
  link(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'primary1'} {...props} />
  },
  black(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text1'} {...props} />
  },
  body(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={16} color={'text1'} {...props} />
  },
  largeHeader(props: TextProps) {
    return <TextWrapper fontWeight={600} fontSize={24} {...props} />
  },
  mediumHeader(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={20} {...props} />
  },
  subHeader(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={14} {...props} />
  },
  blue(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'primary1'} {...props} />
  },
  yellow(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'yellow1'} {...props} />
  },
  darkGray(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text3'} {...props} />
  },
  gray(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'bg3'} {...props} />
  },
  italic(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={12} fontStyle={'italic'} color={'text2'} {...props} />
  },
  error({ error, ...props }: { error: boolean } & TextProps) {
    return <TextWrapper fontWeight={500} color={error ? 'red1' : 'text2'} {...props} />
  }
}

export const FixedGlobalStyle = createGlobalStyle`
html, input, textarea, button {
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.018em;
  font-display: fallback;
}
@supports (font-variation-settings: normal) {
  html, input, textarea, button {
    font-family: 'Inter var', sans-serif;
  }
}

html,
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

button {
  user-select: none;
}

html {
  font-size: 16px;
  font-variant: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
`
//  ${transparentize(0.9, theme.primary1)} 0%,
export const ThemedGlobalStyle = createGlobalStyle`
html {
  color: ${({ theme }) => theme.text1};
  background-color: ${({ theme }) => theme.bg2};
}

body {
  min-height: 100vh;
  background-position: 0 -30vh;
  background-repeat: no-repeat;
  background-image: ${({ theme }) => `radial-gradient(50% 50% at 50% 50%, ${transparentize(1, theme.bg1)} 100%)`};
}
`
