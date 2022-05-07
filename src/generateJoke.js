import axios from 'axios';

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  };

  axios.get('https://icanhazdadjoke.com', config).then((res) => {
    console.log(res);
    document.getElementById('joke').innerHTML = res.data.joke;
  });
}
generateJoke();

export default generateJoke;
