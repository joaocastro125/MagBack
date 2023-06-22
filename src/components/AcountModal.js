import { Button, Form, Modal } from "react-bootstrap";

const AcountModal = ({ show, handleClose }) => (

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Abra sua Conta</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicNome">
          <Form.Label>Seu Nome</Form.Label>
          <Form.Control type="email" placeholder="Seu Nome" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Seu E-mail" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>sua Cidade</Form.Label>
          <Form.Control as="select">
            <option value=''>selcione a opção</option>

            <option value='0'>Florianópolis - SC</option>
            <option value='1'>Curitiba - PR</option>
            <option value='2'>São Paulo - SP</option>
            <option value='3'>Rio de Janeiro - RJ</option>
          </Form.Control>

        </Form.Group>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Eu li e concordo com o termo de uso"
        />

      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancelar
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Abra conta
      </Button>

    </Modal.Footer>
  </Modal>

)



export default AcountModal






