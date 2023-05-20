import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async(url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'f743800b88mshe7537df60c9bd90p1b7511jsn01e8ce15e2be',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data;
}
