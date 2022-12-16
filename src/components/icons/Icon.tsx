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
} from './icons';

export interface IIcon extends React.HTMLAttributes<SVGAElement> {
  iconName:
    | 'calendar'
    | 'cancel'
    | 'checkmark'
    | 'down'
    | 'edit'
    | 'eye'
    | 'fullscreen'
    | 'heart-filled'
    | 'heart-outlined'
    | 'left'
    | 'location'
    | 'logo-mumble'
    | 'logout'
    | 'mumble-gradient'
    | 'mumble-text'
    | 'mumble'
    | 'profile'
    | 'reply-filled'
    | 'reply-outlined'
    | 'repost'
    | 'right'
    | 'send'
    | 'settings'
    | 'share'
    | 'time'
    | 'up'
    | 'upload';
  iconColor?: string | undefined;
  iconWidth?: string | undefined;
  iconHeight?: string | undefined;
  handleClick?: () => void;
}

export const Icon: React.FC<IIcon> = ({
  iconName = 'mumble',
  handleClick,
}: IIcon) => {
  switch (iconName) {
    case 'calendar':
      return <Calendar onClick={handleClick} />;
    case 'cancel':
      return <Cancel />;
    case 'checkmark':
      return <Checkmark onClick={handleClick} />;
    case 'down':
      return <Down onClick={handleClick} />;
    case 'edit':
      return <Edit onClick={handleClick} />;
    case 'eye':
      return <Eye onClick={handleClick} />;
    case 'fullscreen':
      return <Fullscreen onClick={handleClick} />;
    case 'heart-filled':
      return <HeartFilled onClick={handleClick} />;
    case 'heart-outlined':
      return <HeartOutlined onClick={handleClick} />;
    case 'left':
      return <Left onClick={handleClick} />;
    case 'location':
      return <Location onClick={handleClick} />;
    case 'logo-mumble':
      return <LogoMumble onClick={handleClick} />;
    case 'logout':
      return <Logout onClick={handleClick} />;
    case 'mumble-gradient':
      return <MumbleGradient onClick={handleClick} />;
    case 'mumble-text':
      return <MumbleText onClick={handleClick} />;
    case 'mumble':
      return <Mumble onClick={handleClick} />;
    case 'profile':
      return <Profile onClick={handleClick} />;
    case 'reply-filled':
      return <ReplyFilled onClick={handleClick} />;
    case 'reply-outlined':
      return <ReplyOutlined onClick={handleClick} />;
    case 'repost':
      return <Repost onClick={handleClick} />;
    case 'right':
      return <Right onClick={handleClick} />;
    case 'send':
      return <Send onClick={handleClick} />;
    case 'settings':
      return <Settings onClick={handleClick} />;
    case 'share':
      return <Share onClick={handleClick} />;
    case 'time':
      return <Time onClick={handleClick} />;
    case 'up':
      return <Up onClick={handleClick} />;
    case 'upload':
      return <Upload onClick={handleClick} />;
    default:
      return <></>;
  }
};
