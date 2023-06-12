import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";
import { createNewUserService } from "../../services/userService";

class Login1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      isShowPassword: false,
      errMessage: "",
    };
  }

  handleOnChangeInput = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleOnChangeInputFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleOnChangeInputLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleLogin = async () => {
    // reset mã lỗi
    this.setState({
      errMessage: "",
    });

    try {
      let data = await createNewUserService(
        this.state.email,
        this.state.password,
        this.state.firstName,
        this.state.lastName
      );
      if (data && data.errCode !== 0) {
        console.log(data.message);
        this.setState({
          errMessage: data.message,
        });
      }
      if (data && data.errCode === 0) {
        this.props.userLoginSuccess(data.user);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errMessage: error.response.data.message,
          });
        }
      }
    }
  };

  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };

  handleKeyDown = (event) => {
    if (event.key === `Enter` || event.keyCode === 13) {
      this.handleLogin();
    }
  };

  render() {
    //jsx

    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Đăng ký</div>
            <div className="col-12 form-group login-input">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập email của bạn"
                value={this.state.email}
                onChange={(event) => this.handleOnChangeInput(event)}
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>Mật khẩu</label>
              <div className="custome-input-password">
                <input
                  type={this.state.isShowPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Nhập mật khẩu của bạn"
                  value={this.state.password}
                  onChange={(event) => this.handleOnChangePassword(event)}
                  onKeyDown={(event) => this.handleKeyDown(event)}
                />
                <span onClick={() => this.handleShowHidePassword()}>
                  <i
                    className={
                      this.state.isShowPassword
                        ? "far fa-eye"
                        : "far fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12 form-group login-input">
              <label>Họ</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập họ của bạn"
                value={this.state.firstName}
                onChange={(event) => this.handleOnChangeInputFirstName(event)}
              />
            </div>
            <div className="col-12 form-group login-input mb-3">
              <label>Tên</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập tên của bạn"
                value={this.state.lastName}
                onChange={(event) => this.handleOnChangeInputLastName(event)}
              />
            </div>
            <div className="col-12" style={{ color: "red" }}>
              {this.state.errMessage}
            </div>
            <div className="col-12 ">
              <button
                className="btn-login"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    userLoginSuccess: (userInfor) =>
      dispatch(actions.userLoginSuccess(userInfor)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login1);
