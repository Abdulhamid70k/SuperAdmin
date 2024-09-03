

const packageData = [
  {
    CompanyName: 'Kutreya',
    Phonenumber: "8947848287",
    subscriptionHolder: `Anukul Kutreya`,
    Validity: '05/02/2025',
    NumberOFProperties: "20"
  },
  {
    CompanyName: 'canny choice',
    Phonenumber: "8947848287",
    subscriptionHolder: `ankita gadhedi`,
    Validity: '05/02/2023',
    NumberOFProperties: "5"

  },
  
];

const Subscriptions = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                 Company Name
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
              Subscription Holder
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
              Phone Number
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                No. of Properties
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Validity
              </th>
              
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.CompanyName}
                  </h5>
                  <p className="text-sm">{packageItem.price}</p>
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
                  
                    {packageItem.NumberOFProperties}
                  
                </td>




                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      packageItem.Validity === '05/02/2025'
                        ? 'bg-success text-success'
                        : packageItem.Validity === '05/02/2023'
                        ? 'bg-danger text-danger'
                        : 'bg-warning text-warning'
                    }`}
                  >
                    {packageItem.Validity}
                  </p>
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
