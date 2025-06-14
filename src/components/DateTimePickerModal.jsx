// src/components/DateTimePickerModal.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Bind modal to the root element for accessibility
Modal.setAppElement('#root');

const DateTimePickerModal = ({ isOpen, onRequestClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Date:', selectedDate);
    onRequestClose(); // Close the modal after submission
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
      overlayClassName="fixed inset-0"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
        <h2 id="modal-title" className="text-2xl font-bold text-gray-900 mb-4">
          Schedule a Consultation
        </h2>
        <p id="modal-description" className="text-gray-600 mb-6">
          Select a date and time for your free consultation.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="date-picker" className="block text-gray-700 font-medium mb-2">
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
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onRequestClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300"
              aria-label="Cancel"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500"
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