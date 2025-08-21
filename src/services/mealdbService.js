const URL = "https://www.themealdb.com/api/json/v1/1";

export async function search(meal) {
  try {
    const res = await fetch(`${URL}/search.php?s=${meal}`);
    const data = await res.json();
    console.log(data);
    return data.meals || [];
  } catch (error) {
    console.error("Error searching meals:", error);
    return [];
  }
}
