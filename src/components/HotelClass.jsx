import React from 'react';
import styles from '../css/HotelClassCSS.js';
import {jsx} from '@emotion/core';

class HotelClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const full = 'fas fa-star';
    const half = 'fas fa-star-half-alt';
    const hollow = 'far fa-star';
    const r = this.props.hotelClass;

    switch (true) {
    case r === undefined: // for tests
      return null;
    case r === 0:
      return (
        <div css={styles.div}>
          <i className={hollow} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
        </div>
      );
    case r < 1:
      return (
        <div css={styles.div}>
          <i className={half} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
        </div>
      );
    case r == 1:
      return (
        <div css={styles.div}>
          <i className={full} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
        </div>
      );
    case r < 2:
      return (
        <div css={styles.div}>
          <i className={full} css={styles.i}></i>
          <i className={half} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
        </div>
      );
    case r == 2:
      return (
        <div css={styles.div}>
          <i className={full} css={styles.i}></i>
          <i className={full} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
        </div>
      );
    case r < 3:
      return (
        <div css={styles.div}>
          <i className={full} css={styles.i}></i>
          <i className={full} css={styles.i}></i>
          <i className={half} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
        </div>
      );
    case r == 3:
      return (
        <div css={styles.div}>
          <i className={full} css={styles.i}></i>
          <i className={full} css={styles.i}></i>
          <i className={full} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
        </div>
      );
    case r < 4:
      return (
        <div css={styles.div}>
          <i className={full} css={styles.i}></i>
          <i className={full} css={styles.i}></i>
          <i className={full} css={styles.i}></i>
          <i className={half} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
        </div>
      );
    case r == 4:
      return (
        <div css={styles.div}>
          <i className={full} css={styles.i}></i>
          <i className={full} css={styles.i}></i>
          <i className={full} css={styles.i}></i>
          <i className={full} css={styles.i}></i>
          <i className={hollow} css={styles.i}></i>
        </div>
      );
    case r < 5:
      return (
        <div css={styles.div}>
          <i className={full} css={styles.i}></i>
          <i className={full} css={styles.i}></i>
          <i className={full} css={styles.i}></i>
          <i className={full} css={styles.i}></i>
          <i className={half} css={styles.i}></i>
        </div>
      );
    case r == 5:
      return (
        <div css={styles.div}>
          <i className={full} css={styles.i}></i>
          <i className={full} css={styles.i}></i>
          <i className={full} css={styles.i}></i>
          <i className={full} css={styles.i}></i>
          <i className={full} css={styles.i}></i>
        </div>
      );
    }
  }
}

export default HotelClass;