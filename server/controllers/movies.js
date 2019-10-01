import { getMovies } from '<services>';
import { displayMessage } from '<helpers>/utils';

const getMovieList = async (req, res) => {
  try {
    const films = await getMovies();
    return displayMessage(res, 200, { message: 'data retrieved successfully', data: films });
  } catch (error) {
    return displayMessage(res, 500, { error: error.message });
  }
};

export default getMovieList;
