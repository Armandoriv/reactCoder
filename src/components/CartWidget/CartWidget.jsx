import { Link } from "react-router-dom";
import './CartWidget.css'
const CartWidget = () => {
    return (
        <>
            <ul className='navbar-nav me-auto'>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart"> 
                        <i class="bi bi-cart4"></i>
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default CartWidget;
