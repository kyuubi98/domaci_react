import React from 'react';
import '../../App.css';
import './Onama.css';

import {OnamaItems}  from "../OnamaItems";
function Onama() {
    return (
        
       <div className="hero-container">
       <video src='/videos/video-1.mp4' autoPlay loop muted/>
            
        <div>
        <div className="container">
        <center><h1>Sve što želiš da znaš o nama...</h1></center>
        <br></br><br></br><br></br>
       <h2><center>Izdavačka kuća Digitalne Knjige – eKnjižara su kao lider u elektronskoj izdavačkoj
        delatnosti u Srbiji omogućile svim domaćim autorima da objave svoje e-knjige i 
        ostvare globalan uspeh i prisustvo u najvećim prodavnicama knjiga na svetu. </center></h2>
        <div><h2><center>
            
        <i><b><br></br>Neka i vaša priča postane svetski bestseler!</b></i></center></h2></div>  
        <div><h3><center> <br></br>Digitalno izdavanje knjiga predstavlja oblast online izdavaštva koje se odnosi
            na publikaciju elektronskih knjiga, magazina, članaka kao i razvoj digitalnih
            biblioteka i kataloga. Istraživanja ukazuju da će čak polovina cirkulacije
            svih magazina i novina biti putem digitalne distribucije do kraja 2015.
            godine, a da će se polovina svih čitanja u SAD-u obavljati bez papira.
            Što ukazuje da bi izdavači trebalo dobro da razmisle o novoj mogućnosti 
            ponude svojih knjiga.

            Savremeni svet diktira nove trendove u svim sferama života. 
            Nedostatak vremena kupce tera na kupovinu od kuće, a sve više njih
            pribegava brzim, instant informacijama. Dostupnost proizvoda predstavlja
            bitnu vrlinu 21. veka.
            </center></h3></div>
        </div>
        <div>
        <div className="container">
            <div className="row">

                {OnamaItems.map((item, index) => {
                    return (
                        <div className="content col-sm-4 text-center" key={index}>
                          <img className="img-responsive" src={item.url} alt="" width="100%"/>
                           <div>{item.opis}</div>
                        </div>
                    )
                })}
            </div>

        
            </div>
       </div>
  </div></div>
    );


}

export default Onama;