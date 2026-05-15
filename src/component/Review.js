import React from 'react'
import { useState } from 'react';
import { Button, Collapse, Card } from 'react-bootstrap';

function Review({ comment }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="mt-3">
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="review-collapse"
                aria-expanded={open}
                variant="outline-primary"
                className="w-100"
            >
                {open ? 'Hide Reviews' : `Show Reviews (${comment?.length || 0})`}
            </Button>

            <Collapse in={open}>
                <div id="review-collapse" className="mt-3">
                    {comment && comment.map((a, index) => (
                        <Card key={index} className="mb-3 border-0 bg-white shadow-sm">
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h6 className="mb-0 fw-bold">{a.name}</h6>
                                    <span className="badge bg-warning text-dark">{a.rating} ★</span>
                                </div>
                                <Card.Text className="small text-muted mb-1">
                                    {a.date}
                                </Card.Text>
                                <Card.Text>
                                    "{a.comments}"
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Collapse>
        </div>
    )
}

export default Review