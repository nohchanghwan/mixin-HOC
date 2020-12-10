import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    //동일한 URL중복을 막기위해 BaseURL생성
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
function fetchNewsList() {
    return axios.get( config.baseUrl + 'news/1.json');
    // return axios.get(`${config.baseUrl}news/1.json'); 백틱을 이용한 방법
}
function fetchJobsList() {
    return axios.get( config.baseUrl + 'ask/1.json');
    // return axios.get(`${config.baseUrl}news/1.json'); 백틱을 이용한 방법
}
function fetchAskList() {
    return axios.get( config.baseUrl + 'jobs/1.json');
    // return axios.get(`${config.baseUrl}news/1.json'); 백틱을 이용한 방법
}

export { 
    fetchNewsList,
    fetchJobsList,
    fetchAskList
}

