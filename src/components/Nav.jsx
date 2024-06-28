import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "antd/es/layout/layout";

const Nav = () =>{
return(<>
<Header></Header>
<Outlet/>
{/* <Footer/> */}
</>);


}
export default Nav;