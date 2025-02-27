import axios from 'axios'
import {toast} from 'react-toastify';

const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

const notify = () => toast("Attention erreur!");

async function getPokemonByName(PokeName) {
  const response = await axiosInstance.get(`/pokemon/${PokeName}`);
  return response.data;
}

axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  notify(error.message);
});

export default getPokemonByName