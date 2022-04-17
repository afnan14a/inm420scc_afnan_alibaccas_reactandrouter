import { useState } from "react"

export default function Offers() {
    const [items] = useState([
        { title: 'The Dupont Condos', price: 925000 },
        { title: 'Southport in Swansea Square Condos', price: 999000 },
        { title: 'ANX Condos', price: 859900 },
    ])

    return (
        <div>
            <h3>New Releases</h3>
            <div className="offers">
                {items.map(item => (
                    <div key={item.title}>
                        <img src="https://via.placeholder.com/350x200" alt="project" />
                        <h4>{item.title}</h4>
                        <p>${item.price}</p>
                        </div>
                ))}
            </div>
        </div>
    )
}