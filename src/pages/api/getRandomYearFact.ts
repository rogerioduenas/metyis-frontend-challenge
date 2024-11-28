export async function getRandomYearFact() {
  const url = 'http://numbersapi.com/random/year?min=1800&max=2000&json';

  try {
    const response = await fetch(url);
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