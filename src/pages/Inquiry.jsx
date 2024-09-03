import React, { useState } from 'react';
import Inquries from '../components/Inquiry/Inquries';
import InquiryDetailForm from '../components/Inquiry/InquiryDetailForm';
import InquiryDropdown from '../components/Inquiry/InquiryDropdown';

const Inquiry = () => {
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  const handleSelectInquiry = (inquiry) => {
    setSelectedInquiry(inquiry);
  };

  const handleBackToList = () => {
    setSelectedInquiry(null);
  };

  return (
    <div className="bg-gray-2 dark:bg-boxdark-2  p-8 font-satoshi">
      <div className="max-w-7xl mx-auto">
        {!selectedInquiry ? (
          <>
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8 border-b-2 border-stroke dark:border-strokedark pb-4">
              Inquiry List
            </h2>
            <Inquries onSelectInquiry={handleSelectInquiry} />
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8 border-b-2 border-stroke dark:border-strokedark pb-4">
              Inquiry Details
            </h2>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 bg-white dark:bg-boxdark rounded-lg shadow-default dark:shadow-card p-6">
                <InquiryDetailForm inquiry={selectedInquiry} />
              </div>
              <div className="lg:w-1/3">
                <InquiryDropdown />
              </div>
            </div>
            
          </>
        )}
      </div>
    </div>
  );
};

export default Inquiry;