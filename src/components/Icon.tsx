import { ReactComponent as Calendar } from '../stories/assets/icons/calendar.svg';
import { ReactComponent as Cancel } from '../stories/assets/icons/cancel.svg';
import { ReactComponent as Checkmark } from '../stories/assets/icons/checkmark.svg';
import { ReactComponent as ChevronUp } from '../stories/assets/icons/up.svg';
import { ReactComponent as ChevronDown } from '../stories/assets/icons/down.svg';
import { ReactComponent as ChevronLeft } from '../stories/assets/icons/left.svg';
import { ReactComponent as ChevronRight } from '../stories/assets/icons/right.svg';
import { ReactComponent as Edit } from '../stories/assets/icons/edit.svg';
import { ReactComponent as Eye } from '../stories/assets/icons/eye.svg';
import { ReactComponent as Fullscreen } from '../stories/assets/icons/fullscreen.svg';
import { ReactComponent as HeartFilled } from '../stories/assets/icons/heart_filled.svg';
import { ReactComponent as HeartOutlined } from '../stories/assets/icons/heart_outlined.svg';
import { ReactComponent as Location } from '../stories/assets/icons/location.svg';
import { ReactComponent as Logout } from '../stories/assets/icons/logout.svg';
import { ReactComponent as Mumble } from '../stories/assets/icons/mumble.svg';
import { ReactComponent as Profile } from '../stories/assets/icons/profile.svg';
import { ReactComponent as ReplyFilled } from '../stories/assets/icons/reply_filled.svg';
import { ReactComponent as ReplyOutlined } from '../stories/assets/icons/reply_outlined.svg';
import { ReactComponent as Repost } from '../stories/assets/icons/repost.svg';
import { ReactComponent as Send } from '../stories/assets/icons/send.svg';
import { ReactComponent as Settings } from '../stories/assets/icons/settings.svg';
import { ReactComponent as Share } from '../stories/assets/icons/share.svg';
import { ReactComponent as Time } from '../stories/assets/icons/time.svg';
import { ReactComponent as Upload } from '../stories/assets/icons/upload.svg';
import { MouseEvent } from 'react';

interface IIcon extends React.HTMLAttributes<HTMLElement> {
  type: string;
  color?: string | undefined;
  fCallBack?: (e: MouseEvent) => void;
}

export const Icon: React.FC<IIcon> = ({ type, color, fCallBack }: IIcon) => {
  switch (type) {
    case 'calendar':
      return <Calendar className={color} onClick={fCallBack} />;
    case 'cancel':
      return <Cancel className={color} onClick={fCallBack} />;
    case 'checkmark':
      return <Checkmark className={color} onClick={fCallBack} />;
    case 'chevron-up':
      return <ChevronUp className={color} onClick={fCallBack} />;
    case 'chevron-down':
      return <ChevronDown className={color} onClick={fCallBack} />;
    case 'chevron-left':
      return <ChevronLeft className={color} onClick={fCallBack} />;
    case 'chevron-right':
      return <ChevronRight className={color} onClick={fCallBack} />;
    case 'edit':
      return <Edit className={color} onClick={fCallBack} />;
    case 'eye':
      return <Eye className={color} onClick={fCallBack} />;
    case 'fullscreen':
      return <Fullscreen className={color} onClick={fCallBack} />;
    case 'heart-filled':
      return <HeartFilled className={color} onClick={fCallBack} />;
    case 'heart-outlined':
      return <HeartOutlined className={color} onClick={fCallBack} />;
    case 'location':
      return <Location className={color} onClick={fCallBack} />;
    case 'logout':
      return <Logout className={color} onClick={fCallBack} />;
    case 'mumble':
      return <Mumble className={color} onClick={fCallBack} />;
    case 'profile':
      return <Profile className={color} onClick={fCallBack} />;
    case 'reply-filled':
      return <ReplyFilled className={color} onClick={fCallBack} />;
    case 'reply-outlined':
      return <ReplyOutlined className={color} onClick={fCallBack} />;
    case 'repost':
      return <Repost className={color} onClick={fCallBack} />;
    case 'send':
      return <Send className={color} onClick={fCallBack} />;
    case 'settings':
      return <Settings className={color} onClick={fCallBack} />;
    case 'share':
      return <Share className={color} onClick={fCallBack} />;
    case 'time':
      return <Time className={color} onClick={fCallBack} />;
    case 'upload':
      return <Upload className={color} onClick={fCallBack} />;
    default:
      return <></>;
  }
};
