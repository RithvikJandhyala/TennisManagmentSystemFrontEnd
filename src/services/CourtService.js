import axios from 'axios'

const COURTS_REST_API_URL ='http://localhost:9090/api/courts';

class CourtService {
    getCourts(){
       return  axios.get(COURTS_REST_API_URL);
    }
    createCourt(court){
        return axios.post(COURTS_REST_API_URL,court)
    }
}

export default new CourtService()