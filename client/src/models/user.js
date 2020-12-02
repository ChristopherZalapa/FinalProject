import axios from 'axios';

const endPoint = 'http://localhost:4000/users';

class UserModel {
  static all = () => {
    return axios.get(endPoint);
  }
}

export default UserModel;