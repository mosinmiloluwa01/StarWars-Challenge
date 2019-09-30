import { displayMessage, getSumOfHeights, convertToFeet } from '<helpers>/utils';
import { getCasts } from '<services>';

const getMovieCasts = async (req, res) => {
  try {
    const movieCasts = await getCasts(req.params.gender, req.query.sortParams);
    const sumOfHeightsInCM = await getSumOfHeights(movieCasts);
    const sumOfHeightsInFeet = convertToFeet(sumOfHeightsInCM);

    const data = {
      message: 'data retrieved successfully',
      data: movieCasts,
      metaData: {
        characterCount: movieCasts.length,
        totalHeight: `${sumOfHeightsInCM}cm makes ${sumOfHeightsInFeet}`
      },
    };
    return displayMessage(res, 200, data);
  } catch (error) {
    return displayMessage(res, 500, { error: error.message });
  }
};

export default getMovieCasts;
