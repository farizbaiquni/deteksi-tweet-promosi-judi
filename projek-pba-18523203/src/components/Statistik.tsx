import runTweetHarvest from "../query-tweets/queryTweets";

function Statistik() {
  // Example usage:
  const filename = "output.csv";
  const searchKeyword = "mkmk lang:id";
  const limit = 10;
  const authToken = process.env.TWITTER_KEY?.toString() ?? "";

  return (
    <div>
      {/* <button
        onClick={() => {
          runTweetHarvest(filename, searchKeyword, limit, authToken);
        }}
        type="button"
        className="w-full rounded-lg  bg-green-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
      >
        Valider
      </button> */}
    </div>
  );
}

export default Statistik;
