import React, { ReactElement, useContext, useEffect, useState } from 'react';
import Button from './Button';
import InputField from './Input';
import { GlobalContext } from '../context/context';
import { ReactComponent as HeartFilled } from '../stories/assets/icons/heart_filled.svg';
import { ReactComponent as HeartEmpty } from '../stories/assets/icons/heart_empty.svg';
import { ReactComponent as Share } from '../stories/assets/icons/share.svg';
import { Icon } from './Icon';

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
            styles={
              'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            }
          />
        </div>
      </form>
      <p>
        {/* <HeartFilled
          className={'fill-pink-500'}
          onClick={() => console.log('This is my heart')}
        />
        <HeartEmpty
          className={'fill-pink-500'}
          onClick={() => console.log('This is my heart')}
        />
        <Share
          className={'fill-pink-500'}
          onClick={() => console.log('This is a share icon')}
        /> */}
        <Icon
          type={'cancel'}
          color={'fill-pink-500'}
          fCallBack={() => console.log('cancel clicked')}
        />
        <Icon type={'calendar'} color={'fill-pink-500'} />
        <Icon type={'checkmark'} color={'fill-violet-500'} />
        <Icon type={'heart-filled'} color={'fill-pink-500'} />
        <Icon type={'heart-outlined'} color={'fill-violet-500'} />
        <Icon type={'reply-filled'} color={'fill-pink-500'} />
        <Icon type={'reply-outlined'} color={'fill-violet-500'} />
        <Icon type={'chevron-left'} color={'fill-pink-500'} />
        <Icon type={'location'} color={'fill-violet-500'} />
      </p>
    </div>
  );
};
export default PageUser;
