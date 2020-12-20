import React, { Component } from "react";
import styles from "./SearchInputStyles.module.css";
import styled, { keyframes } from "styled-components";
import Alert from "../Alert/Alert";

const fadeAnimation = keyframes`
0% { opacity:0}
30% { opacity: 1 }
40% { opacity: 0.5; }
100% {
   left: 100%;
   opacity: 0;
   display: none;
 }
`;

const FadeAlert = styled.div`
  animation-name: ${fadeAnimation};
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

export default class SearInput extends Component {
  state = {
    searchValue: "",
    showAlert: false,
  };

  inputValueHolder = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: "" });
    if (this.state.searchValue === "") {
      this.setState((state) => ({ showAlert: !state.showAlert }));
    }
  };

  render() {
    const { showAlert } = this.state;
    return (
      <>
        {showAlert && (
          <FadeAlert className={styles.alert}>
            <Alert />
          </FadeAlert>
        )}

        <div className={styles.formContainer}>
          <form className={styles.formElements} onSubmit={this.handleSubmit}>
            <input
              className={styles.formInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.searchValue}
              onChange={this.inputValueHolder}
            />
            <button className={styles.formButton} type="submit">
              Search
            </button>
          </form>
        </div>
      </>
    );
  }
}
