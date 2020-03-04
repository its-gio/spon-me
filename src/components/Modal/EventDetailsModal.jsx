import React from 'react';
import { connect } from 'react-redux';

const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let clockTime = today.getHours() + ":" + (today.getMinutes());
let time = today.getHours() + ":" + (today.getMinutes() + 10);

class UserEditModal extends React.Component {
  state = {
    category: '',
    raw_start: time,
    raw_end: '',
    description: '',
    long: '',
    lati: '',
  }

  componentDidMount() {
    const { lati, long } = this.props;
    this.setState({ lati, long });
  }
  
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  cancelEdit = () => this.props.setEventDetails({ active: false });

  handleSubmit = e => {
    e.preventDefault();
    clockTime = today.getHours() + ":" + (today.getMinutes());
    let clockTimeBool = (this.state.raw_start < clockTime) && (this.state.raw_start < clockTime);
    let betweenBool = (this.state.raw_end < this.state.raw_start);
    if (clockTimeBool || betweenBool) return alert("Start time and end time must be after current time.");

    const { user_id } = this.props.user;
    const start_time = `${date} ${this.state.raw_start}`;
    const end_time = `${date} ${this.state.raw_end}`;

    console.log({ user_id, start_time, end_time })
    // this.props.createEvent({ user_id });

    // this.cancelEdit()
  }

  render () {
    return (
      <div className="modal-container">
        <form onSubmit={this.handleSubmit} className="form">
          <input required onChange={this.handleChange} name="category" value={this.state.category} placeholder="Category" type="text"/>
          <input required onChange={this.handleChange} name="raw_start" value={this.state.raw_start} placeholder="Start Time" type="time"/>
          <input required onChange={this.handleChange} name="raw_end" value={this.state.raw_end} placeholder="End Time" type="time"/>
          <textarea onChange={this.handleChange} name="description" value={this.state.description} placeholder="Comments and/or Directions" type="text"/>
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