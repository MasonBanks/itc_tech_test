import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';

import './Appbar.css'
import logo from '../../media/logo192.png'

export default class Appbar extends Component {
  render() {
    const styles = {
      barContainer: {
        height: '93px',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      },
      logo: {
        height: '93px'
      },
      appbar: {
        width: "100%",
        height: "93px",
        backgroundColor: "#41a0db"
      },
      links: {
        fontFamily: "OpenSans",
        textDecoration: "none",
        fontSize: "14px",
        textAlign: "center",
        color: "#ffffff",
      },
      list: {
        listStyle: "none",
        display: 'flex',
        justifyContent: 'space-around',
        flexFlow: 'row',
        width: '750px',
      },
      listItem: {

      }
    }
    return (
      <div >
        <AppBar style={styles.appbar} >
          <div style={styles.barContainer}>
            <img src={logo} alt='company logo' style={styles.logo} />
            <div styles={styles.linkContainer}>
              <ul style={styles.list}>
                <li styles={styles.listItem}>
                  <Link style={styles.links} to="/"><p className='listItem' >Home</p></Link>
                </li>
                <li styles={styles.listItem}>
                  <Link style={styles.links} className='listItem' to="/whoweare/">
                    <p className='listItem' >Who we are</p>
                  </Link>
                </li>
                <li styles={styles.listItem}>
                  <Link style={styles.links} className='listItem' to="/whatwedo/">
                    <p className='listItem' >What we do</p>
                  </Link>
                </li>
                <li styles={styles.listItem}>
                  <Link style={styles.links} className='listItem' to="/vacancies/">
                    <p className='listItem' >Vacancies</p>
                  </Link>
                </li>
                <li styles={styles.listItem}>
                  <Link style={styles.links} className='listItem' to="/news/">
                    <p className='listItem' >News</p>
                  </Link>
                </li>
                <li styles={styles.listItem}>
                  <Link style={styles.links} className='listItem' to="/contact/">
                    <p className='listItem' >Contact Us</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </AppBar>
      </div>
    );
  }
}