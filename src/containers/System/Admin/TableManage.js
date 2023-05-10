import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./TableManage.scss";
import * as actions from "../../../store/actions";

class TableManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersRedux: [],
    };
  }

  componentDidMount() {
    this.props.fetchUserRedux();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.listUsers !== this.props.listUsers) {
      let arrGender = this.props.genderRedux;
      this.setState({
        usersRedux: this.props.listUsers,
      });
    }
  }

  handleDeleteUser = (user) => {
    this.props.deleteAUserRedux(user.id);
  };

  render() {
    console.log("abc", this.props.listUsers);
    let arrUsers = this.props.usersRedux;
    return (
      <table id="TableManageUser">
        <tr>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
        {arrUsers &&
          arrUsers.length > 0 &&
          arrUsers.map((item, index) => {
            return (
              <tr>
                <td>{item.email}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.address}</td>
                <td>
                  <button className="btn-edit">
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => this.handleDeleteUser(item)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listUsers: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
    deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManage);
