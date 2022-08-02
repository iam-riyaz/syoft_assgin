import { Route, Routes } from "react-router-dom"
import { Login } from "./Login"
import { ProductList } from "./ProductList"
import { Register } from "./Register"


export const AllRoute=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/productlist" element={<ProductList/>}></Route>
        </Routes>
        </>
    )
}