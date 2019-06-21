import React from 'react';
import PropTypes from 'prop-types';
import staffShape from '../../helpers/propz/staffShape';
import Staffmember from '../Staffmember/Staffmember';

import './StaffRoom.scss';

class StaffRoom extends React.Component {
  static propTypes = {
    staff: PropTypes.arrayOf(staffShape.staffShape),
  };

  render() {
    const { staff } = this.props;
    const makeStaff = staff.map(staffmember => (
        <Staffmember key={staffmember.id} staffmember={staffmember} />
    ));
    return (
      <div className="staff-room">
        <div className="staff-room-title">Our Staff!</div>
        { makeStaff }
      </div>
    );
  }
}

export default StaffRoom;
