import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import { size } from "lodash";

class Specialty extends Component {
  render() {
    return (
      <div className="section-share section-specialty">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section"> Chuyên khoa phổ biến</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-img  section-specialty1"></div>
                <div className="position text-center mr-2">
                  <div>Cơ xương khớp </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-specialty2"></div>
                <div className="position text-center">
                  <div>Thần kinh </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-specialty3"></div>
                <div className="position text-center mr-2">
                  <div>Tiêu hóa </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-specialty4"></div>
                <div className="position text-center">
                  <div>Tim mạch </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-specialty5"></div>
                <div className="position text-center">
                  <div>Tai mũi họng </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-specialty6"></div>
                <div className="position text-center">
                  <div>Cột sống </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-specialty7"></div>
                <div className="position text-center">
                  <div>Y học cổ truyền </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-specialty8"></div>
                <div className="position text-center">
                  <div>Châm cứu </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-specialty9"></div>
                <div className="position text-center">
                  <div>Nhi khoa </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
