import { exec } from "child_process";

export function runTweetHarvest(
  filename: string,
  searchKeyword: string,
  limit: number,
  authToken: string
): void {
  const command = `npx --yes tweet-harvest@latest -o "${filename}" -s "${searchKeyword}" -l ${limit} --token ${authToken}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      // Handle the error case here
    } else {
      // The command was successful
      console.log(`Output: ${stdout}`);
    }
  });
}

// // main.js

// import { runTweetHarvest } from './tweetHarvest';

// // Example usage:
// const filename = 'output.json';
// const searchKeyword = 'your_search_keyword';
// const limit = 100;
// const authToken = 'your_twitter_auth_token';

// runTweetHarvest(filename, searchKeyword, limit, authToken);
