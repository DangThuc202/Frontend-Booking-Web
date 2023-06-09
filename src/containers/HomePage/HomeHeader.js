import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { withRouter } from "react-router";

class HomeHeader extends Component {
  returnToHome = () => {
    if (this.props.history) {
      this.props.history.push(`/home`);
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <div
                className="header-logo"
                onClick={() => this.returnToHome()}
              ></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>Chuyên Khoa</b>
                </div>
                <div className="subs-title">Tìm bác sĩ theo chuyên khoa</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Cơ sở y tế</b>
                </div>
                <div className="subs-title">Chọn bệnh viện phòng khám</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Bác sĩ</b>
                </div>
                <div className="subs-title">Chọn bác sĩ giỏi</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Chuyên Khoa</b>
                </div>
                <div className="subs-title">Khám sức khỏe tổng quát</div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                {" "}
                <i className="fas fa-question-circle"> Hỗ trợ </i>{" "}
              </div>
            </div>
          </div>
        </div>
        {this.props.isShowBanner === true && (
          <div className="home-header-banner">
            <div className="content-up">
              <div className="title1">NỀN TẢNG Y TẾ</div>
              <div className="title2">CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
              <div className="search">
                <i className="fas fa-search"></i>
                <input type="text" />
              </div>
            </div>
            <div className="content-down">
              <div className="options">
                <div className="option-child">
                  <div className="img-child a"></div>
                  <div className="text-child">Khám chuyên khoa</div>
                </div>
                <div className="option-child">
                  <div className="img-child b"></div>
                  <div className="text-child">
                    Khám <br /> từ xa
                  </div>
                </div>
                <div className="option-child">
                  <div className="img-child c"></div>
                  <div className="text-child">Khám tổng quát</div>
                </div>
                <div className="option-child">
                  <div className="img-child d"></div>
                  <div className="text-child">
                    Xét nghiệm <br />y học
                  </div>
                </div>
                <div className="option-child">
                  <div className="img-child e"></div>
                  <div className="text-child">
                    Sức khỏe <br />
                    tinh thần
                  </div>
                </div>
                <div className="option-child">
                  <div className="img-child f"></div>
                  <div className="text-child">Khám nha khoa</div>
                </div>
                <div className="option-child">
                  <div className="img-child g"></div>
                  <div className="text-child">
                    Gói
                    <br /> phẫu thuật
                  </div>
                </div>
                <div className="option-child">
                  <div className="img-child h"></div>
                  <div className="text-child">
                    Sản phẩm <br />y tế
                  </div>
                </div>
                <div className="option-child">
                  <div className="img-child j"></div>
                  <div className="text-child">
                    Bài test
                    <br /> sức khỏe
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
);
