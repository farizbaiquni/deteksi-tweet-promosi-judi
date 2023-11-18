import { exec } from "child_process";

export default function runTweetHarvest(
  filename: string,
  searchKeyword: string,
  limit: number,
  authToken: string,
): void {
  alert("execute");
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
