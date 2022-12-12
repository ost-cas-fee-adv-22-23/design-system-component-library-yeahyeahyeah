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
  MumbleLogo,
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

export interface IIcon extends React.HTMLAttributes<HTMLElement> {
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
  iconColor: string | undefined;
  iconWidth?: string | undefined;
  iconHeight?: string | undefined;
  handleClick?: () => void;
}

export const Icon: React.FC<IIcon> = ({
  iconName = 'mumble',
  iconColor = 'fill-pink-500',
  iconWidth = '16px',
  iconHeight = '16px',
  handleClick,
}: IIcon) => {
  switch (iconName) {
    case 'calendar':
      return (
        <Calendar
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'cancel':
      return (
        <Cancel className={iconColor} width={iconWidth} height={iconHeight} />
      );
    case 'checkmark':
      return (
        <Checkmark
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'chevron-up':
      return (
        <ChevronUp
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'chevron-down':
      return (
        <ChevronDown
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'chevron-left':
      return (
        <ChevronLeft
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'chevron-right':
      return (
        <ChevronRight
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'edit':
      return (
        <Edit
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'eye':
      return (
        <Eye
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'fullscreen':
      return (
        <Fullscreen
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'heart-filled':
      return (
        <HeartFilled
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'heart-outlined':
      return (
        <HeartOutlined
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'location':
      return (
        <Location
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'logout':
      return (
        <Logout
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'mumble':
      return (
        <Mumble
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'mumble-logo':
      return (
        <MumbleLogo
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'mumble-gradient':
      return (
        <MumbleLogo
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'profile':
      return (
        <Profile
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'reply-filled':
      return (
        <ReplyFilled
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'reply-outlined':
      return (
        <ReplyOutlined
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'repost':
      return (
        <Repost
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'send':
      return (
        <Send
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'settings':
      return (
        <Settings
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'share':
      return (
        <Share
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'time':
      return (
        <Time
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    case 'upload':
      return (
        <Upload
          className={iconColor}
          width={iconWidth}
          height={iconHeight}
          onClick={handleClick}
        />
      );
    default:
      return <></>;
  }
};
