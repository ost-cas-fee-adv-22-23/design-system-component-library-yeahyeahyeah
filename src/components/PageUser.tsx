import { ReactElement, useContext, useEffect, useState } from 'react';
import InputField from './Input';
import { GlobalContext } from '../context/context';
import { ProfilePicture } from './ProfilePicture';
import {
  Calendar,
  Cancel,
  Checkmark,
  Down,
  Edit,
  Eye,
  Fullscreen,
  HeartFilled,
  HeartOutlined,
  Left,
  Location,
  LogoMumble,
  Logout,
  MumbleGradient,
  MumbleText,
  Mumble,
  Profile,
  ReplyFilled,
  ReplyOutlined,
  Repost,
  Right,
  Send,
  Settings,
  Share,
  Time,
  Up,
  Upload,
} from './icons/icons';

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
        <Calendar
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <Cancel
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <Checkmark
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <Down
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <Edit
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <Eye
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <Fullscreen
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <HeartFilled
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <HeartOutlined
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <Left
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <Location
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <LogoMumble
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <Logout
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <MumbleGradient
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <MumbleText
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <Mumble
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <Profile
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <ReplyFilled
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <ReplyOutlined
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <Repost
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <Right
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <Send
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <Settings
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <Share
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <Time
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <Up
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <Upload
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
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
