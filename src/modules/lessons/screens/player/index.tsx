import { Platform } from "react-native"
import { PlayerWindows } from "../../platforms/windows/player";
import { PlayerMobile } from "../../platforms/mobile/player"




export function Player() {
   if(Platform.OS === "windows"){
     return <PlayerWindows/> 
   }else{
     return <PlayerMobile/>
   }
}