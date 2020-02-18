import React from 'react';
import { Global, css, jsx } from '@emotion/core';
import styles from '../css/AboutCSS.js';
import Ratings from './Ratings.jsx';
import Superlatives from './Superlatives.jsx';
import AboutCopy from './AboutCopy.jsx';
import PropertyAmenities from './PropertyAmenities.jsx';
import RoomFeatures from './RoomFeatures.jsx';
import RoomTypes from './RoomTypes.jsx';
import GoodToKnow from './GoodToKnow.jsx';
import HotelLinks from './HotelLinks.jsx';
import Carousel from './Carousel.jsx';

class About extends React.Component {
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
      greenLeadersHover: false,
      greenLeadersPopupHover: false,
      aboutCopy: null,
      image0: null,
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      image5: null,
      image6: null,
      amenityIcon0: null,
      amenityCopy0: null,
      amenityIcon1: null,
      amenityCopy1: null,
      amenityIcon2: null,
      amenityCopy2: null,
      amenityIcon3: null,
      amenityCopy3: null,
      amenityIcon4: null,
      amenityCopy4: null,
      amenityIcon5: null,
      amenityCopy5: null,
      amenityIcon6: null,
      amenityCopy6: null,
      amenityIcon7: null,
      amenityCopy7: null,
      amenityIcon8: null,
      amenityCopy8: null,
      amenityIcon9: null,
      amenityCopy9: null,
      amenityIcon10: null,
      amenityCopy10: null,
      amenityIcon11: null,
      amenityCopy11: null,
      amenityIcon12: null,
      amenityCopy12: null,
      amenityIcon13: null,
      amenityCopy13: null,
      amenityIcon14: null,
      amenityCopy14: null,
      amenityIcon15: null,
      amenityCopy15: null,
      amenityIcon16: null,
      amenityCopy16: null,
      amenityIcon17: null,
      amenityCopy17: null,
      amenityIcon18: null,
      amenityCopy18: null,
      amenityIcon19: null,
      amenityCopy19: null,
      amenityIcon20: null,
      amenityCopy20: null,
      amenityIcon21: null,
      amenityCopy21: null,
      amenityIcon22: null,
      amenityCopy22: null,
      amenityIcon23: null,
      amenityCopy23: null,
      amenityIcon24: null,
      amenityCopy24: null,
      amenityIcon25: null,
      amenityCopy25: null,
      amenityIcon26: null,
      amenityCopy26: null,
      amenityIcon27: null,
      amenityCopy27: null,
      amenityIcon28: null,
      amenityCopy28: null,
      amenityIcon29: null,
      amenityCopy29: null,
      amenityIcon30: null,
      amenityCopy30: null,
      amenityIcon31: null,
      amenityCopy31: null,
      roomFeatureIcon0: null,
      roomFeatureCopy0: null,
      roomFeatureIcon1: null,
      roomFeatureCopy1: null,
      roomFeatureIcon2: null,
      roomFeatureCopy2: null,
      roomFeatureIcon3: null,
      roomFeatureCopy3: null,
      roomFeatureIcon4: null,
      roomFeatureCopy4: null,
      roomFeatureIcon5: null,
      roomFeatureCopy5: null,
      roomFeatureIcon6: null,
      roomFeatureCopy6: null,
      roomFeatureIcon7: null,
      roomFeatureCopy7: null,
      roomTypeIcon0: null,
      roomTypeCopy0: null,
      roomTypeIcon1: null,
      roomTypeCopy1: null,
      roomTypeIcon2: null,
      roomTypeCopy2: null,
      roomTypeIcon3: null,
      roomTypeCopy3: null,
      hotelClass: null,
      hotelStyle: null,
      isSpecialOffered: null,
      special: null
    };
    this.handleSuperlativeMouseOver = this.handleSuperlativeMouseOver.bind(this);
    this.handleSuperlativeMouseOut = this.handleSuperlativeMouseOut.bind(this);
    this.handleGreenLeadersPopupMouseOver = this.handleGreenLeadersPopupMouseOver.bind(this);
    this.handleGreenLeadersPopupMouseOut = this.handleGreenLeadersPopupMouseOut.bind(this);
  }

  componentDidMount() {
    let url = window.location.pathname.split('/');
    let id = url[1];

    fetch(`/api/about/${id}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        let {
          average,
          location,
          cleanliness,
          service,
          value,
          certOfExcellence,
          greenLeaders,
          aboutCopy,
          image0,
          image1,
          image2,
          image3,
          image4,
          image5,
          image6,
          amenityIcon0,
          amenityCopy0,
          amenityIcon1,
          amenityCopy1,
          amenityIcon2,
          amenityCopy2,
          amenityIcon3,
          amenityCopy3,
          amenityIcon4,
          amenityCopy4,
          amenityIcon5,
          amenityCopy5,
          amenityIcon6,
          amenityCopy6,
          amenityIcon7,
          amenityCopy7,
          amenityIcon8,
          amenityCopy8,
          amenityIcon9,
          amenityCopy9,
          amenityIcon10,
          amenityCopy10,
          amenityIcon11,
          amenityCopy11,
          amenityIcon12,
          amenityCopy12,
          amenityIcon13,
          amenityCopy13,
          amenityIcon14,
          amenityCopy14,
          amenityIcon15,
          amenityCopy15,
          amenityIcon16,
          amenityCopy16,
          amenityIcon17,
          amenityCopy17,
          amenityIcon18,
          amenityCopy18,
          amenityIcon19,
          amenityCopy19,
          amenityIcon20,
          amenityCopy20,
          amenityIcon21,
          amenityCopy21,
          amenityIcon22,
          amenityCopy22,
          amenityIcon23,
          amenityCopy23,
          amenityIcon24,
          amenityCopy24,
          amenityIcon25,
          amenityCopy25,
          amenityIcon26,
          amenityCopy26,
          amenityIcon27,
          amenityCopy27,
          amenityIcon28,
          amenityCopy28,
          amenityIcon29,
          amenityCopy29,
          amenityIcon30,
          amenityCopy30,
          amenityIcon31,
          amenityCopy31,
          roomFeatureIcon0,
          roomFeatureCopy0,
          roomFeatureIcon1,
          roomFeatureCopy1,
          roomFeatureIcon2,
          roomFeatureCopy2,
          roomFeatureIcon3,
          roomFeatureCopy3,
          roomFeatureIcon4,
          roomFeatureCopy4,
          roomFeatureIcon5,
          roomFeatureCopy5,
          roomFeatureIcon6,
          roomFeatureCopy6,
          roomFeatureIcon7,
          roomFeatureCopy7,
          roomTypeIcon0,
          roomTypeCopy0,
          roomTypeIcon1,
          roomTypeCopy1,
          roomTypeIcon2,
          roomTypeCopy2,
          roomTypeIcon3,
          roomTypeCopy3,
          hotelClass,
          hotelStyle,
          isSpecialOffered,
          special
        } = data;

        this.setState({
          id: data.id,
          average,
          location,
          cleanliness,
          service,
          value,
          certOfExcellence,
          greenLeaders,
          aboutCopy,
          image0,
          image1,
          image2,
          image3,
          image4,
          image5,
          image6,
          amenityIcon0,
          amenityCopy0,
          amenityIcon1,
          amenityCopy1,
          amenityIcon2,
          amenityCopy2,
          amenityIcon3,
          amenityCopy3,
          amenityIcon4,
          amenityCopy4,
          amenityIcon5,
          amenityCopy5,
          amenityIcon6,
          amenityCopy6,
          amenityIcon7,
          amenityCopy7,
          amenityIcon8,
          amenityCopy8,
          amenityIcon9,
          amenityCopy9,
          amenityIcon10,
          amenityCopy10,
          amenityIcon11,
          amenityCopy11,
          amenityIcon12,
          amenityCopy12,
          amenityIcon13,
          amenityCopy13,
          amenityIcon14,
          amenityCopy14,
          amenityIcon15,
          amenityCopy15,
          amenityIcon16,
          amenityCopy16,
          amenityIcon17,
          amenityCopy17,
          amenityIcon18,
          amenityCopy18,
          amenityIcon19,
          amenityCopy19,
          amenityIcon20,
          amenityCopy20,
          amenityIcon21,
          amenityCopy21,
          amenityIcon22,
          amenityCopy22,
          amenityIcon23,
          amenityCopy23,
          amenityIcon24,
          amenityCopy24,
          amenityIcon25,
          amenityCopy25,
          amenityIcon26,
          amenityCopy26,
          amenityIcon27,
          amenityCopy27,
          amenityIcon28,
          amenityCopy28,
          amenityIcon29,
          amenityCopy29,
          amenityIcon30,
          amenityCopy30,
          amenityIcon31,
          amenityCopy31,
          roomFeatureIcon0,
          roomFeatureCopy0,
          roomFeatureIcon1,
          roomFeatureCopy1,
          roomFeatureIcon2,
          roomFeatureCopy2,
          roomFeatureIcon3,
          roomFeatureCopy3,
          roomFeatureIcon4,
          roomFeatureCopy4,
          roomFeatureIcon5,
          roomFeatureCopy5,
          roomFeatureIcon6,
          roomFeatureCopy6,
          roomFeatureIcon7,
          roomFeatureCopy7,
          roomTypeIcon0,
          roomTypeCopy0,
          roomTypeIcon1,
          roomTypeCopy1,
          roomTypeIcon2,
          roomTypeCopy2,
          roomTypeIcon3,
          roomTypeCopy3,
          hotelClass,
          hotelStyle,
          isSpecialOffered,
          special
        });
      })
      .catch(err => console.log('error at About.jsx componentDidMount', err));
  }

  handleSuperlativeMouseOver(e) {
    if (e.target.innerText === 'Certificate of Excellence') {
      this.setState({ coePopup: true });
    } else if (e.target.innerText === 'GreenLeaders GreenPartner') {
      this.setState({ greenLeadersHover: true });
    }
  }

  handleSuperlativeMouseOut(e) {
    if (e.target.innerText === 'Certificate of Excellence') {
      this.setState({ coePopup: false });
    } else if (e.target.innerText === 'GreenLeaders GreenPartner') {
      setTimeout(() => this.setState({ greenLeadersHover: false }), 0);
    }
  }

  handleGreenLeadersPopupMouseOver(e) {
    this.setState({ greenLeadersPopupHover: true });
  }

  handleGreenLeadersPopupMouseOut(e) {
    this.setState({ greenLeadersPopupHover: false });
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

              <Superlatives
                mouseOver={this.handleSuperlativeMouseOver}
                mouseOut={this.handleSuperlativeMouseOut}
                handleGreenLeadersPopupMouseOver={this.handleGreenLeadersPopupMouseOver}
                handleGreenLeadersPopupMouseOut={this.handleGreenLeadersPopupMouseOut}
                certOfExcellence={this.state.certOfExcellence}
                coePopup={this.state.coePopup}
                greenLeaders={this.state.greenLeaders}
                greenLeadersHover={this.state.greenLeadersHover}
                greenLeadersPopupHover={this.state.greenLeadersPopupHover}
              />

              <AboutCopy
                copy={this.state.aboutCopy}
              />

              <Carousel
                image0={this.state.image0}
                image1={this.state.image1}
                image2={this.state.image2}
                image3={this.state.image3}
                image4={this.state.image4}
                image5={this.state.image5}
                image6={this.state.image6}
              />

            </styles.left>


            <styles.right>
              <PropertyAmenities
                amenityIcon0={this.state.amenityIcon0}
                amenityCopy0={this.state.amenityCopy0}
                amenityIcon1={this.state.amenityIcon1}
                amenityCopy1={this.state.amenityCopy1}
                amenityIcon2={this.state.amenityIcon2}
                amenityCopy2={this.state.amenityCopy2}
                amenityIcon3={this.state.amenityIcon3}
                amenityCopy3={this.state.amenityCopy3}
                amenityIcon4={this.state.amenityIcon4}
                amenityCopy4={this.state.amenityCopy4}
                amenityIcon5={this.state.amenityIcon5}
                amenityCopy5={this.state.amenityCopy5}
                amenityIcon6={this.state.amenityIcon6}
                amenityCopy6={this.state.amenityCopy6}
                amenityIcon7={this.state.amenityIcon7}
                amenityCopy7={this.state.amenityCopy7}

                amenityIcon8={this.state.amenityIcon8}
                amenityCopy8={this.state.amenityCopy8}
                amenityIcon9={this.state.amenityIcon9}
                amenityCopy9={this.state.amenityCopy9}
                amenityIcon10={this.state.amenityIcon10}
                amenityCopy10={this.state.amenityCopy10}
                amenityIcon11={this.state.amenityIcon11}
                amenityCopy11={this.state.amenityCopy11}
                amenityIcon12={this.state.amenityIcon12}
                amenityCopy12={this.state.amenityCopy12}
                amenityIcon13={this.state.amenityIcon13}
                amenityCopy13={this.state.amenityCopy13}
                amenityIcon14={this.state.amenityIcon14}
                amenityCopy14={this.state.amenityCopy14}
                amenityIcon15={this.state.amenityIcon15}
                amenityCopy15={this.state.amenityCopy15}

                amenityIcon16={this.state.amenityIcon16}
                amenityCopy16={this.state.amenityCopy16}
                amenityIcon17={this.state.amenityIcon17}
                amenityCopy17={this.state.amenityCopy17}
                amenityIcon18={this.state.amenityIcon18}
                amenityCopy18={this.state.amenityCopy18}
                amenityIcon19={this.state.amenityIcon19}
                amenityCopy19={this.state.amenityCopy19}
                amenityIcon20={this.state.amenityIcon20}
                amenityCopy20={this.state.amenityCopy20}
                amenityIcon21={this.state.amenityIcon21}
                amenityCopy21={this.state.amenityCopy21}
                amenityIcon22={this.state.amenityIcon22}
                amenityCopy22={this.state.amenityCopy22}
                amenityIcon23={this.state.amenityIcon23}
                amenityCopy23={this.state.amenityCopy23}

                amenityIcon24={this.state.amenityIcon24}
                amenityCopy24={this.state.amenityCopy24}
                amenityIcon25={this.state.amenityIcon25}
                amenityCopy25={this.state.amenityCopy25}
                amenityIcon26={this.state.amenityIcon26}
                amenityCopy26={this.state.amenityCopy26}
                amenityIcon27={this.state.amenityIcon27}
                amenityCopy27={this.state.amenityCopy27}
                amenityIcon28={this.state.amenityIcon28}
                amenityCopy28={this.state.amenityCopy28}
                amenityIcon29={this.state.amenityIcon29}
                amenityCopy29={this.state.amenityCopy29}
                amenityIcon30={this.state.amenityIcon30}
                amenityCopy30={this.state.amenityCopy30}
                amenityIcon31={this.state.amenityIcon31}
                amenityCopy31={this.state.amenityCopy31}

                roomFeatureIcon0={this.state.roomFeatureIcon0}
                roomFeatureCopy0={this.state.roomFeatureCopy0}
                roomFeatureIcon1={this.state.roomFeatureIcon1}
                roomFeatureCopy1={this.state.roomFeatureCopy1}
                roomFeatureIcon2={this.state.roomFeatureIcon2}
                roomFeatureCopy2={this.state.roomFeatureCopy2}
                roomFeatureIcon3={this.state.roomFeatureIcon3}
                roomFeatureCopy3={this.state.roomFeatureCopy3}
                roomFeatureIcon4={this.state.roomFeatureIcon4}
                roomFeatureCopy4={this.state.roomFeatureCopy4}
                roomFeatureIcon5={this.state.roomFeatureIcon5}
                roomFeatureCopy5={this.state.roomFeatureCopy5}
                roomFeatureIcon6={this.state.roomFeatureIcon6}
                roomFeatureCopy6={this.state.roomFeatureCopy6}
                roomFeatureIcon7={this.state.roomFeatureIcon7}
                roomFeatureCopy7={this.state.roomFeatureCopy7}

                roomTypeIcon0={this.state.roomTypeIcon0}
                roomTypeCopy0={this.state.roomTypeCopy0}
                roomTypeIcon1={this.state.roomTypeIcon1}
                roomTypeCopy1={this.state.roomTypeCopy1}
                roomTypeIcon2={this.state.roomTypeIcon2}
                roomTypeCopy2={this.state.roomTypeCopy2}
                roomTypeIcon3={this.state.roomTypeIcon3}
                roomTypeCopy3={this.state.roomTypeCopy3}
              />

              <RoomFeatures
                roomFeatureIcon0={this.state.roomFeatureIcon0}
                roomFeatureCopy0={this.state.roomFeatureCopy0}
                roomFeatureIcon1={this.state.roomFeatureIcon1}
                roomFeatureCopy1={this.state.roomFeatureCopy1}
                roomFeatureIcon2={this.state.roomFeatureIcon2}
                roomFeatureCopy2={this.state.roomFeatureCopy2}
                roomFeatureIcon3={this.state.roomFeatureIcon3}
                roomFeatureCopy3={this.state.roomFeatureCopy3}
                roomFeatureIcon4={this.state.roomFeatureIcon4}
                roomFeatureCopy4={this.state.roomFeatureCopy4}
                roomFeatureIcon5={this.state.roomFeatureIcon5}
                roomFeatureCopy5={this.state.roomFeatureCopy5}
                roomFeatureIcon6={this.state.roomFeatureIcon6}
                roomFeatureCopy6={this.state.roomFeatureCopy6}
                roomFeatureIcon7={this.state.roomFeatureIcon7}
                roomFeatureCopy7={this.state.roomFeatureCopy7}
              />

              <RoomTypes
                roomTypeIcon0={this.state.roomTypeIcon0}
                roomTypeCopy0={this.state.roomTypeCopy0}
                roomTypeIcon1={this.state.roomTypeIcon1}
                roomTypeCopy1={this.state.roomTypeCopy1}
                roomTypeIcon2={this.state.roomTypeIcon2}
                roomTypeCopy2={this.state.roomTypeCopy2}
                roomTypeIcon3={this.state.roomTypeIcon3}
                roomTypeCopy3={this.state.roomTypeCopy3}
              />

              <GoodToKnow
                hotelClass={this.state.hotelClass}
                hotelStyle={this.state.hotelStyle}
              />

              <HotelLinks
                isSpecialOffered={this.state.isSpecialOffered}
                special={this.state.special}
              />
            </styles.right>

          </styles.grid>

        </styles.aboutContainer>
      </div>

    );
  }
}

export default About;