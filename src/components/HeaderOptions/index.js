import './index.css'
export default function HeaderOptions(){
    const options = ['Categories', 'Favorites', 'Bookcase']
    return(
        <ul className="options">
            {options.map((option)=>(
                <li className="option"><p>{option}</p></li>
            ))}
        </ul>
    )
}