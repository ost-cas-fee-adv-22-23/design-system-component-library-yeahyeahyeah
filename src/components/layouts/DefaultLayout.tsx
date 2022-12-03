import React from 'react';

interface IDefaultLayout {
  children: React.ReactElement;
}

export const DefaultLayout: React.FC<IDefaultLayout> = ({ children }) => {
  return (
    <div className="flex flex-row flex-wrap gap-32 justify-center items-start w-full">
      {children}
    </div>
  );
};
