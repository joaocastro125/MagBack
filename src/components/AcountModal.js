import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const AcountModal=({show,handleClose})=>{
    return (
        <Modal show={show} onHide={()=>handleClose()} >
            <Modal.Header closeButton>
              <Modal.Title>Abra sua conta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
             <Form>
                <Form.Group>
                    <Form.Label>Seu Nome</Form.Label>
                    <Form.Control type="text" placeholder="Seu Nome" />
                </Form.Group>
               <Form.Group>
                    <Form.Label>Seu Email</Form.Label>
                    <Form.Control type="text" placeholder="Seu Email" />
                </Form.Group>
             </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>handleClose()}>Cancelar</Button>
                <Button variant="primary" onClick={()=>handleClose()}>Criar Conta</Button>

            </Modal.Footer>
        </Modal>
    )

}


export default AcountModal