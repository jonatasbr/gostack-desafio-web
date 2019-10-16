import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';

export default function DatePicker({ name, placeholder }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const parsedDate = parseISO(defaultValue);
  const dateSelected = +parsedDate ? parsedDate : '';
  const [selected, setSelected] = useState(dateSelected);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        dateFormat="dd 'de' MMMM 'de' yyyy, HH:mm'h'"
        minDate={new Date()}
        showTimeSelect
        timeCaption="Hora"
        timeFormat="HH:mm"
        timeIntervals={60}
        placeholderText={placeholder}
        autoComplete="off"
        locale={pt}
      />
      {error && <span>Campo obrigatório, insira uma data válida</span>}
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
