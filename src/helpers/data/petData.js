import Axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getPets = () => new Promise((resolve, reject) => {
  Axios.get(`${baseUrl}/pets.json`)
    .then((res) => {
      const pets = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        pets.push(res.data[fbKey]);
      });
      resolve(pets);
    }).catch(err => reject(err));
});

export default { getPets };
