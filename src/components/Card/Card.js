import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Card.css';

//<Button variant="primary" onClick={alertar}>Detalles</Button>

const MyCard = (props) => {
    return (
        <Card  border="info" style={{ width: '18rem' }} className="card">
        <Card.Img variant="top" src={props.heroe.img} />
        <Card.Body>
            <Card.Title>{props.heroe.nombre}</Card.Title>
            <Card.Text>
            Edad: {props.heroe.edad}
            </Card.Text>
            <Card.Text>
            Detalles: {props.heroe.detalles}
            </Card.Text>
        </Card.Body>
        </Card>
    )
}

export default MyCard;