import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
    const { name, img, price } = room;
    return (
        <div className='col-md-6 col-lg-4 col-sm-12'>
            <Card>
                <Card.Img variant="top" style={{ height: '225px' }} src={img} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{name}</Card.Title>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Link to='/checkout'><Button variant="primary" className='fw-bold'>Checkout</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RoomCard;