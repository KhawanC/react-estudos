import axios from 'axios';

const DummyJson = axios.create({
    baseURL: 'https://dummyjson.com'
})

export default DummyJson

