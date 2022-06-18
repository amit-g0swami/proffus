import React from 'react'
import { Container } from 'react-bootstrap'
import './Brands.css'
import i1 from '../../../images/image 3.png'
import i4 from '../../../images/image 4.png'
import i5 from '../../../images/image 5.png'
import i6 from '../../../images/image 6.png'
import i9 from '../../../images/image 9.png'
import i10 from '../../../images/image 10.png'
import i11 from '../../../images/image 11.png'
import i12 from '../../../images/image 12.png'
import i13 from '../../../images/image 13.png'
import i14 from '../../../images/image 14.png'
import i15 from '../../../images/image 15.png'


function Brands() {
    return (
        <Container>
            <div className="big-text__heading">
                <h2 style={{ color: "#ee9776" }}>Who Trust Us ?</h2>
            </div >

            <div className="brow">
                <img src={i1} />
                <img src={i4} />
                <img src={i5} />
                <img src={i6} />
                <img src={i9} />
                <img src={i10} />
            </div>
            <div className="brow">
                <img src={i11} />
                <img src={i12} />
                <img src={i13} />
                <img src={i14} />
                <img src={i15} />
            </div>
        </Container >
    )
}

export default Brands
