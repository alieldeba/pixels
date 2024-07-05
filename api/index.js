import axios from "axios";

const baseUrl = "https://pixabay.com";

export const getImages = async (
  page = 1,
  search = "",
  category = "animals"
) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api?key=${process.env.API_KEY}&per_page=30&safesearch=true&q=${search}&page=${page}&category=${category}`
    );

    const { data } = response;

    return { success: true, data };
  } catch (error) {
    console.log(error);
    return { success: false, error: error.message };
  }
};
