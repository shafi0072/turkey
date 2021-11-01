import React from "react";
import { Typography, Box, Button, Grid, Container } from "@mui/material";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Impression from "../../../Resorce/images/+Prototype_final.png";
import Monograph from "../../../Resorce/images/20190226_171155.png";
import AdobeStock from "../../../Resorce/images/import-379.png";
import Rightarrow from "../../../Resorce/images/right.png";
import Leftarrow from "../../../Resorce/images/leftarrow.png";
import Slider from "react-slick";

import './Besion.scss'
const Besion = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <img src={Rightarrow} />,
        prevArrow: <img src={Leftarrow} />,
      };
    return (
        <div className="services text-center">
        <Container>
          <Box my={20}>
            <div className="text-center">
            <Typography variant="h4" gutterBottom className='mb-5'>
              <span className="greenbottom"> Besoin </span>d'autres procédés de
              fabrication que l'impression 3D?
            </Typography>
            <Typography variant="p" gutterBottom color="darkgray">
              Vous avez besoin de prototypes métalliques, de composantes
              d’outillage plus robustes ou êtes en période de transition de vos
              prototypes vers votre production ? Nous pouvons vous aider en vous
              fournissant de petits volumes de production reliés à des procédés de
              fabrication métallique plus traditionnels.
            </Typography>
            </div>
  
            <Slider {...settings}>
              <div>
                <Grid container justifyContent="center">
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                    <Card
                      sx={{
                        maxWidth: 356,
                        padding: "17px",
                        height: "407px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "34px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="296px"
                        width="320px"
                        image={Impression}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className="impression-text"
                        >
                          Usinage
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Card
                      sx={{
                        maxWidth: 356,
                        padding: "17px",
                        height: "407px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "34px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="296px"
                        width="320px"
                        image={Monograph}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className="impression-text"
                        >
                          Métal en feuille
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Card
                      sx={{
                        maxWidth: 356,
                        padding: "17px",
                        height: "407px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "34px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="296px"
                        width="320px"
                        image={AdobeStock}
                        alt="green iguana"
                      />
  
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className="impression-text"
                        >
                          Découpe Laser
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid container justifyContent="center">
                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Card
                      className="servicecard"
                      sx={{
                        maxWidth: 356,
                        padding: "17px",
                        height: "407px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "34px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="296px"
                        width="320px"
                        image={Impression}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className="impression-text"
                        >
                          Usinage
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Card
                      className="servicecard"
                      sx={{
                        maxWidth: 356,
                        padding: "17px",
                        height: "407px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "34px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="296px"
                        width="320px"
                        image={Monograph}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className="impression-text"
                        >
                          Métal en feuille
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Card
                      className="servicecard"
                      sx={{
                        maxWidth: 356,
                        padding: "17px",
                        height: "407px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "34px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="296px"
                        width="320px"
                        image={AdobeStock}
                        alt="green iguana"
                      />
  
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className="impression-text"
                        >
                          Découpe Laser
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid container justifyContent="center">
                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Card
                      className="servicecard"
                      sx={{
                        maxWidth: 356,
                        padding: "17px",
                        height: "407px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "34px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="296px"
                        width="320px"
                        image={Impression}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className="impression-text"
                        >
                          Usinage
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Card
                      className="servicecard"
                      sx={{
                        maxWidth: 356,
                        padding: "17px",
                        height: "407px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "34px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="296px"
                        width="320px"
                        image={Monograph}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className="impression-text"
                        >
                          Métal en feuille
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Card
                      className="servicecard"
                      sx={{
                        maxWidth: 356,
                        padding: "17px",
                        height: "407px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "34px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="296px"
                        width="320px"
                        image={AdobeStock}
                        alt="green iguana"
                      />
  
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className="impression-text"
                        >
                          Découpe Laser
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </div>
            </Slider>
          </Box>
        </Container>
      </div>
    );
};

export default Besion;