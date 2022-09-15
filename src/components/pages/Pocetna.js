import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import { ImgItems } from "../ImgItems";
import './Pocetna.css';
import Sat from '../Sat';


function Pocetna() {
    return (
        <div className="hero-container">
       <video src='/videos/video-3.mp4' autoPlay loop muted/>
      
    <div>
    <div className="container">
       
        <center> <Sat></Sat><h2>Pisci čija dela svi volimo da čitamo:</h2></center>
        </div>
      
        <div className="container">
            <div className="row">

                {ImgItems.map((item, index) => {
                    return (
                        <div className="content col-sm-4 text-center" key={index}>
                            <img className="img-responsive" src={item.url} alt="" width="100%"/>
                            <div>{item.opis}</div>
                            <Button onClick={() => { alert('Spisak knjiga izabranog pisca poslat je na e-mail adresu ulogovanog korisnika: ' + item.opis) }} buttonStyle='btn--primary'>Pošalji spisak dostupnih knjiga</Button>
                        </div>
                    )
                })}
            </div>

        </div>
    </div>
    </div>
    
    );


}

export default Pocetna;