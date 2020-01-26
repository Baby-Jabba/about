import React from 'react';
import {Global, css, jsx} from '@emotion/core';
import styles from '../css/AppCSS.js';
import Ratings from './Ratings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      average: null,
      location: null,
      cleanliness: null,
      service: null,
      value: null,
      certOfExcellence: null,
      coePopup: false,
      greenLeaders: null,
      greenLeadersPopup: false,
      aboutCopy: null
    };
    this.handleSuperlativeMouseOver = this.handleSuperlativeMouseOver.bind(this);
    this.handleSuperlativeMouseOut = this.handleSuperlativeMouseOut.bind(this);
  }

  componentDidMount() {
    let url = window.location.pathname.split('/');
    let id = url[1];

    fetch(`http://127.0.0.1:313/api/about/${id}`)
      .then(data => data.json())
      .then(data => {
        data = data.data[0];
        let {average, location, cleanliness, service, value, certOfExcellence, greenLeaders, aboutCopy} = data;
        this.setState({id: data.id, average, location, cleanliness, service, value, certOfExcellence, greenLeaders, aboutCopy});
      })
      .catch(err => console.log('error at App.jsx componentDidMount', err));
  }

  handleSuperlativeMouseOver(e) {
    if (e.target.innerText === 'Certificate of Excellence') {
      this.setState({coePopup: true});
    } else if (e.target.innerText === 'GreenLeaders GreenPartner') {
      this.setState({greenLeadersPopup: true});
    }
  }

  handleSuperlativeMouseOut(e) {
    if (e.target.innerText === 'Certificate of Excellence') {
      this.setState({coePopup: false});
    } else if (e.target.innerText === 'GreenLeaders GreenPartner') {
      this.setState({greenLeadersPopup: false});
    }
  }

  render() {

    return (
      <div>
        <Global styles={styles.global} />
        <styles.aboutContainer>

          <styles.h2>About</styles.h2>

          <styles.grid>
            <styles.left>
              <Ratings
                average={this.state.average}
                location={this.state.location}
                cleanliness={this.state.cleanliness}
                service={this.state.service}
                value={this.state.value}
                certOfExcellence={this.state.certOfExcellence}
                greenLeaders={this.state.greenLeaders}
              />

              <styles.superlativeContainer onMouseOver={this.handleSuperlativeMouseOver} onMouseOut={this.handleSuperlativeMouseOut}>
                <styles.superlative><i className="fas fa-award" css={styles.faSuperlative}></i>Certificate of Excellence</styles.superlative>
                {this.state.coePopup ?
                  <styles.coePopup>
                    <div>
                      <h3>What is Certificate of Excellence?</h3>
                      <p>TripAdvisor gives a Certificate of Excellence to accommodations, attractions and restaurants that consistently earn great reviews from travelers.</p>
                    </div>
                  </styles.coePopup> :
                  null
                }

                <styles.superlative><i className="fab fa-envira" css={styles.faSuperlative}></i>GreenLeaders GreenPartner</styles.superlative>
                {this.state.greenLeadersPopup ?
                  <styles.greenLeadersPopup>
                    <div>
                      <h4>GreenLeaders GreenPartner</h4>
                      <ul>
                        <li>Staff training on green practices</li>
                        <li>Towel reuse program</li>
                        <li>Linen reuse program</li>
                        <li>Energy-efficient lightbulbs</li>
                        <li>Tracks energy use</li>
                        <li>See all green practices</li>
                      </ul>
                    </div>
                  </styles.greenLeadersPopup> :
                  null
                }
              </styles.superlativeContainer>

            </styles.left>


            <styles.right>
            </styles.right>

          </styles.grid>

        </styles.aboutContainer>
      </div>

    );
  }
}

export default App;