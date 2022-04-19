import axios from "axios";
export default axios.create({
    baseURL:'https://api.unsplash.com/search/photos/?client_id=KqfZvsAd5rdadDKnv_ZFnEQOh3VmzE7i4YgJbOh3X_g&query=dragon&per_page=30&page=2',
    withCredentials:false,
    headers: {
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Origin':'request-originating server addresses'
    }
})