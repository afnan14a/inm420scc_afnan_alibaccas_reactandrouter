import { Route, useNavigate, Routes } from "react-router-dom"

// nested routes
import Offers from "./offers"

export default function Contact () {


    return (
        <div className="content">
            <h2>Address</h2>
            <p>1555 Parkland Avenue, Toronto, ON, M2J 1L4
            </p>

            <h2>Phone Number</h2>
            <p>647-555-5555
            </p>


            <Routes>
            <Route path="offers" element={<Offers />}/>
            </Routes>
        </div>
    )
}