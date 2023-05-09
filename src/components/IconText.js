import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconText = ({ icon, children  ,className,color,click,key}) => {
  return (
    <Row className='d-flex align-items-center'onClick={()=>click(key)}
    >
      <Col lg={2} className='d-flex justify-content-center'>
        <FontAwesomeIcon icon={icon} color={color} className={className}  size='2x'/>
      </Col>

      <Col>
        {children }
        
      </Col>
    </Row>
  )
};

export default IconText;