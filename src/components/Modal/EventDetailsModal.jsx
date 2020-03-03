import React from 'react';
import { connect } from 'react-redux';


class UserEditModal extends React.Component {
  state = {
  }

  componentDidMount() {
    // const { } = this.props.user
    // this.setState({  })
  }
  
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  cancelEdit = () => this.props.setEventDetails({ active: false });

  handleSubmit = e => {
    e.preventDefault();

    const { user_id } = this.props.user;
    // this.props.editUser({ user_id});

    this.cancelEdit()
  }

  render () {
    return (
      <div className="modal-container">
        <form onSubmit={this.handleSubmit} className="form">
          <div>
            <button>Confirm</button>
            <button className="cancelBtn" onClick={this.cancelEdit}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => ({ user: reduxState.user })

export default connect(mapStateToProps, {  })(UserEditModal);