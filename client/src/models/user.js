import axios from 'axios';

const endPoint = 'http://localhost:4000/users';

class UserModel {
  static all = () => {
    return axios.get(endPoint);
  }
  static addUser(obj){
    return axios.post(endPoint, obj)
  }  
}

export default UserModel;