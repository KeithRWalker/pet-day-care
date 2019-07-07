import React from 'react';

import staffShape from '../../helpers/propz/staffShape';

import './Staffmember.scss';

class Staffmember extends React.Component {
  static propTypes = {
    staffmember: staffShape.staffShape,
  }

  render() {
    const { staffmember } = this.props;
    return (
      <div className="Staffmember">
            <div className="row staff-card">

            <div className="staff-img-con">
              <h4 className="staff-name">{staffmember.name}</h4>
              <img className="staff-img" src={staffmember.img} alt='nothing'/>
            </div>

            <div className="col">
              <div className="col staff-info">
                <strong className="subtitle">Info:</strong><br/>

                <div className="staff-info-text">
                  <div><strong>Age:</strong> {staffmember.age}</div>
                  <div><strong>Position:</strong> {staffmember.position}</div>
                </div>

              </div>
            </div>

            <div className="col">
              <div className="col staff-notes">
                <strong className="subtitle">Notes:</strong><br/>

                <div className="staff-notes-text"><br/>{staffmember.id}</div>

              </div>
            </div>

            </div>
          </div>
    );
  }
}

export default Staffmember;
