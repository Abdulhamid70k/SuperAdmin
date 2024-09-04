import React from 'react';

const mockInquiries = [
  { id: 1, fullName: "Besique Monroe", email: "besique@example.com", company: "TechCorp", phoneNumber: "123-456-7890", Time: "01:00pm", Date: "01-12-2024", NumerOfProperties: "10", propertyType: "Hotel", remarks: "Interested in office space" },
  { id: 2, fullName: "James Cavier", email: "james@example.com", company: "WriteCo", phoneNumber: "098-765-4321", Time: "01:00pm", Date: "01-12-2024", NumerOfProperties: "15", propertyType: "Cafe", remarks: "Looking for a family home" },
  { id: 3, fullName: "Elvis Son", email: "elvis@example.com", company: "EditPro", phoneNumber: "111-222-3333", Time: "01:00pm", Date: "01-12-2024", NumerOfProperties: "13", propertyType: "Resort", remarks: "Needs warehouse space" },
  { id: 4, fullName: "Dana White", email: "dana@example.com", company: "SportsCo", phoneNumber: "444-555-6666", Time: "01:00pm", Date: "01-12-2024", NumerOfProperties: "25", propertyType: "Hostel & PG", remarks: "Seeking retail space" },
  { id: 5, fullName: "Elvis Son", email: "elvis2@example.com", company: "EditMax", phoneNumber: "777-888-9999", Time: "01:00pm", Date: "01-12-2024", NumerOfProperties: "67", propertyType: "Restaurants", remarks: "Interested in vacation property" },
];

const InquiryList = ({ onSelectInquiry }) => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 dark:bg-boxdark">
      <div className="shadow-lg rounded-lg overflow-hidden bg-white dark:bg-boxdark-2">
        <table className="w-full table-auto whitespace-nowrap">
          <thead className="bg-primary text-white uppercase text-sm leading-normal text-center">
            <tr>
              <th className="py-4 px-2">Sr. No</th>
              <th className="py-4 px-2">Full Name</th>
              <th className="py-4 px-2">Company</th>
              <th className="py-4 px-2">Property Type</th>
              <th className="py-4 px-2">No. of Properties</th>
              <th className="py-4 px-2">Phone</th>
              <th className="py-4 px-2">Time</th>
              <th className="py-4 px-2">Date</th>
              <th className="py-4 px-2">Remarks</th>
            </tr>
          </thead>
          <tbody className="text-black dark:text-bodydark text-sm divide-y divide-stroke dark:divide-strokedark text-center">
            {mockInquiries.map((inquiry, index) => (
              <tr 
                key={inquiry.id} 
                onClick={() => onSelectInquiry(inquiry)} 
                className={`cursor-pointer transition-all duration-200 ${
                  index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : 'bg-white dark:bg-boxdark-2'
                } hover:bg-gray-100 dark:hover:bg-meta-4`}
              >
                <td className="py-3 px-2">{index + 1}</td>
                <td className="py-3 px-2 font-medium">{inquiry.fullName}</td>
                <td className="py-3 px-2">{inquiry.company}</td>
                <td className="py-3 px-2">{inquiry.propertyType}</td>
                <td className="py-3 px-2">{inquiry.NumerOfProperties}</td>
                <td className="py-3 px-2">{inquiry.phoneNumber}</td>
                <td className="py-3 px-2">{inquiry.Time}</td>
                <td className="py-3 px-2">{inquiry.Date}</td>
                <td className="py-3 px-2">{inquiry.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InquiryList;
