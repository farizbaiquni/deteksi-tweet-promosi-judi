// {
//                             (value === StatistikFilterPrediction.keduanya) ? (
//                                 <Fragment>
//                                     {
//                                         resultPrediction.map((tweet: ResultPredictionType, index) => (
//                                              <tr className="text-gray-700" key={tweet.id_str}>
//                                                 <td className="dark:border-dark-5 border-2 border-gray-300 p-2 text-center">
//                                                 {index}
//                                                 </td>
//                                                 <td className="dark:border-dark-5 border-2 border-gray-300 p-2">
//                                                 {tweet.full_text}
//                                                 </td>
//                                                 <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
//                                                 {convertDateFormat(tweet.created_at)}
//                                                 </td>
//                                                 <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
//                                                 {tweet.prediction === 1 ? "Promosi" : "Tidak"}
//                                                 </td>
//                                             </tr>
//                                         ))
//                                     }
//                                 </Fragment>
//                             ) : (value === StatistikFilterPrediction.promosi_judi) ? (
//                                 <Fragment>
//                                     {
//                                         resultPredictionPromosi.map((tweet: ResultPredictionType) => (
//                                             <tr className="text-gray-700" key={tweet.id_str}>
//                                                 <td className="dark:border-dark-5 border-2 border-gray-300 p-2 text-center">
//                                                 {index}
//                                                 </td>
//                                                 <td className="dark:border-dark-5 border-2 border-gray-300 p-2">
//                                                 {tweet.full_text}
//                                                 </td>
//                                                 <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
//                                                 {convertDateFormat(tweet.created_at)}
//                                                 </td>
//                                                 <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
//                                                 {"Promosi"}
//                                                 </td>
//                                             </tr>
//                                         ))
//                                     }
//                                 </Fragment>
//                             ) : (
//                                 <Fragment>
//                                     {
//                                         resultPredictionTidakPromosi.map((tweet: ResultPredictionType) => (
//                                             <tr className="text-gray-700" key={tweet.id_str}>
//                                                 <td className="dark:border-dark-5 border-2 border-gray-300 p-2 text-center">
//                                                 {index}
//                                                 </td>
//                                                 <td className="dark:border-dark-5 border-2 border-gray-300 p-2">
//                                                 {tweet.full_text}
//                                                 </td>
//                                                 <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
//                                                 {convertDateFormat(tweet.created_at)}
//                                                 </td>
//                                                 <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
//                                                 {"Tidak"}
//                                                 </td>
//                                             </tr>
//                                         ))
//                                     }
//                                 </Fragment>
//                             )
//                         }
