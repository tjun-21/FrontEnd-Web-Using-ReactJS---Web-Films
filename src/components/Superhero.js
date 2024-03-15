import { Card, Col, Container, Row, Image } from "react-bootstrap"
import antman from '../assets/images/superhero/antman1.jpg'
import avenger from '../assets/images/superhero/avenger1.jpg'
import camer from '../assets/images/superhero/camer1.jpg'
import gow from '../assets/images/superhero/gow1.webp'
import hulk from '../assets/images/superhero/hulk1.jpg'
import iron from "../assets/images/superhero/iron1.jpg"

const Superhero = () =>{
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">Superhero Movies</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                        <Image src={antman} alt="Spiderman Movies" className="images"  />
                        <div className="bg-dark">
                            <div className="m-2 p1 text-white ">
                                <Card.Title className="text-center">AntMan</Card.Title>
                                <Card.Text className="text-left">
                                    Antman Movies 
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={avenger} alt="Spiderman Movies"  className="images" />
                        <div className="bg-dark">
                            <div className="m-2 p1 text-white ">
                                <Card.Title className="text-center">Avenger</Card.Title>
                                <Card.Text className="text-left">
                                    Avenger movies Terbaru
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={camer} alt="Spiderman Movies" className="images" />
                        <div className="bg-dark">
                            <div className="m-2 p1 text-white ">
                                <Card.Title className="text-center">Capt. America</Card.Title>
                                <Card.Text className="text-left">
                                    Captain America nih Jon
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={gow} alt="Spiderman Movies" className="images" />
                        <div className="bg-dark">
                            <div className="m-2 p1 text-white ">
                                <Card.Title className="text-center">God Of War</Card.Title>
                                <Card.Text className="text-left">
                                    Ragnarok Mode Bull
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={hulk} alt="Spiderman Movies" className="images" />
                        <div className="bg-dark">
                            <div className="m-2 p1 text-white ">
                                <Card.Title className="text-center">Hulk</Card.Title>
                                <Card.Text className="text-left">
                                    Manusia Sawi 
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={iron} alt="Spiderman Movies" className="images" />
                        <div className="bg-dark">
                            <div className="m-2 p1 text-white ">
                                <Card.Title className="text-center">Iron Man</Card.Title>
                                <Card.Text className="text-left">
                                    Creativity 
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
export default Superhero