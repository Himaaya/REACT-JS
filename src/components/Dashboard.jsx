import { StrictMode } from "react";
import App from "../App";
import Card from "./Card";
function Dashboard({name,occ,nameChange}){
    return(
        <Card fullname={name}occ={occ}nameChange={nameChange}/>
   )
}
export default Dashboard