import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import { consultarBDD } from '../../assets/funciones';
import './ItemDetailContainer.css'
const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos =>{
            const prod = productos.find(productoArray => productoArray.id === parseInt(id))
            setProducto(prod)
        })
    }, []);

    return (
        <div className='detail'>
            <div className=" card container itemDetail">
                <ItemDetail producto={producto}/>
            </div>
        </div>
    );
}

export default ItemDetailContainer;
