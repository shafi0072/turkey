import React from 'react';
import Img1 from '../../../Resorce/images/Group 8.png';
import './About.scss';

const Who = () => {
    return (
        <div className="py-4 about-container">
            <div className="row">
                <div className="col-md-7">
                    <div>
                        <h2><span className="bottom-border">QUI NOUS</span> SOMMES</h2>
                        <p>Mekanisk se distingue par son service professionnel et personnalisé en conception et impression 3D, vous permettant d'obtenir les pièces industrielles et fonctionnelles requises pour vos projets.
                        <br/>
                        <br/>
                        Passionnés par les projets de développement de produits en tout genre, nous pouvons vous supporter de la phase conceptuelle jusqu’à la production de votre produit.
                        <br/>
                        <br/>
                        Que vous souhaitiez valider votre concept préliminaire auprès de clients potentiels, réduire vos coûts ou votre « time to market », valider l'ergonomie de votre conception, ou confirmer la faisabilité de votre projet, nous pouvons vous aider à profiter des solutions innovantes disponibles. Si nous n'avons pas la technologie dont vous avez besoin, vous pouvez profitez de nos contacts avec nos fournisseurs de confiance, tout en respectant vos coûts et échéanciers!</p>
                    </div>
                </div>
                <div className="col-md-5">
                    <div>
                        <img src={Img1} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Who;