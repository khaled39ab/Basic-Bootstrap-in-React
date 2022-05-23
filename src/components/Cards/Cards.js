import React from 'react';

const Cards = () => {
    const persons = [
        {
            "id": "628bc17421486be40229f252",
            "picture": "http://placehold.it/32x32",
            "name": "Frederick Fisher",
            "address": "838 Bayview Avenue, Rose, Florida, 5743"
        },
        {
            "id": "628bc1748a9028b9fd858021",
            "picture": "http://placehold.it/32x32",
            "name": "Ronda Lewis",
            "address": "368 Hall Street, Nicholson, Michigan, 9862"
        },
        {
            "id": "628bc174b7cb35ac62c34ca3",
            "picture": "http://placehold.it/32x32",
            "name": "Gates Huff",
            "address": "727 Guider Avenue, Trona, Indiana, 401"
        },
        {
            "id": "628bc174cdf39fbcb4d6e12f",
            "picture": "http://placehold.it/32x32",
            "name": "Jacquelyn Brennan",
            "address": "483 Crooke Avenue, Avoca, Nebraska, 669"
        },
        {
            "id": "628bc174a50a933ddab19222",
            "picture": "http://placehold.it/32x32",
            "name": "Atkins Meadows",
            "address": "531 Dinsmore Place, Maplewood, Louisiana, 1768"
        },
        {
            "id": "628bc174ee4ec5fcaa8d3609",
            "picture": "http://placehold.it/32x32",
            "name": "Holder Christensen",
            "address": "572 Ocean Court, Trexlertown, Kansas, 5198"
        }
    ]
    return (
        <div>
            <h3>Famous persons</h3>
            {
                persons.map(person => )
            }
        </div>
    );
};

export default Cards;