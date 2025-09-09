import axios from "axios";


const api =  axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    params:{
        api_key:'8a7b91dada37796be59f9ea62e4502e4',
        language:'pt-BR',
        page:1
        
    }
})
 export default api

//8a7b91dada37796be59f9ea62e4502e4

//'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' 
