import axios from 'axios';
import Error from '../components/Error';

axios.interceptors.response.use(
  (res) => {
    if (res.status === 201) {
      console.log("Posted Successfully");
    }
    return res;
  },
  (err) => {
    console.log("errrzao")
    console.log(err.message)
    return <Error error={["errorzaso"]}></Error>;
  }
);

let interceptor = () => {

  axios.interceptors.response.use(
    (res) => {
      if (res.status === 201) {
        console.log("Posted Successfully");
      }
      return res;
    },
    (err) => {
      console.log("errrzao")
      console.log(err.message)
      return Promise.reject(err);
    }
  );
  
  return (
    <Error error={["errorzaso"]}></Error>
  )

};


export default interceptor;

