import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchAPI = async (url) => {
    const { data } = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '1e3746f8fcmsheefea15cee6471ep11efe9jsn48e2d7a20007',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });

    return data;
}

//d5b7432c2cmshad3afb950e99888p1a5397jsnc1f5d48e599e