import axios from 'axios';

const endPoint = 'http://localhost:4000/entries';

class EntryModel {
  static all = (userId) => {
    return  axios.get(`${endPoint}/userId/${userId}`);
  }
  static addEntry(obj){
    console.log('called entry model function', obj);
    return axios.post(endPoint, obj)
    
  }
  static byId(id){
    return axios.get(`${endPoint}/${id}`)
  }
  static
}

export default EntryModel;