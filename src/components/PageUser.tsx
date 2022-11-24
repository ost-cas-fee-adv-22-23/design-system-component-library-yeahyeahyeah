import React, { ReactElement, useContext, useEffect, useState } from 'react';
import Button from './Button';
import InputField from './Input';
import { GlobalContext } from '../context/context';

const PageUser = (): ReactElement => {
  const { user, setUser } = useContext(GlobalContext);
  const [name, setName] = useState<string>('');
  const [surName, setSurName] = useState<string>('');

  useEffect(() => console.log('pageuser', user), [user]);

  return (
    <div className="p-10">
      <h2 className="text text-2xl pb-2">Page User</h2>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <InputField
            id="large-input"
            label="Name"
            value={name}
            name="name"
            placeholder="Name"
            type="text"
            fCallBack={(data: any) => setName(data.target.value)}
          />
          <InputField
            id="large-input"
            label="Surname"
            value={surName}
            name="surname"
            placeholder="Surname"
            type="text"
            fCallBack={(data: any) => setSurName(data.target.value)}
          />
          <Button
            label={'Submit'}
            fCallBack={() => {
              setUser({ name: name, surname: surName });
              setName('');
              setSurName('');
            }}
          />
        </div>
      </form>
    </div>
  );
};
export default PageUser;
