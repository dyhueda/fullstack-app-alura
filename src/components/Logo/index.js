import './index.css'
import logo from '../../images/logo.svg'

export default function Logo () {
    return(
        <div className='logo'>
            <img className='logo-img' src={logo} alt='logo'></img>
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}