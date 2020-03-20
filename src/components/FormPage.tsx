import React, {CSSProperties} from 'react';
import { Container } from '@material-ui/core';
import TextForm from './TextForm'
import Payment from './Payment'


export default function BasicTextFields() {

  return (
    <Container maxWidth="sm" >
        <TextForm/>
        <Payment/>
    </Container>
  );
}