import React from 'react';
import {jsx} from '@emotion/core';
import styles from '../css/RatingsCirclesCSS.js';

class RatingsCircles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let r = this.props.rating;
    console.log(r);
    switch (true) {
    case this.props.rating === undefined: // for tests
      return null;
    case r == 0:
      return (
        <styles.circleContainer>
          <styles.outerCircle>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          {this.props.reviews ?
            <styles.reviews>{this.props.reviews}</styles.reviews> :
            <styles.ratingCategory>{this.props.category}</styles.ratingCategory>
          }
        </styles.circleContainer>
      );
    case r < 1:
      return (
        <styles.circleContainer>
          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.halfCircle></styles.halfCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          {this.props.reviews ?
            <styles.reviews>{this.props.reviews}</styles.reviews> :
            <styles.ratingCategory>{this.props.category}</styles.ratingCategory>
          }
        </styles.circleContainer>
      );
    case r == 1:
      return (
        <styles.circleContainer>
          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          {this.props.reviews ?
            <styles.reviews>{this.props.reviews}</styles.reviews> :
            <styles.ratingCategory>{this.props.category}</styles.ratingCategory>
          }
        </styles.circleContainer>
      );
    case r < 2:
      return (
        <styles.circleContainer>
          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.halfCircle></styles.halfCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          {this.props.reviews ?
            <styles.reviews>{this.props.reviews}</styles.reviews> :
            <styles.ratingCategory>{this.props.category}</styles.ratingCategory>
          }
        </styles.circleContainer>
      );
    case r == 2:
      return (
        <styles.circleContainer>
          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          {this.props.reviews ?
            <styles.reviews>{this.props.reviews}</styles.reviews> :
            <styles.ratingCategory>{this.props.category}</styles.ratingCategory>
          }
        </styles.circleContainer>
      );
    case r < 3:
      return (
        <styles.circleContainer>
          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.halfCircle></styles.halfCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          {this.props.reviews ?
            <styles.reviews>{this.props.reviews}</styles.reviews> :
            <styles.ratingCategory>{this.props.category}</styles.ratingCategory>
          }
        </styles.circleContainer>
      );
    case r == 3:
      return (
        <styles.circleContainer>
          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          {this.props.reviews ?
            <styles.reviews>{this.props.reviews}</styles.reviews> :
            <styles.ratingCategory>{this.props.category}</styles.ratingCategory>
          }
        </styles.circleContainer>
      );
    case r < 4:
      return (
        <styles.circleContainer>
          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.halfCircle></styles.halfCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          {this.props.reviews ?
            <styles.reviews>{this.props.reviews}</styles.reviews> :
            <styles.ratingCategory>{this.props.category}</styles.ratingCategory>
          }
        </styles.circleContainer>
      );
    case r == 4:
      return (
        <styles.circleContainer>
          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
          </styles.outerCircle>

          {this.props.reviews ?
            <styles.reviews>{this.props.reviews}</styles.reviews> :
            <styles.ratingCategory>{this.props.category}</styles.ratingCategory>
          }
        </styles.circleContainer>
      );
    case r < 5:
      return (
        <styles.circleContainer>
          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.halfCircle></styles.halfCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          {this.props.reviews ?
            <styles.reviews>{this.props.reviews}</styles.reviews> :
            <styles.ratingCategory>{this.props.category}</styles.ratingCategory>
          }
        </styles.circleContainer>
      );
    case r == 5:
      return (
        <styles.circleContainer>
          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          <styles.outerCircle>
            <styles.innerCircleContainer>
              <styles.innerCircle></styles.innerCircle>
            </styles.innerCircleContainer>
          </styles.outerCircle>

          {this.props.reviews ?
            <styles.reviews>{this.props.reviews}</styles.reviews> :
            <styles.ratingCategory>{this.props.category}</styles.ratingCategory>
          }
        </styles.circleContainer>
      );
    }
  }
}

export default RatingsCircles;