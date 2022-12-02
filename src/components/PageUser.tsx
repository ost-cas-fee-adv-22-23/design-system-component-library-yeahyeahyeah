import { ReactElement, useContext, useEffect, useState } from 'react';
// import { Button } from '../components/Button';
import InputField from './Input';
import { GlobalContext } from '../context/context';
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
          {/* <Button
            label={'Submit'}
            onClick={() => {
              setUser({ name: name, surname: surName });
              setName('');
              setSurName('');
            }}
          /> */}
        </div>
      </form>
      <p>
        <Icon
          type={'cancel'}
          color={'fill-pink-500'}
          width="50px"
          height="50px"
          fCallBack={() => console.log('cancel clicked')}
        />
        <Icon
          type={'calendar'}
          color={'fill-pink-500'}
          width="50px"
          height="50px"
        />
        <Icon
          type={'checkmark'}
          color={'fill-slate-50'}
          width="50px"
          height="50px"
        />
        <Icon
          type={'heart-filled'}
          color={'fill-pink-500'}
          width="50px"
          height="50px"
        />
        <Icon
          type={'heart-outlined'}
          color={'fill-slate-50'}
          width="50px"
          height="50px"
        />
        <Icon
          type={'reply-filled'}
          color={'fill-pink-500'}
          width="50px"
          height="50px"
        />
        <Icon
          type={'reply-outlined'}
          color={'fill-slate-50'}
          width="50px"
          height="50px"
        />
        <Icon
          type={'chevron-left'}
          color={'fill-pink-500'}
          width="50px"
          height="50px"
        />
        <Icon
          type={'location'}
          color={'fill-slate-50'}
          width="50px"
          height="50px"
        />
      </p>
    </div>
  );
};
export default PageUser;
