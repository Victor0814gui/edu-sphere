import { Platform } from "react-native";


export const windowsFonts= {
  Roboto: {
    Black:"../../src/shared/fonts/Roboto/Roboto-Black.ttf#Roboto",
    BlackItalic: "../../src/shared/fonts/Roboto/Roboto-BlackItalic.ttf#Roboto",
    Bold: "../../src/shared/fonts/Roboto/Roboto-Bold.ttf#Roboto",
    BoldItalic: "../../src/shared/fonts/Roboto/Roboto-BoldItalic.ttf#Roboto",
    Italic: "../../src/shared/fonts/Roboto/Roboto-Italic.ttf#Roboto",
    Light: "../../src/shared/fonts/Roboto/Roboto-Light.ttf#Roboto",
    LightItalic: "../../src/shared/fonts/Roboto/Roboto-LightItalic.ttf#Roboto",
    Medium: "../../src/shared/fonts/Roboto/Roboto-Medium.ttf#Roboto",
    MediumItalic: "../../src/shared/fonts/Roboto/Roboto-MediumItalic.ttf#Roboto",
    Regular: "../../src/shared/fonts/Roboto/Roboto-Regular.ttf#Roboto",
  },
  Poppins:{
    Medium: "../../src/shared/fonts/Poppins/Poppins-Medium.ttf#Poppins",
    Ligth: "../../src/shared/fonts/Poppins/Poppins-Light.ttf#Poppins",
    Bold: "../../src/shared/fonts/Poppins/Poppins-Bold.ttf#Poppins"
  }
}




export const FONTS = Platform.OS === "windows" ? {
  Roboto:{
    Black: "Roboto-Black.ttf#Roboto",
    BlackItalic: "Roboto-BlackItalic.ttf#Roboto",
    BoldItalic: "Roboto-BoldItalic.ttf#Roboto",
    Light: "Roboto-Light.ttf#Roboto",
    LightItalic: "Roboto-LightItalic.ttf#Roboto",
    Medium: "Roboto-Medium.ttf#Roboto",
    MediumItalic: "Roboto-MediumItalic.ttf#Roboto",
    Regular: "Roboto-Regular.ttf#Roboto",
  },
  Poppins:{
    Medium:"Poppins-Medium.ttf#Poppins",
    Ligth:"Poppins-Light.ttf#Poppins",
    Bold:"Poppins-Bold.ttf#Poppins",
  }
} : {
  Roboto:{
    Black: "Roboto-Black",
    BlackItalic: "Roboto-BlackItalic",
    BoldItalic: "Roboto-BoldItalic",
    Light: "Roboto-Light",
    LightItalic: "Roboto-LightItalic",
    Medium: "Roboto-Medium",
    MediumItalic: "Roboto-MediumItalic",
    Regular: "Roboto-Regular",
  },
  Poppins:{
    Medium:"Poppins-Medium",
    Ligth:"Poppins-Light",
    Bold:"Poppins-Bold",
  }
}
