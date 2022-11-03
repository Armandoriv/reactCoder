import React from 'react';
import './itemlistcontainer.css'

const ItemListContainer = () => {
    return (
        <section className='container intro'>
            <div className='intro1'>
                <h1 className='Titulo animate__animated animate__fadeInDown'>¡Bienvenido!</h1>
                <h2 className='Subtitulo animate__animated animate__fadeInUp animate__delay-1s'>Te echamos de menos</h2>
                <button type="button" className='btn btn-success animate__animated animate__fadeIn animate__delay-2s'><img className='mont' src="./img/montana.png" alt="" />Ir de compras</button>
            </div>
        </section>
    );
}

export default ItemListContainer;
