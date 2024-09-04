const packageData = [
  {
    CompanyName: 'Kutreya',
    Phonenumber: "8947848287",
    subscriptionHolder: `Anukul Kutreya`,
    Validity: '05/02/2025',
    NumberOFProperties: "20"
  },
  {
    CompanyName: 'Canny Choice',
    Phonenumber: "8947848287",
    subscriptionHolder: `Ankita Gadhedi`,
    Validity: '05/02/2023',
    NumberOFProperties: "5"
  },
];

const Subscriptions = () => {
  return (
    <div className="rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-blue-500 text-center text-white shadow-md dark:bg-blue-700">
              <th className="min-w-[150px] py-4 px-4 font-semibold text-white border-b border-blue-600 dark:border-blue-800">
                Company Name
              </th>
              <th className="min-w-[150px] py-4 px-4 font-semibold text-white border-b border-blue-600 dark:border-blue-800">
                Subscription Holder
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold text-white border-b border-blue-600 dark:border-blue-800">
                Phone Number
              </th>
              <th className="min-w-[150px] py-4 px-4 font-semibold text-white border-b border-blue-600 dark:border-blue-800">
                No. of Properties
              </th>
              <th className="min-w-[150px] py-4 px-4 font-semibold text-white border-b border-blue-600 dark:border-blue-800">
                Validity
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, key) => (
              <tr key={key} className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-center">
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.CompanyName}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.subscriptionHolder}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.Phonenumber}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.NumberOFProperties}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <span
                    className={`inline-flex rounded-full py-1 px-3 text-sm font-medium ${
                      packageItem.Validity === '05/02/2025'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : packageItem.Validity === '05/02/2023'
                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}
                  >
                    {packageItem.Validity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscriptions;
