import React from 'react';

const InputField = ({
  id,
  label,
  value,
  name,
  placeholder,
  type,
  fCallBack,
}: any) => {
  return (
    <div className="form-group">
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}:
        </label>
      )}
      <input
        id={id}
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        aria-label={label}
        value={value}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={fCallBack}
      />
    </div>
  );
};

export default InputField;
