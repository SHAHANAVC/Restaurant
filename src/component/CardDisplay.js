import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CardDisplay({data}) {
  return (
    <div style={{marginTop:'4%',marginLeft:'2%'}}>
      <Link to={`/view/${data.id}`} style={{textDecoration:'none'}}>
         <Card bg="dark" text="white" style={{ width: '100%', maxWidth: '18rem', height:"25rem", margin: '0 auto' }}>
      <Card.Img variant="top" style={{height:'35vh'}} src={data.photograph} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.address}
        </Card.Text>
        {data.neighborhood}
      </Card.Body>
    </Card>
    </Link>
   </div>
  )
}

export default CardDisplay