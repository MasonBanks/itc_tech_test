import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';

import { Button, TextField } from '@material-ui/core';

import './Search.css'

export default class Search extends Component {
  render() {
    const styles = {
      searchContainer: {
        marginTop: "100px",
        height: "auto",
        alignItems: "center",
        display: "grid",
        gridTemplateColumns: "9fr 1fr",
        gridRow: "75% auto",
      },
      searchInput: {
        width: "-webkit-fill-available",
        border: "#eeeded"
      },
      buttonContainer: {
        height: "auto"
      }
    }
    return (
      <div style={styles.searchContainer}>
        <TextField
          style={styles.searchInput}
          variant="outlined"
          placeholder="Search jobs here…"
        />
        <Button style={styles.buttonContainer}>
          <SearchIcon />
        </Button>
      </div>
    );
  }
}
