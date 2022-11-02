import { createTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomTheme {
    custom?: {
      common: {
        black: string;
        white: string;
        red: string;
        green: string;
        yellow: string;
        blue: string;
      };
      font: {
        size: {
          subText: number | string;
        };
        colors: {
          colorSubText1: string;
          colorText2: number | string;
          colorText3: string;
          colorText4: string;
          colorText5: string;
        };
      };
      background: {
        main: string;
        secondary: string;
        header: string;
        footer: string;
        badge: string;
        badgeTab: string;
        third: string;
        fourth: string;
      };
      button: {
        borderRadius: number;
        colorSecondary: string;
      };
      border: {
        borderRadiusCircular: number;
        borderColorSelected: string | number;
        borderRadiusSquare: string | number;
        borderRadius16: number;
      };
    };
  }

  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

const REM = 16;
export const SPACE = 8;

export const PADDING_SIDE = 16;

export const colors = {
  white: "#fff",
  grey: "#D9D9D9",
  grey1: "rgba(255, 255, 255, 0.7)",
  black: "#000",
  black2: "#13181E",
  purple1: "#49297E",
  purple2: "#413E89",
  purple3: "#5542C7",

  //* purple 4 + 5 almost use for thumb / track / input verfication code
  purple4: "#1F174F",
  purple5: "#2F2376",

  //* background btn secondary:
  purple6: "#3E2E9E",

  //* background footer
  purple7: "#211957",
  purple8: "#100C27",
  purple9: "#4E3AC5",

  green: "#28a745",
  green2: "#99FFD7",
  purple10: "#DCD8F3",
  red: "#f86c6b",
  yellow: "#ffc107",

  blue1: "#4286f4",
};

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920,
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          padding: 8,
          borderBottomColor: colors.purple5,
        },
        body: {
          padding: "16px 16px 16px 8px",
          borderBottomColor: colors.purple5,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          // color: colors.white,
        },
        root: {
          fontSize: "1rem",
        },
        outlinedPrimary: {
          // color: colors.white,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paperFullScreen: {
          background: `linear-gradient(180deg, #101718 0%, #3A2B92 100%, #3A2B92 100%) !important`,
        },
        paper: {
          background: colors.purple8,
          boxShadow: `0px 4px 20px ${colors.purple5}`,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          paddingTop: 50,
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: colors.purple4,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          // borderColor: colors.white,
        },
      },
    },
  },
  custom: {
    common: {
      black: colors.black,
      white: colors.white,
      red: colors.red,
      green: colors.green,
      yellow: colors.yellow,
      blue: colors.blue1,
    },
    font: {
      size: {
        subText: `${14 / REM}rem`,
      },
      colors: {
        colorSubText1: colors.grey1,
        colorText2: colors.grey,
        colorText3: colors.green2,
        colorText4: colors.purple9,
        colorText5: colors.purple10,
      },
    },
    background: {
      main: `linear-gradient(180deg, #101718 0%, #3A2B92 100%, #3A2B92 100%)`,
      secondary: colors.purple2,
      third: colors.purple8,
      fourth: colors.purple6,
      header: colors.black2,
      footer: colors.purple7,
      badgeTab: colors.purple5,
      badge: colors.purple4,
    },
    button: {
      borderRadius: 24,
      colorSecondary: colors.purple6,
    },
    border: {
      borderColorSelected: colors.green2,
      borderRadiusCircular: 20,
      borderRadiusSquare: 4,
      borderRadius16: 16,
    },
  },
  palette: {
    action: {
      active: "#6B7280",
      focus: "rgba(55, 65, 81, 0.12)",
      hover: "rgba(55, 65, 81, 0.04)",
      selected: "rgba(55, 65, 81, 0.08)",
    },
    background: {
      default: colors.white,
      paper: colors.white,
    },
    divider: "#E6E8F0",
    primary: {
      main: colors.purple3,
      light: "#64B6F7",
      dark: "#0B79D0",
      contrastText: colors.white,
    },
    secondary: {
      main: "#10B981",
      light: "#3FC79A",
      dark: "#0B815A",
      contrastText: colors.white,
    },
    success: {
      main: "#14B8A6",
      light: "#43C6B7",
      dark: "#0E8074",
      contrastText: colors.white,
    },
    info: {
      main: "#2196F3",
      light: "#64B6F7",
      dark: "#0B79D0",
      contrastText: colors.white,
    },
    warning: {
      main: "#FFB020",
      light: "#FFBF4C",
      dark: "#B27B16",
      contrastText: colors.white,
    },
    error: {
      main: "#D14343",
      light: "#DA6868",
      dark: "#922E2E",
      contrastText: colors.white,
    },
    text: {
      primary: colors.black,
      secondary: "#65748B",
      disabled: "rgba(55, 65, 81, 0.48)",
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    "none",
    "0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
    "0px 1px 2px rgba(100, 116, 139, 0.12)",
    "0px 1px 4px rgba(100, 116, 139, 0.12)",
    "0px 1px 5px rgba(100, 116, 139, 0.12)",
    "0px 1px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 6px rgba(100, 116, 139, 0.12)",
    "0px 3px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
    "0px 5px 12px rgba(100, 116, 139, 0.12)",
    "0px 5px 14px rgba(100, 116, 139, 0.12)",
    "0px 5px 15px rgba(100, 116, 139, 0.12)",
    "0px 6px 15px rgba(100, 116, 139, 0.12)",
    "0px 7px 15px rgba(100, 116, 139, 0.12)",
    "0px 8px 15px rgba(100, 116, 139, 0.12)",
    "0px 9px 15px rgba(100, 116, 139, 0.12)",
    "0px 10px 15px rgba(100, 116, 139, 0.12)",
    "0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
    "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
  ],
  typography: {
    button: {
      fontWeight: 600,
    },
    fontFamily: "Space Grotesk, sans-serif",
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.57,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.5px",
      lineHeight: 2.5,
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.66,
    },
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.375,
    },
    h2: {
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.375,
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 1.375,
    },
    h4: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.375,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.375,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.375,
    },
  },
}) as any;
