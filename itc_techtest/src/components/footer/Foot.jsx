import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../media/logo192.png'

export default class Foot extends Component {
  render() {
    const styles = {
      barContainer: {
        height: '90px',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      },
      logo: {
        height: '90px'
      },
      foot: {
        width: "100%",
        height: "90px",
        backgroundColor: "#41a0db"
      },
      links: {
        fontFamily: "OpenSans",
        textDecoration: "none",
        fontSize: "12px",
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
      logoContainer: {
        display: "flex",
        alignItems: "center",
        width: "300px",
        justifyContent: "space-evenly",
        flexFlow: "row"
      },
      copy: {
        fontSize: "12px",
        color: "#ffffff",
        fontFamily: "OpenSans"
      },
      divBar: {
        border: "1px solid #ffffff",
        height: "50px",
      }
    }
    return (
      <div>
        <footer style={styles.foot}>
          <div style={styles.barContainer}>
            <div style={styles.logoContainer}>
              <img src={logo} alt='company logo' style={styles.logo} />
              <div style={styles.divBar} />
              <p style={styles.copy}>Copyright ITC UK 201</p>
            </div>
            <div styles={styles.linkContainer}>
              <ul style={styles.list}>
                <li styles={styles.listItem}>
                  <Link style={styles.links} to="/"><p className='listItem' >Home</p></Link>
                </li>
                <li styles={styles.listItem}>
                  <Link style={styles.links} className='listItem' to="/about/">
                    <p className='listItem' >Who we are</p>
                  </Link>
                </li>
                <li styles={styles.listItem}>
                  <Link style={styles.links} className='listItem' to="/users/">
                    <p className='listItem' >What we do</p>
                  </Link>
                </li>
                <li styles={styles.listItem}>
                  <Link style={styles.links} className='listItem' to="/users/">
                    <p className='listItem' >Vacancies</p>
                  </Link>
                </li>
                <li styles={styles.listItem}>
                  <Link style={styles.links} className='listItem' to="/users/">
                    <p className='listItem' >News</p>
                  </Link>
                </li>
                <li styles={styles.listItem}>
                  <Link style={styles.links} className='listItem' to="/users/">
                    <p className='listItem' >Contact Us</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
