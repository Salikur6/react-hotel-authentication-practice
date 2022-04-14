import React, { useEffect, useState } from 'react';
import RoomCard from '../RoomCard/RoomCard';

const RoomCards = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    return (
        <div className='container'>
            <div className="row g-3">
                {
                    rooms.map(room => <RoomCard key={room.id} room={room}></RoomCard>)
                }
            </div>
        </div>
    );
};

export default RoomCards;