import React from 'react'
import { Card } from 'react-bootstrap';

function Messages() {
    return (
        <div className="dashboard" style={{ display: "felx", alignitems: "center", justifycontent: "center", padding: "100px", flexDirection: "column" }}>

            <Card style={{ height: "auto", width: "100%", padding: "0px", marginBottom: "50px" }} className='cardshadow'>
                <Card.Body style={{
                    display: "flex", justifyContent: "space-between",
                    alignitems: "center",
                }}>
                    <div className='center'>
                        <p alt="" style={{ marginTop: "-70px", marginLeft: "-30px", backgroundColor: "black", padding: "6px", borderRadius: "50%", color: "White", width: "50px", height: "50px", display: "flex", alignItems: "center" }} >NEW</p>
                        <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Payment Cards</Card.Title>
                    </div>
                    <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>ADD ANOTHER PAYMENT CARD</Card.Title>
                </Card.Body>
                <Card.Body style={{ display: "flex", alignitems: "center" }}>
                    <div>
                        <Card.Title style={{ fontWeight: "400", marginLeft: "2px", fontSize: "medium" }}>GOVERNMENT PROVIDES RELIEF TO AGRICULTURISTS WITH INCLUSION OF TUBE WELL … Delhi Jal Board (DJB) presents comprehensive plan to clean and restore the</Card.Title>
                    </div>
                </Card.Body>
            </Card>


            <Card style={{ height: "auto", width: "100%", padding: "0px", marginBottom: "50px", border: "2px dashed black" }} className='cardshadow'>
                <Card.Body style={{
                    display: "flex", justifyContent: "space-between",
                    alignitems: "center",
                }}>
                    <div className='center'>
                        <p alt="" style={{ marginTop: "-70px", marginLeft: "-30px", backgroundColor: "black", padding: "6px", borderRadius: "50%", color: "White", width: "50px", height: "50px", display: "flex", alignItems: "center" }} >NEW</p>
                        <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Payment Cards</Card.Title>
                    </div>
                    <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>ADD ANOTHER PAYMENT CARD</Card.Title>
                </Card.Body>
                <Card.Body style={{ display: "flex", alignitems: "center", padding: "0px", marginLeft: "-2px", marginBottom: "10px" }}>
                    <div>
                        <Card.Title style={{ fontWeight: "600", marginLeft: "0px", backgroundColor: "black", color: "white", padding: "21px" }}>Induslnd Bank Credit Card ****328784</Card.Title>
                    </div>
                </Card.Body>
            </Card>

            <Card style={{ height: "auto", width: "100%", padding: "0px", marginBottom: "50px", border: "2px dashed black" }} className='cardshadow'>
                <Card.Body style={{
                    display: "flex", justifyContent: "space-between",
                    alignitems: "center",
                }}>
                    <div className='center'>
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/house-of-cards.png" alt="" style={{ height: "32px" }} />
                        <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Payment Cards</Card.Title>
                    </div>
                    <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>ADD ANOTHER PAYMENT CARD</Card.Title>
                </Card.Body>
                <Card.Body style={{ display: "flex", alignitems: "center", padding: "0px", marginLeft: "-2px", marginBottom: "10px" }}>
                    <div>
                        <Card.Title style={{ fontWeight: "600", marginLeft: "0px", backgroundColor: "black", color: "white", padding: "21px" }}>Induslnd Bank Credit Card ****328784</Card.Title>
                    </div>
                </Card.Body>
            </Card>

            <Card style={{ height: "auto", width: "100%", padding: "0px", marginBottom: "50px" }} className='cardshadow'>
                <Card.Body style={{
                    display: "flex", justifyContent: "space-between",
                    alignitems: "center",
                }}>
                    <div className='center'>
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/house-of-cards.png" alt="" style={{ height: "32px" }} />
                        <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Payment Cards</Card.Title>
                    </div>
                    <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>ADD ANOTHER PAYMENT CARD</Card.Title>
                </Card.Body>
                <Card.Body style={{ display: "flex", alignitems: "center" }}>
                    <div>
                        <Card.Title style={{ fontWeight: "400", marginLeft: "2px", fontSize: "medium" }}>GOVERNMENT PROVIDES RELIEF TO AGRICULTURISTS WITH INCLUSION OF TUBE WELL … Delhi Jal Board (DJB) presents comprehensive plan to clean and restore the</Card.Title>
                    </div>
                </Card.Body>
            </Card>

        </div >
    )
}

export default Messages