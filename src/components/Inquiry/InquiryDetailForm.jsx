import React from 'react';

const InquiryDetailForm = ({ inquiry }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="First Name" value={inquiry.fullName.split(' ')[0]} />
        <InputField label="Last Name" value={inquiry.fullName.split(' ').slice(1).join(' ')} />
        <InputField label="Company" value={inquiry.company} />
        <InputField label="Phone Number" value={inquiry.phoneNumber} />
        <InputField label="Work Email" value={inquiry.email} />
        <InputField label="Property Type" value={inquiry.propertyType} />
      </div>
      <div>
        <label htmlFor="remarks" className="block text-sm font-medium text-gray-700 dark:text-bodydark mb-1">
          Remarks
        </label>
        <textarea
          id="remarks"
          className="w-full px-3 py-2 border border-gray-300 dark:border-form-strokedark rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-gray-50 dark:bg-form-input dark:text-bodydark2"
          rows="3"
          value={inquiry.remarks}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

const InputField = ({ label, value }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-bodydark mb-1">{label}</label>
    <input
      type="text"
      className="w-full px-3 py-2 border border-gray-300 dark:border-form-strokedark rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-gray-50 dark:bg-form-input dark:text-bodydark2"
      value={value}
      readOnly
    />
  </div>
);

export default InquiryDetailForm;
