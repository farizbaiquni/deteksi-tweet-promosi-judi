import { Fragment } from "react";
import { ResultPredictionType, StatistikFilterPrediction } from "../../constants/constants";

type PropsType = {
    resultPrediction: Array<ResultPredictionType>
    filter: StatistikFilterPrediction
    resultPredictionPromosi: Array<ResultPredictionType>,
    resultPredictionTidakPromosi: Array<ResultPredictionType>,
}

function OnlyTabel({resultPrediction, filter} : PropsType) {

    function convertMonth(monthAbbreviation: string): string {
        switch (monthAbbreviation.toLowerCase()) {
            case 'jan':
                return 'Januari';
            case 'feb':
                return 'Februari';
            case 'mar':
                return 'Maret';
            case 'apr':
                return 'April';
            case 'may':
                return 'Mei';
            case 'jun':
                return 'Juni';
            case 'jul':
                return 'Juli';
            case 'aug':
                return 'Agustus';
            case 'sep':
                return 'September';
            case 'oct':
                return 'Oktober';
            case 'nov':
                return 'November';
            case 'dec':
                return 'Desember';
            default:
                return '';
        }
    }

    function convertDateFormat(originalDateString: string): string {
        const months = [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        
        const dateParts = originalDateString.split(' ');
        const day = dateParts[2];
        const month = convertMonth(dateParts[1]);
        const year = dateParts[5];
    
        return `${day} ${month} ${year}`;
    }

    return ( 
        <Fragment>
            {
                resultPrediction.map((tweet: ResultPredictionType) => {
                    if(filter === StatistikFilterPrediction.keduanya) {
                        return (
                            <tr className="text-gray-700" key={tweet.id_str}>
                                <td className="dark:border-dark-5 border-2 border-gray-300 p-2 text-center">
                                {0}
                                </td>
                                <td className="dark:border-dark-5 border-2 border-gray-300 p-2">
                                {tweet.full_text}
                                </td>
                                <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
                                {convertDateFormat(tweet.created_at)}
                                </td>
                                <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
                                {tweet.prediction === 1 ? "Promosi" : "Tidak"}
                                </td>
                            </tr> 
                        )
                    } else if (filter === StatistikFilterPrediction.promosi_judi){
                        if(tweet.prediction === 1) {
                            return (
                                <tr className="text-gray-700" key={tweet.id_str}>
                                    <td className="dark:border-dark-5 border-2 border-gray-300 p-2 text-center">
                                    {0}
                                    </td>
                                    <td className="dark:border-dark-5 border-2 border-gray-300 p-2">
                                    {tweet.full_text}
                                    </td>
                                    <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
                                    {convertDateFormat(tweet.created_at)}
                                    </td>
                                    <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
                                    {"Promosi Judi"}
                                    </td>
                                </tr>
                            )
                        }
                    } else if (filter === StatistikFilterPrediction.tidak_promosi_judi) {
                        if(tweet.prediction === 0) {
                            return (
                                <tr className="text-gray-700" key={tweet.id_str}>
                                    <td className="dark:border-dark-5 border-2 border-gray-300 p-2 text-center">
                                    {0}
                                    </td>
                                    <td className="dark:border-dark-5 border-2 border-gray-300 p-2">
                                    {tweet.full_text}
                                    </td>
                                    <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
                                    {convertDateFormat(tweet.created_at)}
                                    </td>
                                    <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
                                    {"Tidak Promosi"}
                                    </td>
                                </tr>
                            )
                        }
                    }
                }) 
            }
        </Fragment>
    )
}

export default OnlyTabel;