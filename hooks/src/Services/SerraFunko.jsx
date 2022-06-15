import axios from 'axios';

const SerraFunko = axios.create({
    baseURL: 'http://localhost:8081/ecommerce'
})

export default SerraFunko

