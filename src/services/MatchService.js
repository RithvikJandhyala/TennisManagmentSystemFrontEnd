import axios from 'axios'

const MATCHES_REST_API_URL ='http://localhost:9090/api/matches';

class MatchService {
    getMatches(){
       return  axios.get(MATCHES_REST_API_URL);
    }
    createMatch(match){
        return axios.post(MATCHES_REST_API_URL,match)
    }
}

export default new MatchService()