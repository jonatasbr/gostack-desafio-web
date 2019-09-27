import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';

export default function DatePickerMeetup({ name, placeholder }) {
  const ref = useRef(null);
  const { fieldName } = useField(name);

  return (
    <>
      <DatePicker
        name={fieldName}
        ref={ref}
        dateFormat="dd 'de' MMMM 'de' yyyy, HH:mm'h'"
        minDate={new Date()}
        showTimeSelect
        timeCaption="Hora"
        timeFormat="HH:mm"
        timeIntervals={60}
        placeholderText={placeholder}
        autoComplete="off"
      />
    </>
  );
}

DatePickerMeetup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
