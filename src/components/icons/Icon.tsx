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
  LogoMumble,
  MumbleGradient,
  Profile,
  ReplyFilled,
  ReplyOutlined,
  Repost,
  Send,
  Settings,
  Share,
  Time,
  Upload,
} from '../../stories/assets/icons';

export interface IIcon extends React.HTMLAttributes<SVGAElement> {
  iconName:
    | 'calendar'
    | 'cancel'
    | 'checkmark'
    | 'chevron-up'
    | 'chevron-down'
    | 'chevron-left'
    | 'chevron-right'
    | 'edit'
    | 'eye'
    | 'fullscreen'
    | 'heart-filled'
    | 'heart-outlined'
    | 'location'
    | 'logout'
    | 'mumble'
    | 'mumble-logo'
    | 'mumble-gradient'
    | 'profile'
    | 'reply-filled'
    | 'reply-outlined'
    | 'repost'
    | 'send'
    | 'settings'
    | 'share'
    | 'time'
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
    case 'chevron-up':
      return <ChevronUp onClick={handleClick} />;
    case 'chevron-down':
      return <ChevronDown onClick={handleClick} />;
    case 'chevron-left':
      return <ChevronLeft onClick={handleClick} />;
    case 'chevron-right':
      return <ChevronRight onClick={handleClick} />;
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
    case 'location':
      return <Location onClick={handleClick} />;
    case 'logout':
      return <Logout onClick={handleClick} />;
    case 'mumble':
      return <Mumble onClick={handleClick} />;
    case 'mumble-logo':
      return <LogoMumble onClick={handleClick} />;
    case 'mumble-gradient':
      return <MumbleGradient onClick={handleClick} />;
    case 'profile':
      return <Profile onClick={handleClick} />;
    case 'reply-filled':
      return <ReplyFilled onClick={handleClick} />;
    case 'reply-outlined':
      return <ReplyOutlined onClick={handleClick} />;
    case 'repost':
      return <Repost onClick={handleClick} />;
    case 'send':
      return <Send onClick={handleClick} />;
    case 'settings':
      return <Settings onClick={handleClick} />;
    case 'share':
      return <Share onClick={handleClick} />;
    case 'time':
      return <Time onClick={handleClick} />;
    case 'upload':
      return <Upload onClick={handleClick} />;
    default:
      return <></>;
  }
};
