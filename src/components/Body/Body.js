import React from 'react';
import {Grid, Row, Col, Well, Button} from 'react-bootstrap';
import './Body.css';

const Body = () => {
  return (
    <Grid className='Main'>
      <Col sm={3} md={3} className='Main__left'>
        <Well className='Main__left__well'>
          <Button>Hello</Button>
        </Well>
      </Col>

      <Col sm={8} md={8} className='Main__right'>
      </Col>
    </Grid>
  );
};

export default Body;
