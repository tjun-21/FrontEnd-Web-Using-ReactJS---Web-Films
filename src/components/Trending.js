import { Card, Col, Container, Row, Image } from "react-bootstrap"
import spider from '../assets/images/trending/spider1.jpeg'
import thor1 from '../assets/images/thor/thor1.jpg'
import iron1 from '../assets/images/iron/iron1.jpg'
import iron2 from '../assets/images/iron/iron2.webp'
import thor2 from '../assets/images/trending/thor2.jpg'
import spider2 from "../assets/images/spiderman/spider2.jpg"

const Tranding = () =>{
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">Trending Movies</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                        <Image src={spider} alt="Spiderman Movies" className="images"  />
                        <div className="bg-dark">
                            <div className="m-2 p1 text-white ">
                                <Card.Title className="text-center">SpiderMan Balek Rumah</Card.Title>
                                <Card.Text className="text-left">
                                    Spiderman Pulang kerumah 
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={iron1} alt="Spiderman Movies"  className="images" />
                        <div className="bg-dark">
                            <div className="m-2 p1 text-white ">
                                <Card.Title className="text-center">Iron Man</Card.Title>
                                <Card.Text className="text-left">
                                    Iron man berapa ya ?
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={iron2} alt="Spiderman Movies" className="images" />
                        <div className="bg-dark">
                            <div className="m-2 p1 text-white ">
                                <Card.Title className="text-center">Iron Man 3</Card.Title>
                                <Card.Text className="text-left">
                                    Nih baru Iron man 3
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={spider2} alt="Spiderman Movies" className="images" />
                        <div className="bg-dark">
                            <div className="m-2 p1 text-white ">
                                <Card.Title className="text-center">The Amazing Spiderman</Card.Title>
                                <Card.Text className="text-left">
                                    Sapiderman yang Amazing
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={thor1} alt="Spiderman Movies" className="images" />
                        <div className="bg-dark">
                            <div className="m-2 p1 text-white ">
                                <Card.Title className="text-center">Thor</Card.Title>
                                <Card.Text className="text-left">
                                    Thor Petir 
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={thor2} alt="Spiderman Movies" className="images" />
                        <div className="bg-dark">
                            <div className="m-2 p1 text-white ">
                                <Card.Title className="text-center">Thor</Card.Title>
                                <Card.Text className="text-left">
                                    Thunder And Love
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
export default Tranding