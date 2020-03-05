import React from 'react';
import { connect } from 'react-redux';
import { postEvent } from '../../redux/reducers/eventReducer';

const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

class UserEditModal extends React.Component {
  state = {
    category: '',
    raw_start: '',
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
    let clockTime = today.getHours() + (today.getMinutes());
    // Check if start time and end time are smaller than current time || end time is smaller than start time.
    let clockTimeBool = (this.state.raw_start < clockTime) || (this.state.raw_end < clockTime) || (this.state.raw_end < this.state.raw_start);
    if (clockTimeBool) return alert("Start time and end time must be after current time.");

    const { category, description, long, lati } = this.state;
    const start_time = `${date} ${this.state.raw_start}`;
    const end_time = `${date} ${this.state.raw_end}`;

    this.props.postEvent(category, description, long, lati, start_time, end_time);

    this.cancelEdit()
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

export default connect(null, { postEvent })(UserEditModal);