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

import { MouseEvent } from 'react';

interface IIcon extends React.HTMLAttributes<HTMLElement> {
  type: string;
  color?: string | undefined;
  width?: string | undefined;
  height?: string | undefined;
  fCallBack?: (e: MouseEvent) => void;
}

export const Icon: React.FC<IIcon> = ({
  type,
  color,
  width = '16px',
  height = '16px',
  fCallBack,
}: IIcon) => {
  switch (type) {
    case 'calendar':
      return (
        <Calendar
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'cancel':
      return (
        <Cancel
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'checkmark':
      return (
        <Checkmark
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'chevron-up':
      return (
        <ChevronUp
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'chevron-down':
      return (
        <ChevronDown
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'chevron-left':
      return (
        <ChevronLeft
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'chevron-right':
      return (
        <ChevronRight
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'edit':
      return (
        <Edit
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'eye':
      return (
        <Eye
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'fullscreen':
      return (
        <Fullscreen
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'heart-filled':
      return (
        <HeartFilled
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'heart-outlined':
      return (
        <HeartOutlined
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'location':
      return (
        <Location
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'logout':
      return (
        <Logout
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'mumble':
      return (
        <Mumble
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'profile':
      return (
        <Profile
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'reply-filled':
      return (
        <ReplyFilled
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'reply-outlined':
      return (
        <ReplyOutlined
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'repost':
      return (
        <Repost
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'send':
      return (
        <Send
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'settings':
      return (
        <Settings
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'share':
      return (
        <Share
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'time':
      return (
        <Time
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    case 'upload':
      return (
        <Upload
          className={color}
          width={width}
          height={height}
          onClick={fCallBack}
        />
      );
    default:
      return <></>;
  }
};
