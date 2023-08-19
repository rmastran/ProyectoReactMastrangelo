import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState, useContext } from "react";
import { db } from "../../services/firebase";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
    const [user, setUser] = useState({});
    const [validateEmail, setValidateEmail] = useState("");
    const [orderId, setOrderId] = useState("");
    const {cartArray, total, clearCart} = useContext(CartContext);
    const datosComprador = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const finalizarCompra = (e) => {
        e.preventDefault()
        if(!user.name && !user.phone){
            alert("Los compos son obligatorios")
        }else{
            let order = {
                user,
                item: cartArray,
                total: total(),
                date: serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas, order)
            .then((res)=> {
                setOrderId(res.id)
                clearCart()
            })
            .catch((error)=> console.log(error))
        }
    }
    return(
        <div>
            {orderId !== "" 
            ?<div>
                <h2>Felicitaciones! Tu orden fue generada con éxito!</h2>
                <h5>Su id de registro es: {orderId}</h5>
            </div>
            :<div style={{textAlign: "center"}}>
            <h2>Terminar Compra</h2>
            <h5>Por favor llenar con sus datos</h5>
            <form onSubmit={finalizarCompra}>
                <div className="mb-3">
                    <label className="form-label">Nombre Completo</label>
                    <input style={{textAlign: "center"}} className="form-control" onChange={datosComprador} type="text" placeholder="Nombre y Apellido" name="name" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Número de Teléfono</label>
                    <input style={{textAlign: "center"}} className="form-control" onChange={datosComprador} type="number" placeholder="+598899963" name="phone" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Dirección de e-mail</label>
                    <input style={{textAlign: "center"}} className="form-control" onChange={datosComprador} type="email" placeholder="hola@hola.com" name="mail"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Repita dirección de e-mail</label>
                    <input style={{textAlign: "center"}} className="form-control" type="email" placeholder="hola@hola.com" name="mail" onChange={((e)=>setValidateEmail(e.target.value))}/>
                </div>
                <button className="btn btn-dark" type="submit" disabled={validateEmail !== user.mail}>Generar Orden</button>
            </form>
        </div>}
        </div>
        
    )
}

export default Checkout;