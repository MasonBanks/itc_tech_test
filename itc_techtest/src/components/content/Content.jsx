import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import './Content.css'

import Form from '../form/Form';
import Search from '../search/Search';

export default class Content extends Component {
  render() {
    const styles = {
      content: {
        backgroundColor: '#fffff',
        height: '100vh',
        paddingTop: "130px",
        paddingLeft: "100px",
        paddingRight: "100px",
      },
      title: {
        fontSize: "50px",
        color: "#41a0db",
        fontWeight: "300",
        width: "560px",
        height: "68px"
      },
      desc: {
        fontSize: "12px",
        lineHeight: "1.83",
        color: "#4d4d4d",
        paddingTop: "20px",
        marginBottom: "20px"
      }
    }
    return (
      <Container fixed>
        <Typography component="div" style={styles.content} className="content">
          <div style={styles.title}>
            Vacancies
          </div>
          <div style={styles.desc}>
            To get a feeling for what it's like to work for us then please visit Who We Are or see what we've been up to with ITC News. Due to continued growth, we currently have the following vacancy:
          </div>
          <Form />
          <Search />
        </Typography>
      </Container>
    );
  }
}
