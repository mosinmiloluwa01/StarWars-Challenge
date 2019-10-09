import { displayMessage, getSumOfHeights, convertToFeet } from '<helpers>/utils';
import { getCasts } from '<services>';

const getMovieCasts = async (req, res) => {
  try {
    const { gender, sortParams, order } = req.query;
    const { id } = req.params;
    const movieCasts = await getCasts({ gender, sortParams, order, id });
    const sumOfHeightsInCM = await getSumOfHeights(movieCasts);
    const sumOfHeightsInFeet = convertToFeet(sumOfHeightsInCM);

    const data = {
      message: 'data retrieved successfully',
      data: movieCasts,
      metaData: {
        characterCount: movieCasts.length,
        totalHeight: {
          cm: sumOfHeightsInCM,
          inches: sumOfHeightsInFeet
        }
      },
    };
    return displayMessage(res, 200, data);
  } catch (error) {
    return displayMessage(res, 500, { error: error.message });
  }
};

export default getMovieCasts;
