import axios from 'axios';

const endPoint = 'http://localhost:4000/entries';

class EntryModel {
  static all = () => {
    return  axios.get(endPoint);
  }
  static addEntry(obj){
    return axios.post(endPoint, obj)
  }
}

export default EntryModel;