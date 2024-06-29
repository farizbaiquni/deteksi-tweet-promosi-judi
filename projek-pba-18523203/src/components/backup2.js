// {
//     resultPrediction.map((tweet: ResultPredictionType) => {
//         return (
//             <tr className={`text-gray-700 ${value !== StatistikFilterPrediction.keduanya ? "hidden" : ""}`} key={tweet.id_str}>
//                 <td className="dark:border-dark-5 border-2 border-gray-300 p-2 text-center">
//                 {0}
//                 </td>
//                 <td className="dark:border-dark-5 border-2 border-gray-300 p-2">
//                 {tweet.full_text}
//                 </td>
//                 <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
//                 {convertDateFormat(tweet.created_at)}
//                 </td>
//                 <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
//                 {tweet.prediction === 1 ? "Promosi" : "Tidak"}
//                 </td>
//             </tr>
//         )
//     })
// }
// {
// resultPredictionPromosi.map((tweet: ResultPredictionType) => {
//     return (
//         <tr className={`text-gray-700 ${value !== StatistikFilterPrediction.promosi_judi ? "hidden" : ""}`} key={tweet.id_str}>
//             <td className="dark:border-dark-5 border-2 border-gray-300 p-2 text-center">
//             {0}
//             </td>
//             <td className="dark:border-dark-5 border-2 border-gray-300 p-2">
//             {tweet.full_text}
//             </td>
//             <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
//             {convertDateFormat(tweet.created_at)}
//             </td>
//             <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
//             {"Promosi"}
//             </td>
//         </tr>
//     )
// })
// }
// {
// resultPredictionTidakPromosi.map((tweet: ResultPredictionType) => {
//     return (
//         <tr className={`text-gray-700 ${value !== StatistikFilterPrediction.tidak_promosi_judi ? "hidden" : ""}`} key={tweet.id_str}>
//             <td className="dark:border-dark-5 border-2 border-gray-300 p-2 text-center">
//             {0}
//             </td>
//             <td className="dark:border-dark-5 border-2 border-gray-300 p-2">
//             {tweet.full_text}
//             </td>
//             <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
//             {convertDateFormat(tweet.created_at)}
//             </td>
//             <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
//             {"Tidak"}
//             </td>
//         </tr>
//     )
// })
// }
