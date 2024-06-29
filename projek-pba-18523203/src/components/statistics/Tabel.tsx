import { Fragment, useEffect, useState } from "react";
import { ResultPredictionType, StatistikFilterPrediction } from "../../constants/constants";
import OnlyTabel from "./OnlyTabel";

type PropsType = {
    resultPrediction: Array<ResultPredictionType>
    resultPredictionPromosi: Array<ResultPredictionType>,
    resultPredictionTidakPromosi: Array<ResultPredictionType>,
}

function Tabel({resultPrediction, resultPredictionPromosi, resultPredictionTidakPromosi} : PropsType) {

    const [value, setValue] = useState<StatistikFilterPrediction>(StatistikFilterPrediction.keduanya);

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

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };
    
    useEffect(() => {
        console.log("valuenya:")
        console.log(value)
    }, [value])

    return ( 
        <div className="mt-10 w-full flex-col bg-white shadow-lg shadow-gray-300">
            <p className=" mb-7 pt-10 text-center text-2xl font-bold text-gray-500">
            Daftar Hasil Prediksi Tweet
            </p>
            {/* <div className=" px-5 mb-3 flex items-center justify-end">
                <p>Filter: </p>    
                <select onChange={(e: any) => setValue(e.target.value)} className="block px-3 py-2 ml-3 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                    <option value={StatistikFilterPrediction.keduanya}>
                        Promosi Judi dan Tidak Promosi Judi
                    </option>
                    <option value={StatistikFilterPrediction.promosi_judi}>
                        Promosi Judi
                    </option>
                    <option value={StatistikFilterPrediction.tidak_promosi_judi}>
                        Tidak Promosi Judi
                    </option>
                </select>
            </div> */}
            <div className="mx-5 h-[500px] overflow-y-auto">
                <table className="table w-full rounded-lg border-2 border-gray-300 bg-white p-4 shadow">
                    <thead>
                    <tr>
                        <th className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-4 font-semibold text-gray-700">
                        No
                        </th>
                        <th className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-4 font-semibold text-gray-700">
                        Teks Tweet
                        </th>
                        <th className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-4 font-semibold text-gray-700">
                        Tanggal
                        </th>
                        <th className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-4 font-semibold text-gray-700">
                        Prediksi
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            resultPrediction.map((tweet: ResultPredictionType, index) => (
                                <tr className="text-gray-700">
                                   <td className="dark:border-dark-5 border-2 border-gray-300 p-2 text-center">
                                   {index + 1}
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
                           ))
                        }
                        {/* {
                                (value === StatistikFilterPrediction.keduanya) ? (
                                    <Fragment>
                                        {
                                            resultPrediction.map((tweet: ResultPredictionType, index) => (
                                                <tr className="text-gray-700">
                                                    <td className="dark:border-dark-5 border-2 border-gray-300 p-2 text-center">
                                                    {index + 1}
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
                                            ))
                                        }
                                    </Fragment>
                                ) : (value === StatistikFilterPrediction.promosi_judi) ? (
                                    <Fragment>
                                        {
                                            resultPredictionPromosi.map((tweet: ResultPredictionType, index) => (
                                                <tr className="text-gray-700">
                                                    <td className="dark:border-dark-5 border-2 border-gray-300 p-2 text-center">
                                                    {index + 1}
                                                    </td>
                                                    <td className="dark:border-dark-5 border-2 border-gray-300 p-2">
                                                    {tweet.full_text}
                                                    </td>
                                                    <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
                                                    {convertDateFormat(tweet.created_at)}
                                                    </td>
                                                    <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
                                                    {"Promosi"}
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        {
                                            resultPredictionTidakPromosi.map((tweet: ResultPredictionType, index) => (
                                                <tr className="text-gray-700">
                                                    <td className="dark:border-dark-5 border-2 border-gray-300 p-2 text-center">
                                                    {index}
                                                    </td>
                                                    <td className="dark:border-dark-5 border-2 border-gray-300 p-2">
                                                    {tweet.full_text}
                                                    </td>
                                                    <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
                                                    {convertDateFormat(tweet.created_at)}
                                                    </td>
                                                    <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
                                                    {"Tidak"}
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </Fragment>
                                )
                            } */}
                    </tbody>
                </table>
            <div className=" h-10"></div>
            </div>
        </div>
    );
}

export default Tabel;