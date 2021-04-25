import axios from 'axios';

const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key: "AIzaSyBeKWhpmc6mYPVeDdR1FR_-HnOPtw9bhYI",
    }
})

export default request