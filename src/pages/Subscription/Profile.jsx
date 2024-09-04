import React from 'react';

const Profile = ({ subscription, bookingDetails = {} }) => {
  const { CompanyName, Phonenumber, Email, Logo } = subscription || {};

  // Safely access bookingDetails with default values to prevent errors
  const {
    status = 'N/A',
    reservationID = 'N/A',
    revisionID = 'N/A',
    bookedAt = 'N/A',
    checkinDate = 'N/A',
    checkoutDate = 'N/A',
    nights = 0,
    rooms = 0,
    occupancy = 'N/A',
    source = 'N/A',
    bookingID = 'N/A',
    otaReservationID = 'N/A',
  } = bookingDetails;

  return (
    <div className="pb-14 text-gray-400 dark:text-bodydark">
      <div className="bg-slate-900 dark:bg-boxdark mx-auto w-full rounded-xl p-6 sm:p-10 md:max-w-screen-xl">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:gap-0">
          <img
            src={Logo}
            alt={`${CompanyName} Logo`}
            className="w-20 h-20 object-contain"
          />
          <h2 className="text-3xl font-bold text-white dark:text-bodydark1 sm:text-4xl text-center sm:text-left">
            {CompanyName || 'Company Name'}
          </h2>
          <div className="text-center sm:text-right text-white dark:text-bodydark1">
            <p className="text-lg sm:text-xl">
              {Phonenumber || 'Phone Number'} <span className="mx-2">||</span> {Email || 'Email'}
            </p>
          </div>
        </div>

        {/* Plan Table Section */}
        <div className="mt-12 overflow-x-auto">
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr className="bg-slate-800 dark:bg-boxdark-2 flex justify-center items-center">
                <th className="p-4 text-left text-2xl font-semibold text-gray-300 dark:text-bodydark1">
                  Plan
                </th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Booking Details Section */}
        <div className="mt-12 bg-white dark:bg-boxdark-2 text-black dark:text-bodydark1 p-6 rounded-xl shadow-lg">
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            <div className="flex-1">
              <p>Status: <span className="font-medium">{status}</span></p>
              <p>Reservation ID: <span className="font-medium">{reservationID}</span></p>
              <p>Revision ID: <span className="font-medium">{revisionID}</span></p>
              <p>Booked At: <span className="font-medium">{bookedAt}</span></p>
            </div>
            <div className="flex-1">
              <p>Source/OTA: <span className="font-medium">{source}</span></p>
              <p>Booking ID: <span className="font-medium">{bookingID}</span></p>
              <p>OTA Reservation ID: <span className="font-medium">{otaReservationID}</span></p>
            </div>
          </div>

          {/* Check-in Details */}
          <div className="mt-8">
            <h4 className="font-semibold text-lg dark:text-bodydark">Checkin Details</h4>
            <p>Checkin Date: <span className="font-medium">{checkinDate}</span></p>
            <p>Checkout Date: <span className="font-medium">{checkoutDate}</span></p>
            <p>Nights: <span className="font-medium">{nights}</span></p>
            <p>Rooms: <span className="font-medium">{rooms}</span></p>
            <p>Occupancy: <span className="font-medium">{occupancy}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
