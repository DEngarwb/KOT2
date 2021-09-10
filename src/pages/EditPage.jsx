
import React, { useContext, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { productsContext } from '../contexts/ProductsContext';

const EditPage = () => {
    const { getProductsToEdit, productToEdit, saveEditedProduct } = useContext(productsContext)
    const { key } = useParams()
    useEffect(() => {
        getProductsToEdit(key)
    }, [])
    const [editProduct, setEditProduct] = useState(productToEdit)
    useEffect(() => {
        setEditProduct(productToEdit)
    }, [productToEdit])

    function handleInputs(e) {
        let obj = {
            ...editProduct,
            [e.target.name]: e.target.value
        }
        setEditProduct(obj)
    }
    const history = useHistory()
    return (
        <div>
            <h2>Edit Page</h2>
            {
                editProduct ? (
                    <>
                        <Form.Control onChange={handleInputs} name="title" value={editProduct.title} type="text" />
                        <Form.Control onChange={handleInputs} name="price" value={editProduct.price} type="text" />
                        <Form.Control onChange={handleInputs} name="photo" value={editProduct.photo} type="text" />
                        <Form.Control onChange={handleInputs} name="description" value={editProduct.description} type="text" />
                        <Button variant="outline-success" onClick={() => {
                            saveEditedProduct(editProduct)
                            history.push('/')
                        }}>сохрнить</Button>
                    </>
                ) : (
                    <h2>loading◌</h2>
                )
            }

        </div>
    );
};

export default EditPage;