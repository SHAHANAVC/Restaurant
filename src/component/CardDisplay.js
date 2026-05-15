import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CardDisplay({data}) {
  return (
    <div className="h-100">
      <Link to={`/view/${data.id}`} style={{textDecoration:'none'}} className="h-100 text-dark">
         <Card className="h-100 shadow-sm transition-all hover-shadow">
      <Card.Img variant="top" style={{height:'200px', objectFit: 'cover'}} src={data.photograph} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-truncate">{data.name}</Card.Title>
        <Card.Text className="text-muted flex-grow-1">{data.address}
        </Card.Text>
        <div className="mt-auto fw-bold text-primary">
          {data.neighborhood}
        </div>
      </Card.Body>
    </Card>
    </Link>
   </div>
  )
}

export default CardDisplay