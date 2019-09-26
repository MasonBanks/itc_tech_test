import React, { Component } from 'react';
import { TextField, FormHelperText, Button } from '@material-ui/core';

export default class Form extends Component {
  render() {
    const styles = {
      formContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridRow: "auto auto",
        gridColumnGap: "70px",
        gridRowGap: "70px",
        fontSize: "14px"
      },
      descContainer: {
        paddingTop: "50px",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridRow: "auto",
        fontSize: "14px"
      },
      inputContainer: {
        width: "-webkit-fill-available"
      },
      buttonContainer: {
        marginTop: "30px",
        display: "flex",
        justifyContent: "flex-end"
      },
      postButton: {
        width: "220px",
        height: "45px",
        boxShadow: "0 2px 0 1px rgba(0, 0, 0, 0.08)",
        backgroundColor: "#31daab",
        color: "white"
      }
    }
    return (
      <div>
        <form noValidate autoComplete="off">
          <div style={styles.formContainer} >
            <div>
              Job Title:
            <TextField
                style={styles.inputContainer}
                placeholder="John"
                variant="outlined"
                hiddenLabel />
              <FormHelperText>Required</FormHelperText>
            </div>
            <div>
              Location:
            <TextField
                style={styles.inputContainer}
                placeholder="Manchester, United Kingdom"
                variant="outlined"
                hiddenLabel />
              <FormHelperText>Required</FormHelperText>
            </div>
            <div>
              Department:
            <TextField
                style={styles.inputContainer}
                placeholder="Development"
                variant="outlined"
                hiddenLabel />
            </div>
            <div>
              Salary:
            <TextField
                style={styles.inputContainer}
                placeholder="25,000"
                variant="outlined"
                hiddenLabel />
              <FormHelperText>Required</FormHelperText>
            </div>
          </div>
          <div style={styles.descContainer} >
            <div>
              Description:
              <TextField
                style={styles.inputContainer}
                placeholder="Explain the role and criteria here..."
                variant="outlined"
                hiddenLabel />
            </div>
          </div>
          <div style={styles.buttonContainer}>
            <Button style={styles.postButton}>Post Job</Button>
          </div>
        </form>
      </div>
    );
  }
}
