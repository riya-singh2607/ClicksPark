import React, { useState } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

Modal.setAppElement('#root');

const DateTimePickerModal = ({ isOpen, onRequestClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Date:', selectedDate);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center p-1 sm:p-2 bg-black bg-opacity-50"
      overlayClassName="fixed inset-0"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="bg-white rounded-md sm:rounded-lg p-2 sm:p-3 md:p-4 max-w-xs sm:max-w-sm w-full shadow-md">
        <h2 id="modal-title" className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
          Schedule a Consultation
        </h2>
        <p id="modal-description" className="text-gray-600 mb-1 sm:mb-2 text-xs sm:text-sm">
          Select a date and time for your free consultation.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="date-picker" className="block text-gray-700 font-medium mb-1 text-xs sm:text-sm">
              Date and Time
            </label>
            <DatePicker
              id="date-picker"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full p-1 sm:p-2 border border-gray-300 rounded-md sm:rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-400 text-xs sm:text-sm"
            />
          </div>
          <div className="flex justify-end space-x-1 sm:space-x-2">
            <button
              type="button"
              onClick={onRequestClose}
              className="px-1 sm:px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-xs sm:text-sm"
              aria-label="Cancel"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-1 sm:px-2 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500 text-xs sm:text-sm"
              aria-label="Schedule consultation"
            >
              Schedule
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default DateTimePickerModal;