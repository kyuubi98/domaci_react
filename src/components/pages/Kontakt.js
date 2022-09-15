import React from 'react';
import KontaktForma from '../../components/KontaktForma';

function Kontakt(){
    const kontakt={
        telefon: "065/4601397"
    }
    return(
        <div className="hero-container">
        <video src='/videos/video-2.mp4' autoPlay loop muted/>
        <div className="container" style={{marginTop: 2 + 'em'}}>
            <h2>Tačan naziv traženog dela napisati u opisu, kako bi na svim lokacijama mogla biti potražena:</h2>
            <KontaktForma/>
            <p>Takođe, možete nas pozvati na broj {kontakt.telefon} </p>
            <br></br>
        </div>
        </div>
    )
}

export default Kontakt;