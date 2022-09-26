import axios from "axios";

const key ="83ebd986773b0e6f09c4c8d8600192f0";
const segredo = "c99e1b1bfc0d1e50";

export const api = axios.create({
    baseURL:`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=`
});