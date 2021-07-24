import axios from 'axios';
const api_flight = axios.create({
    baseURL:'https://api.instantwebtools.net/v1/',
    withCredentials:false,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
    }
});
export default{
    get_flight(){
        return api_flight.get('passenger?page=0&size=10');
    }
}