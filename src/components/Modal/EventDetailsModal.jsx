import React from 'react';
import { connect } from 'react-redux';


class UserEditModal extends React.Component {
  state = {
    category: '',
    start_time: '',
    end_time: '',
    description: '',
    long: '',
    lati: '',
  }

  componentDidMount() {
    const { lati, long } = this.props
    this.setState({ lati, long })
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
          <input required onChange={this.handleChange} name="category" value={this.state.category} placeholder="Category" type="text"/>
          <input required onChange={this.handleChange} name="start_time" value={this.state.start_time} placeholder="Start Time" type="time"/>
          <input required onChange={this.handleChange} name="end_time" value={this.state.end_time} placeholder="End Time" type="time"/>
          <textarea required onChange={this.handleChange} name="description" value={this.state.description} placeholder="Comments and/or Directions" type="text"/>
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