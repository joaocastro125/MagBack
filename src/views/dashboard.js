import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Row, Tab, Table, Tabs } from "react-bootstrap";


import '../views/dashboard.scss'

const Dashbord = () => {
  const latest = [

    { date: '22/07', description: 'SAQUE 24h 012345', value: '300,00' },
    { date: '21/07', description: 'SUPERMERCADO 02323626', value: '275,00' },
    { date: '20/07', description: 'NETFLIX 235236', value: '30,00' },
    { date: '15/07', description: 'FARMÁCIA 12125', value: '350,00' },
    { date: '15/07', description: 'FARMÁCIA 12125', value: '350,00' },
  ]
  const future = [
    { date: '22/07', description: 'SAQUE 24h 012345', value: '300,00' },
    { date: '21/07', description: 'SUPERMERCADO 02323626', value: '275,00' },
    { date: '20/07', description: 'NETFLIX 235236', value: '30,00' },
    { date: '15/07', description: 'FARMÁCIA 12125', value: '350,00' },
    { date: '15/07', description: 'FARMÁCIA 12125', value: '350,00' },

  ]

  return (
    <Container className="dashbord py-5" >
      <Row className="align-items-center">
        <Col xs={12} lg={12} >

        </Col>
        <Col xs={12} lg={3}  >
          <Row>
            <Col>
              <span className="dashboard__user-avatar ">
                <FontAwesomeIcon icon={faCircle} size="3x" />
                <FontAwesomeIcon className="dashboard__user-icon" icon={faUser} size="3x" color="#7c7d7d" />
              </span>

            </Col>
            <Col xs={8}>
              <h4>João Castro</h4>
              <p className="text-muted">ag:1234 cc:4321-5</p>
            </Col>
          </Row>
          <Button className="dashboard__button dashboard__button--active " size="lg" variant="link" block>Minha Conta</Button>
          <Button className="dashboard__button d-grid gap-2 " size="lg" variant="link" block>Pagamentos</Button>
          <Button className="dashboard__button  d-grid gap-2" size="lg" variant="link" block>Extratos</Button>
        </Col>
        <Col xs={12} lg={4} className="mt-lg-5 pt-lg-4">
          <h3 className="mb-4">Conta Corrente</h3>
          <h6>
            <small><strong>Saldo da conta corrente</strong></small>
          </h6>
          <h4 className="text-success mb-4">
            <small>R$</small>3.500<small>,00</small>
          </h4>
          <h6>
            <small><strong>Conta Especial</strong></small>
          </h6>
          <p className="mb-0">Limite disponível</p>
          <p className="mb-4">R$ 5000,00</p>
          <Button variant="secondary">ver Extrato</Button>
        </Col>
        <Col xs={12} lg={5} className="mt-lg-5 pt-lg-5">

          <Tabs defaultActiveKey="lastestDeposits">
            <Tab eventKey="latest" title="Útimos lançamentos">
              <Table striped bordered hover className="dasboard__table">
                <div className="mb-20"></div>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  {latest.map(({ date, description, value }) => (
                    <tr>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>


                    </tr>

                  ))}



                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="future" title="Laçamentos Futuros">
              <Table striped bordered hover className="" >

                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  {future.map(({ date, description, value }) => (
                    <tr>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>


                    </tr>

                  ))}



                </tbody>
              </Table>

            </Tab>

          </Tabs>

        </Col>

      </Row>
    </Container>
  )



}



export default Dashbord;