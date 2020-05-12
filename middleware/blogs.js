import axios from 'axios'

export default function(context){
  return axios.get('http://backend/blogs')
}
