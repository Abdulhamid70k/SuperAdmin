import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

const InquiryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [isSecondDropdownVisible, setIsSecondDropdownVisible] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
  const [secondSelectedOption, setSecondSelectedOption] = useState("");
  const [isThirdDropdownOpen, setIsThirdDropdownOpen] = useState(false);
  const [ThirdSelectedOption, setThirdSelectedOption] = useState("");

  const options = ["Nikola Tesla", "Lorem Ipsanum", "Albert Einstein"];
  const options2 = ["Hakuna Matata", "Singham", "Dabbang", "Sultan"];
  const options3 = ["Call", "Email", "Whatsapp", "Property Visit"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleSecondOptionClick = (option) => {
    setSecondSelectedOption(option);
    setIsSecondDropdownOpen(false);
  };
  const handleThirdOptionClick = (option) => {
    setThirdSelectedOption(option);
    setIsThirdDropdownOpen(false);
  };

  return (
    <div className="bg-white dark:bg-boxdark rounded-lg shadow-default dark:shadow-card p-6 space-y-6">
      <Dropdown
        label="Select Option"
        options={options}
        selectedOption={selectedOption}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onOptionClick={handleOptionClick}
      />

      <div className="space-y-2">
        <span className="flex justify-between items-center">
          <label className="block text-sm font-medium text-black dark:text-white">
            Last Follow up Date
          </label>
          <h1 className="text-blue-700 text-sm font-medium underline">
            FollowUP History
          </h1>
        </span>

        <input
          type="date"
          className="w-full px-3 py-2 border border-stroke dark:border-strokedark rounded-md focus:outline-none focus:ring-1 focus:ring-primary bg-transparent text-black dark:text-white [&::-webkit-calendar-picker-indicator]:dark:invert"
          value={selectedDate || ""}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <span className="flex justify-between items-center">
        <label className="block text-sm font-medium text-black dark:text-white">
          Action Taken
        </label>
      </span>
      <Dropdown
        label="Select Second Option"
        options={options3}
        selectedOption={ThirdSelectedOption}
        isOpen={isThirdDropdownOpen}
        setIsOpen={setIsThirdDropdownOpen}
        onOptionClick={handleThirdOptionClick}
      />

      <div className="space-y-2">
        <label className="flex items-center space-x-2 text-sm font-medium text-black dark:text-white">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-primary rounded focus:ring-primary"
            onChange={(e) => {
              setIsSecondDropdownVisible(e.target.checked);
              setIsSecondDropdownOpen(e.target.checked);
            }}
          />
          <span>Escalated?</span>
        </label>
      </div>

      {isSecondDropdownVisible && (
        <Dropdown
          label="Select Second Option"
          options={options2}
          selectedOption={secondSelectedOption}
          isOpen={isSecondDropdownOpen}
          setIsOpen={setIsSecondDropdownOpen}
          onOptionClick={handleSecondOptionClick}
        />
      )}

      <div>
        <label
          htmlFor="remarks"
          className="block text-sm font-medium text-gray-700 dark:text-bodydark mb-1"
        >
          Remarks
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 dark:border-form-strokedark rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-gray-50 dark:bg-form-input dark:text-bodydark2"
          rows="3"
         type="text"
        ></input>
      </div>
      <button className="mt-8 bg-primary text-white py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
              Save
            </button>
    </div>
  );
};

const Dropdown = ({
  label,
  options,
  selectedOption,
  isOpen,
  setIsOpen,
  onOptionClick,
}) => (
  <div className="relative">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="w-full flex items-center justify-between px-4 py-2 text-sm text-black dark:text-white bg-white dark:bg-boxdark border border-stroke dark:border-strokedark rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
    >
      {selectedOption || label}
      <ChevronDownIcon
        className={`ml-2 h-5 w-5 text-body dark:text-bodydark ${
          isOpen ? "transform rotate-180" : ""
        }`}
      />
    </button>
    {isOpen && (
      <ul className="absolute z-10 w-full mt-1 bg-white dark:bg-boxdark border border-stroke dark:border-strokedark rounded-md shadow-default dark:shadow-card max-h-60 overflow-auto">
        {options.map((option, index) => (
          <li
            key={index}
            className="px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-2 dark:hover:bg-meta-4 cursor-pointer"
            onClick={() => onOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default InquiryDropdown;
