import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Review({comment}) {
    console.log(comment);
    const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="dark"
      >
        Reviews
      </Button>
      
      <Collapse in={open}>
      
        <div id="example-collapse-text">
        {comment.map(a=>(
            <div>
                <h3>{a.name}</h3>
                <p>{a.comments}</p>
                </div>
        
        ))}
        </div>  
            </Collapse>

      
    </div>
  )
}

export default Review