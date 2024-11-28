export async function getRandomYearFact() {
  const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
  const API_URL = 'http://numbersapi.com/random/year?min=1800&max=2000&json';

  try {
    const response = await fetch(`${PROXY_URL}${API_URL}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching random year fact:', error);
    return null;
  }
}
