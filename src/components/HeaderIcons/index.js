import './index.css'
import profile from '../../images/profile.svg'
import cart from '../../images/cart.svg'

export default function HeaderIcons(){
    
    const icons = [profile, cart]
    
        return (
            <ul className='icons'>
                { icons.map( (icon) => (
                <li className='icon'><img src={icon}></img></li>
                )) }
            </ul>
        )
    }
