import React from 'react';

interface IDefaultLayout {
  children: React.ReactElement;
}

export const DefaultLayout: React.FC<IDefaultLayout> = ({ children }) => {
  return (
    <div className="flex flex-row justify-center items-start w-full">
      {children}
    </div>
  );
};
