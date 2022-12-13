import React from 'react';

interface IDefaultLayout {
  children: React.ReactElement;
}

export const DefaultLayout: React.FC<IDefaultLayout> = ({ children }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-start w-full h-screen bg-slate-100 p-16 pt-32 rounded">
      {children}
    </div>
  );
};
