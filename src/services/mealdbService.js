const URL = "https://www.themealdb.com/api/json/v1/1";

export async function search(meal) {
  try {
    const res = await fetch(`${URL}/search.php?s=${meal}`);
    const data = await res.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error searching meals:", error);
    return [];
  }
}

export async function random() {
  try {
    const res = await fetch(`${URL}/random.php`);
    if (!res.ok) throw new Error("Failed to fetch random meal");
    const data = await res.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching random meal:", error);
    return [];
  }
}

export async function getCategories() {
  try {
    const res = await fetch(`${URL}/list.php?c=list`);
    if (!res.ok) throw new Error("Failed to fetch random meal");
    const data = await res.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching random meal:", error);
    return [];
  }
}
