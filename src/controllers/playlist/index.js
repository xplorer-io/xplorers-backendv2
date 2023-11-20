export const playlistsController = async (request, response) => {
  try {
    const resFromYT = await fetch(
      "https://www.googleapis.com/youtube/v3/channels",
      {
        headers: {},
        body: {
          forUsername: "chaiaurcode",
        },
      }
    );

    console.log(resFromYT);

    return response.status(200).json({
      isSuccess: true,
      message: "controller worked",
    });
  } catch (error) {
    return response.status(500).json({
      isSuccess: false,
      message: "Internal Server Error",
    });
  }
};
