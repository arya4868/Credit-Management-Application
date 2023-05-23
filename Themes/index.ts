import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      dateText: string;
      DividerBorder: string;
      CashButtonBackground: string;
      TextColor: string;
      DarkTextColor: string;
      ReviewButtonBackground: string;
      SlideStyleBorder: string;
      OrganismBorder: string;
      PageBackground: string;
      OrganismBackground: string;
      UnselectedTrackColor: string;
      SliderBorderColor: string;
      TableDataHeadingBackground: string;
    };
  }
  interface ThemeOptions {
    colors?: {
      dateText?: string;
      DividerBorder?: string;
      CashButtonBackground?: string;
      TextColor?: string;
      DarkTextColor?: string;
      ReviewButtonBackground?: string;
      SlideStyleBorder?: string;
      OrganismBorder?: string;
      PageBackground?: string;
      OrganismBackground?: string;
      UnselectedTrackColor?: string;
      SliderBorderColor?: string;
      TableDataHeadingBackground?: string;
    };
  }
}

const theme = createTheme({
  colors: {
    dateText: "#c9c8cc",
    DividerBorder: "1px solid #413F4D",
    CashButtonBackground: "#2d2d30",
    TextColor: "#E8E7F0",
    DarkTextColor: "#A5A5A6",
    ReviewButtonBackground: "#6c5dd3",
    SlideStyleBorder: "#2D2D30",
    OrganismBorder: "1px solid #28272b",
    OrganismBackground: "#201f24",
    PageBackground: "#19181c",
    UnselectedTrackColor: "#3a3a3d",
    SliderBorderColor: "#B4A9FF",
    TableDataHeadingBackground: "#262529",
  },

  palette: {
    primary: {
      main: "#0072C6",
    },
    secondary: {
      main: "#9BC2E6",
    },
    background: {
      default: "#F7F7F7",
    },
    text: {
      primary: "#333333",
    },
  },
  typography: {
    h1: {
      fontFamily: "Gilroy",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "28px",
      lineHeight: "34px",
      letterSpacing: "-0.005em",
    },
    h2: {
      fontFamily: "Gilroy",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "29px",
      letterSpacing: "-0.005em",
      color: "#E8E7F0",
    },
    h3: {
      fontFamily: "Gilroy",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "150%",
    },
    h4: {
      fontFamily: "Gilroy",
      fontSize: "20px",
      fontWeight: "bold",
      color: "#333333",
    },
    h5: {
      fontFamily: "Gilroy",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "30px",
    },
    h6: {
      fontFamily: "Gilroy",
      fontSize: "15px",
      fontWeight: "bold",
      color: "#333333",
    },
    body1: {
      fontFamily: "Gilroy",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "140%",
    },
    body2: {
      fontFamily: "Gilroy",
      fontSize: "10px",
      fontWeight: "normal",
      color: "#666666",
    },
    button: {
      fontFamily: "Gilroy",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "19px",
      textTransform: "none",
    },
    // subtitle1: {
    //   fontFamily: 'Gilroy',
    //   fontSize: "10px",
    //   fontWeight: "normal",
    //   color: "#666666",
    // },
    subtitle1: {
      fontFamily: "Gilroy",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "36px",
      lineHeight: "42px",
      letterSpacing: "-0.015em",
    },
    subtitle2: {
      fontFamily: "Gilroy",
      fontSize: "10px",
      fontWeight: "normal",
      color: "#666666",
    },
  },
  // spacing: {
  //   sx: 8,
  //   sm: 16,
  //   md: 24,
  // },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          "@font-face": {
            fontFamily: "Gilroy",
            src: `url('../src/Fonts/Gilroy-Regular.woff') format('woff')`,
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
        containedPrimary: {
          backgroundColor: "#0072C6",
          color: "#FFFFFF",
        },
        containedSecondary: {
          backgroundColor: "#FFFFFF",
          color: "#0072C6",
        },
        outlinedPrimary: {
          color: "#0072C6",
        },
      },
      defaultProps: {
        disableElevation: true,
        size: "large",
      },
      // variants: [
      //   {
      //     props: { variant: "contained", color: "primary" },
      //     style: {
      //       borderRadius: "4px",
      //       padding: "8px 16px",
      //       fontSize: "16px",
      //     },
      //   },
      //   {
      //     props: { variant: "contained", color: "secondary" },
      //     style: {
      //       borderRadius: "4px",
      //       padding: "8px 16px",
      //       fontSize: "16px",
      //     },
      //   },
      //   {
      //     props: { variant: "outlined", color: "primary" },
      //     style: {
      //       borderRadius: "4px",
      //       padding: "8px 16px",
      //       fontSize: "16px",
      //     },
      //   },
      //   {
      //     props: { variant: "text", color: "primary" },
      //     style: {
      //       fontSize: "16px",
      //     },
      //   },
      // ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: "16px",
        },
      },
    },
  },
});
export default theme;
