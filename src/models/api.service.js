import Axios from 'axios';

class SiteApi {

    constructor(){
        this.ApiUrl = 'http://localhost/cs/public/api';
    }

    async get(url) {
        try {
            return await Axios.get(this.ApiUrl+'/'+url);
        } catch (error) {
            console.log(error);
        }
    }

    async post(url,data) {
        try {
            return await Axios.post(this.ApiUrl+'/'+url,data);
        } catch (error) {
            console.log(error);
        }
    }


}
export default new SiteApi();

