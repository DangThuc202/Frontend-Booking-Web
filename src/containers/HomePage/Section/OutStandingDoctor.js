import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "./OutstandingDoctor.scss";

class OutstandingDoctor extends Component {
  render() {
    return (
      <div className="section-share section-outstanding-doctor">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section"> Chuyên khoa phổ biến</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-img section-outstanding-doctor img1"></div>
                  </div>
                  <div className="position text-center">
                    <div> Giáo Sư: Lê Hiếu Nghĩa</div>
                    <div> Cơ xương khớp</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-img section-outstanding-doctor img2"></div>
                  </div>
                  <div className="position text-center">
                    <div> Giáo Sư: Đặng Hoàng Thức</div>
                    <div> Thần kinh</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-img section-outstanding-doctor img3"></div>
                  </div>
                  <div className="position text-center">
                    <div> Giáo Sư: Tô Thanh Quí</div>
                    <div> Tiêu hóa</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-img section-outstanding-doctor img4"></div>
                  </div>
                  <div className="position text-center">
                    <div> Giáo Sư: Dương Minh Quân</div>
                    <div> Tim mạch</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-img section-outstanding-doctor img5"></div>
                  </div>
                  <div className="position text-center">
                    <div> Giáo Sư: Nguyễn Hiền Thiện</div>
                    <div> Khoa nhi</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-img section-outstanding-doctor img6"></div>
                  </div>
                  <div className="position text-center">
                    <div> Giáo Sư: Phan Văn Trung</div>
                    <div> Tai mũi họng</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-img section-outstanding-doctor"></div>
                  </div>
                  <div className="position text-center">
                    <div> Giáo Sư: Nguyễn Văn A</div>
                    <div> Cơ xương khớp 7</div>
                  </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
