import { Link } from "react-router-dom"

export default function Projects() {
    return ( 
        <div className="content">
            <h2>Upcoming Projects</h2>
            <h3>2 Bed | 1 Bath</h3>
            <div className="projects">
                {[0,1,2,3].map(p => (
                    <div key={p}>
                        <Link to={`/projects/${p}`}>
                            <img src="https://via.placeholder.com/250x150" alt="project" />
                        </Link>
                        </div>
                ))}
            </div>
            <h3>1 Bed | 1 Bath</h3>
            <div className="projects">
                {[4,5,6,7].map(p => (
                    <div key={p}>
                        <Link to={`projects/${p}`}>
                            <img src="https://via.placeholder.com/250x150" alt="project" />
                        </Link>
                        </div>
                ))}
            </div>
            <h3>1+1 Bed | 1 Bath</h3>
            <div className="projects">
                {[8,9,10,11].map(p => (
                    <div key={p}>
                        <Link to={`projects/${p}`}>
                            <img src="https://via.placeholder.com/250x150" alt="project" />
                        </Link>
                        </div>
                ))}
            </div>
        </div>
    )
}