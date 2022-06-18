import React from 'react'
import "./Advantages.css"

let six = require("../assets/six.png");
let seven = require("../assets/seven.png");
let eight = require("../assets/eight.png");
let nine = require("../assets/nine.png");
let ten = require("../assets/ten.png");

const items = [
    {
        image: six,
        text: 'BREAKFAST',
        subtext: "There has never been a sadness that can’t be cured with breakfast foods."
    },
    {
        image: seven,
        text: 'WIFI',
        subtext: "Get the best wifi connectivity without any interference."
    },
    {
        image: eight,
        text: 'PICKUP',
        subtext: "Ride out of town at affordable one-way and round-trip fares with us intercity travel service."
    },
    {
        image: nine,
        text: 'AIR TICKETS',
        subtext: "Flight booking, cheap air tickets of domestic & international airlines with us."
    },
    {
        image: ten,
        text: 'FREE PARKINGS',
        subtext: "Free parkings will be provided, feel like Home."
    },

];

function Advantages() {
    return (
        <>
            <div className='advantages'>
                <div className="advantages__info">
                    <div style={{}} className='adv__header'>
                        <h1>Advantages of Staying with Us</h1>
                        <h4>Sapien gravida dolor commodo.</h4>
                    </div>
                    <div style={{
                        justifyContent: "center",
                        marginTop: 5,
                    }}>
                        {items.map((item, index) => (
                            <div key={index} style={{ alignItems: 'center', marginRight: 30, display: "flex", marginLeft: '143px' }}>
                                <img
                                    src={items[index].image}
                                    className='adv__img'
                                    alt="" />
                                <div>
                                    <h5 className='adv__h5'>
                                        {items[index].text}
                                    </h5>
                                    <h5 className='adv__h'>{items[index].subtext}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Advantages