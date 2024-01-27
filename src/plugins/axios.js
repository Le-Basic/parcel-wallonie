import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://observatoire-filieres.azurewebsites.net'
});

export default (Vue) => Vue.provide('$axios', instance);
