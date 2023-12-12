import axios from "axios";
export default axios.create({
    baseURL:'https://raw.githubusercontent.com/fhsinchy/movieist/master/',
    headers:{'Access-Control-Allow-Origin': '*',}
});