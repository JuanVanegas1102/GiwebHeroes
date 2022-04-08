import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";

const DeleteHero = ({onSubmit}) => {
    const [heroe, setHeroe] = useState({
        nombre: "",
        edad: "",
        img: "",
        detalles: ""
    });

    const handleChange = (e) => {
        setHeroe({
            ...heroe,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1>Borrar Heroe</h1>
            <Form>
            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                    name='nombre'
                    type="text"
                    placeholder="Nombre del heroe" 
                    value={heroe.nombre}
                    onChange={handleChange}
                    />
            </Form.Group>
            <Button variant="primary" type="button" onClick={() => onSubmit(heroe)}>
                Borrar
            </Button>
            </Form>
        </div>
    );
}

export default DeleteHero;