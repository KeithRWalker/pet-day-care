import React from 'react';

import staffData from '../../helpers/data/staffData';

import Staffmember from '../Staffmember/Staffmember';

import './StaffRoom.scss';

class StaffRoom extends React.Component {
  state = {
    staff: [],
  }

  componentDidMount() {
    staffData.getStaff()
      .then(staff => this.setState({ staff }))
      .catch(err => console.error('error from staffRoom', err));
  }

  render() {
    const staffComponents = this.state.staff.map(staffmember => (
        <Staffmember key={staffmember.name} staffmember={staffmember} />
    ));

    return (
      <div className="StaffRoom">
        <div className="staff-room-title">Our Staff!</div>
        { staffComponents }
      </div>
    );
  }
}

export default StaffRoom;
