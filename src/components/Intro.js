import { Container, Row, Col, Button } from 'react-bootstrap';
const Intro = () =>{
    return(
        <div className='intro'>
          <Container className='text-white d-flex justify-content-center align-item-center'>
            <Row>
              <Col>
                <div className='title'>TFilms</div>
                <div className='title'>Nonton Film Gratis</div>
                <div className='title'>Ga pake bayar</div>
                <div className='introButton text-center mt-4'>
                    <Button variant='primary' href='#superhero'>Lihat list Films</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}
export default Intro