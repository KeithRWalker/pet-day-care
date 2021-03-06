import Axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getStaff = () => new Promise((resolve, reject) => {
  Axios.get(`${baseUrl}/staff.json`)
    .then((res) => {
      const staff = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        staff.push(res.data[fbKey]);
      });
      resolve(staff);
    }).catch(err => reject(err));
});

export default { getStaff };
