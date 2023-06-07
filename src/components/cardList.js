import { Button, Card} from "react-bootstrap"
import { Container} from "react-bootstrap"
import { Col} from "react-bootstrap"
import { Row} from "react-bootstrap"



import posts from'../data/Posts'





const cardList=({posts})=>{
   return(
    <Container>   
      <Row>
      { posts &&
          posts.map(({id , image,title,description,action})=>(
            <Col sm={4} xs={12} lg={4} key={id}>
              <Card className='mx-auto my-3'>
                <Card.Img src={image} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text></Card.Text>
                  <Button xs={12} variant='danger'>{action}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
//          {/* <Col xs={12} lg={4}>
//             <Card>
//                <Card.Img />
//                <Card.Body>
//                <Card.Title>post1</Card.Title>
//                <Card.Text>minha descrição</Card.Text>
//                <Button variant="danger">aperta aqui</Button>
//                </Card.Body>
              
//             </Card>
//          </Col>
      
    
//          <Col xs={12} lg={4}>
//             <Card>
//                <Card.Img />
//                <Card.Body>
//                <Card.Title>post1</Card.Title>
//                <Card.Text>minha descrição</Card.Text>
//                <Button variant="danger">aperta aqui</Button>
//                </Card.Body>
              
//             </Card>
//          </Col>
      
         
//          <Col xs={12} lg={4}>
//             <Card>
//                <Card.Img />
//                <Card.Body>
//                <Card.Title>post1</Card.Title>
//                <Card.Text>minha descrição</Card.Text>
//                <Button variant="danger">aperta aqui</Button>
//                </Card.Body>
              
//             </Card>
//          </Col> */}
//          </Row>
//     </Container>
//    )
// }
   )
}
export default cardList




