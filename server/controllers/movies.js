import filmService from '<services>/film';
import displayMessage from '<helpers>/utils';

const getMovieList = async (req, res) => {
  try {
    const films = await filmService();
    return displayMessage(res, 200, 'data retrieved successfully', films);
  } catch (error) {
    return displayMessage(res, 500, error.message, null, false);
  }
};

export default getMovieList;
