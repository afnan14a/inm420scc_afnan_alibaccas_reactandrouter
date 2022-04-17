import { Route, useParams, Routes } from "react-router-dom"

// nested routes
import Offers from "./offers"

export default function projectDetails() {
    // const { id } = useParams()

    return (
        <div className="content">
            <div>Test 123</div>
            {/* <div className="project">
                <div className="image">
                    <img src="https://via.placeholder.com/520x460" alt=""/>
                </div>
                <div className="details">
                    <h2>project - { id }</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                    qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div> */}
            {/* <Routes>
                <Route path="offers" element={<Offers />} />
            </Routes> */}
        </div>
    )
}
    

