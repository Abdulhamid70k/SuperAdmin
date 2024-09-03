import React from 'react';

const mockInquiries = [
  { id: 1, fullName: "Besique Monroe", email: "besique@example.com", company: "TechCorp", phoneNumber: "123-456-7890", Time: "01:00pm", Date: "01-12-2024", propertyType: "Commercial", remarks: "Interested in office space" },
  { id: 2, fullName: "James Cavier", email: "james@example.com", company: "WriteCo", phoneNumber: "098-765-4321", Time: "01:00pm", Date: "01-12-2024", propertyType: "Residential", remarks: "Looking for a family home" },
  { id: 3, fullName: "Elvis Son", email: "elvis@example.com", company: "EditPro", phoneNumber: "111-222-3333", Time: "01:00pm", Date: "01-12-2024", propertyType: "Industrial", remarks: "Needs warehouse space" },
  { id: 4, fullName: "Dana White", email: "dana@example.com", company: "SportsCo", phoneNumber: "444-555-6666", Time: "01:00pm", Date: "01-12-2024", propertyType: "Commercial", remarks: "Seeking retail space" },
  { id: 5, fullName: "Elvis Son", email: "elvis2@example.com", company: "EditMax", phoneNumber: "777-888-9999", Time: "01:00pm", Date: "01-12-2024", propertyType: "Residential", remarks: "Interested in vacation property" },
];

const InquiryList = ({ onSelectInquiry }) => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 dark:bg-boxdark">
      <div className="shadow-lg rounded-lg overflow-hidden">
        <table className="w-full bg-white dark:bg-boxdark-2 table-auto">
          <thead className="bg-primary text-white uppercase text-sm leading-normal">
            <tr>
              <th className="py-4 px-6 text-left">Sr. No</th>
              <th className="py-4 px-6 text-left">Full Name</th>
              <th className="py-4 px-6 text-left">Company</th>
              <th className="py-4 px-6 text-left">Property Type</th>
              <th className="py-4 px-6 text-left">Phone Number</th>
              <th className="py-4 px-6 text-left">Time</th>
              <th className="py-4 px-6 text-left">Date</th>
              <th className="py-4 px-6 text-left">Remarks</th>
            </tr>
          </thead>
          <tbody className="text-black dark:text-bodydark text-sm divide-y divide-stroke dark:divide-strokedark">
            {mockInquiries.map((inquiry, index) => (
              <tr 
                key={inquiry.id} 
                onClick={() => onSelectInquiry(inquiry)} 
                className="hover:bg-gray-2 dark:hover:bg-meta-4 transition-all duration-200 cursor-pointer"
              >
                <td className="py-4 px-6 text-left whitespace-nowrap">{index + 1}</td>
                <td className="py-4 px-6 text-left">{inquiry.fullName}</td>
                <td className="py-4 px-6 text-left">{inquiry.company}</td>
                <td className="py-4 px-6 text-left">{inquiry.propertyType}</td>
                <td className="py-4 px-6 text-left">{inquiry.phoneNumber}</td>
                <td className="py-4 px-6 text-left">{inquiry.Time}</td>
                <td className="py-4 px-6 text-left">{inquiry.Date}</td>
                <td className="py-4 px-6 text-left">{inquiry.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InquiryList;