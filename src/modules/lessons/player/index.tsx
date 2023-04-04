import { Platform } from "react-native"
import { PlayerWindows } from "./windows"
import { PlayerMobile } from "./mobile"




export function Player() {
   if(Platform.OS === "windows"){
     return <PlayerWindows/> 
   }else{
     return <PlayerMobile/>
   }
}