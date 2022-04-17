import { Route, useNavigate, Routes } from "react-router-dom"

// nested routes
import Offers from "./offers"

export default function About () {
    const navigate = useNavigate()


    return (
        <div className="content">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                qui officia deserunt mollit anim id est laborum.
            </p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                qui officia deserunt mollit anim id est laborum.
            </p>

            <button onClick={() => navigate('/projects')}>See our projects</button>

            <Routes>
            <Route path="offers" element={<Offers />}/>
            </Routes>
        </div>
    )
}