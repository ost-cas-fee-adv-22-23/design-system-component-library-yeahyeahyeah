import { ReactElement, useContext, useEffect, useState } from 'react';
import InputField from './Input';
import { GlobalContext } from '../context/context';
import { Icon } from './Icon';
import { ProfilePicture } from './ProfilePicture';

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
            iconName="text"
            fCallBack={(data: any) => setName(data.target.value)}
          />
          <InputField
            id="large-input"
            label="Surname"
            value={surName}
            name="surname"
            placeholder="Surname"
            iconName="text"
            onClick={(data: any) => setSurName(data.target.value)}
          />
          <button
            type="submit"
            onClick={() => {
              setUser({ name: name, surname: surName });
              setName('');
              setSurName('');
            }}
          />
        </div>
      </form>
      <p>
        <Icon
          iconName={'cancel'}
          iconColor={'fill-pink-500'}
          iconWidth="50px"
          iconHeight="50px"
          onClick={(data: any) => setSurName(data.target.value)}
        />
        <Icon
          iconName={'calendar'}
          iconColor={'fill-pink-500'}
          iconWidth="50px"
          iconHeight="50px"
        />
        <Icon
          iconName={'checkmark'}
          iconColor={'fill-slate-white'}
          iconWidth="50px"
          iconHeight="50px"
        />
        <Icon
          iconName={'heart-filled'}
          iconColor={'fill-pink-500'}
          iconWidth="50px"
          iconHeight="50px"
        />
        <Icon
          iconName={'heart-outlined'}
          iconColor={'fill-slate-white'}
          iconWidth="50px"
          iconHeight="50px"
        />
        <Icon
          iconName={'reply-filled'}
          iconColor={'fill-pink-500'}
          iconWidth="50px"
          iconHeight="50px"
        />
        <Icon
          iconName={'reply-outlined'}
          iconColor={'fill-slate-white'}
          iconWidth="50px"
          iconHeight="50px"
        />
        <Icon
          iconName={'chevron-left'}
          iconColor={'fill-pink-500'}
          iconWidth="50px"
          iconHeight="50px"
        />
        <Icon
          iconName={'location'}
          iconColor={'fill-slate-white'}
          iconWidth="50px"
          iconHeight="50px"
        />
        <ProfilePicture
          alt="Here comes a small profile pic"
          src="https://cdn.unitycms.io/images/AGldBqK4qne8kxrx_ovKtu.png?op=ocroped&val=1200,1200,1000,1000,0,0&sum=ATBpuG0Cxeg"
        />
        <ProfilePicture
          size="medium"
          alt="Here comes a medium profile pic"
          src="https://cdn.unitycms.io/images/AGldBqK4qne8kxrx_ovKtu.png?op=ocroped&val=1200,1200,1000,1000,0,0&sum=ATBpuG0Cxeg"
        />
        <ProfilePicture
          size="large"
          alt="Here comes a large profile pic"
          src="https://cdn.unitycms.io/images/AGldBqK4qne8kxrx_ovKtu.png?op=ocroped&val=1200,1200,1000,1000,0,0&sum=ATBpuG0Cxeg"
        />
        <ProfilePicture
          size="xlarge"
          alt="Here comes a xlarge profile pic"
          src="https://cdn.unitycms.io/images/AGldBqK4qne8kxrx_ovKtu.png?op=ocroped&val=1200,1200,1000,1000,0,0&sum=ATBpuG0Cxeg"
        />
        <ProfilePicture alt="Here comes a small profile pic" />
        <ProfilePicture size="medium" alt="Here comes a medium profile pic" />
        <ProfilePicture size="large" alt="Here comes a large profile pic" />
        <ProfilePicture size="xlarge" alt="Here comes a xlarge profile pic" />
      </p>
    </div>
  );
};
export default PageUser;
