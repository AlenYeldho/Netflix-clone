import { Api_key ,baseUrl} from "./constants/constants";
export const trending=`${baseUrl}trending/movie/week?api_key=${Api_key}`
export const orginals=`${baseUrl}discover/tv?api_key=${Api_key}&with_networks=213`
export const action=`${baseUrl}discover/movie?api_key=${Api_key}&with_genres=28`
export const comedy=`${baseUrl}discover/movie?api_key=${Api_key}&with_genres=35`
export const horror=`${baseUrl}discover/movie?api_key=${Api_key}&with_genres=27`
export const romance=`${baseUrl}discover/movie?api_key=${Api_key}&with_genres=10749`