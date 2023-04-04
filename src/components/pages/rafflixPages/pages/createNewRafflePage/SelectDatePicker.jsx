import React, { useState, forwardRef } from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BiCalendar } from 'react-icons/bi';

const DatePickerButton = styled.button`
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
  border-radius: 10px;
  color: ${colors.textPrimary};
  font-size: 20px;
  font-weight: 500;
  padding: 5px;
  background-color: ${colors.bgTertiary};
  border: 1px solid ${colors.bgWhite};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    border: 1px solid ${colors.tertiary80};
  }

  &:focus {
    outline: none;
    border: 1px solid ${colors.tertiary80};
    box-shadow: 0 0 10px ${colors.tertiary40};
  }
`;

const SelectDatePicker = ({ onEndDateChange }) => {
  const [date, setDate] = useState(null);

  // TODO: 리팩토링 필요
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <DatePickerButton
      className="example-custom-input"
      onClick={onClick}
      ref={ref}
    >
      <BiCalendar />
      {'\u00a0'}
      {value === '' ? 'Please select a date.' : value}
      {date === null ? null : onEndDateChange(Math.floor(date.getTime() / 1000))}
    </DatePickerButton>
  ));

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  function addMonths(date, months) {
    date.setMonth(date.getMonth() + months);
    return date;
  }

  return (
    <DatePicker
      showTimeSelect
      timeIntervals={60}
      minDate={new Date()}
      maxDate={addMonths(new Date(), 5)}
      filterTime={filterPassedTime}
      selected={date}
      onChange={(date) => setDate(date)}
      customInput={<ExampleCustomInput />}
      dateFormat="MMMM d, yyyy h:mm aa"
      fixedHeight
    />
  );
};

export default SelectDatePicker;
