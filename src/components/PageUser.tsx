import { ReactElement, useContext, useEffect, useState } from 'react';
import InputField from './Input';
import { GlobalContext } from '../context/context';
import { ProfilePicture } from './ProfilePicture';
import {
  Calendar,
  Cancel,
  Checkmark,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Edit,
  Eye,
  Fullscreen,
  HeartFilled,
  HeartOutlined,
  Location,
  Logout,
  Mumble,
  Profile,
  ReplyFilled,
  ReplyOutlined,
  Repost,
  Send,
  Settings,
  Share,
  Time,
  Upload,
} from '../stories/assets/icons';

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
        <Cancel
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked cancel')}
        />
        <Calendar
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked calendar')}
        />
        <Checkmark
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked checkmark')}
        />
        <ChevronUp
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked chevron up')}
        />
        <ChevronDown
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked chevron down')}
        />
        <ChevronLeft
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked chevron left')}
        />
        <ChevronRight
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked chevron right')}
        />
        <Edit
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked edit')}
        />
        <Eye
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked eye')}
        />
        <Fullscreen
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked fullscreen')}
        />

        <HeartFilled
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked heart filled')}
        />
        <HeartOutlined
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked heart outlined')}
        />
        <Location
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked location')}
        />
        <Logout
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked logout')}
        />
        <Mumble
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked mumble')}
        />
        <Profile
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked profile')}
        />
        <ReplyFilled
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked reply filled')}
        />
        <ReplyOutlined
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked reply outlined')}
        />
        <Repost
          className={'fill-pink-500'}
          width="50px"
          height="50px"
          onClick={() => console.log('clicked repost')}
        />
        <Send
          className="fill-pink-500"
          width="50px"
          height="50px"
          onClick={() => console.log('clicked send')}
        />
        <Settings
          className="fill-pink-500"
          width="50px"
          height="50px"
          onClick={() => console.log('clicked settings')}
        />
        <Share
          className="fill-pink-500"
          width="50px"
          height="50px"
          onClick={() => console.log('clicked share')}
        />
        <Time
          className="fill-pink-500"
          width="50px"
          height="50px"
          onClick={() => console.log('clicked time')}
        />
        <Upload
          className="fill-pink-500"
          width="50px"
          height="50px"
          onClick={() => console.log('clicked upload')}
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
