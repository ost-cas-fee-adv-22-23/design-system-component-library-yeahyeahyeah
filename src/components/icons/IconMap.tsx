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
  MumbleText,
  LogoMumble,
  Profile,
  ReplyFilled,
  ReplyOutlined,
  Repost,
  Send,
  Settings,
  Share,
  Time,
  Upload,
} from './icons';

export const Icons = {
  joined: <Calendar className={'fill-slate-500'} width="16px" height="16px" />,
  cancel: <Cancel className={'fill-slate-500'} width="16px" height="16px" />,
  checkmark: (
    <Checkmark className={'fill-slate-500'} width="16px" height="16px" />
  ),
  chevronUp: (
    <ChevronUp className={'fill-slate-500'} width="16px" height="16px" />
  ),
  chevronDown: (
    <ChevronDown className={'fill-slate-500'} width="16px" height="16px" />
  ),
  chevronLeft: (
    <ChevronLeft className={'fill-slate-500'} width="16px" height="16px" />
  ),
  chevronRight: (
    <ChevronRight className={'fill-slate-500'} width="16px" height="16px" />
  ),
  edit: (
    <Edit
      className={'fill-slate-500 hover:(fill-green-500)'}
      width="16px"
      height="16px"
    />
  ),
  eye: <Eye className={'fill-slate-500'} width="16px" height="16px" />,
  fullscreen: (
    <Fullscreen className={'fill-slate-500'} width="16px" height="16px" />
  ),
  heartFilled: (
    <HeartFilled className={'fill-slate-500'} width="16px" height="16px" />
  ),
  heartOutlined: (
    <HeartOutlined className={'fill-slate-500'} width="16px" height="16px" />
  ),
  location: (
    <Location className={'fill-slate-500'} width="16px" height="16px" />
  ),
  logout: <Logout className={'fill-slate-500'} width="16px" height="16px" />,
  mumble: <Mumble className={'fill-slate-500'} width="16px" height="16px" />,
  logoMumble: (
    <LogoMumble className={'fill-violet-600'} width="246px" height="auto" />
  ),
  mumbleText: (
    <MumbleText className={'fill-violet-600'} width="246px" height="auto" />
  ),
  username: <Profile className={'fill-slate-500'} width="16px" height="16px" />,
  replyFilled: (
    <ReplyFilled className={'fill-slate-500'} width="16px" height="16px" />
  ),
  replyOutlined: (
    <ReplyOutlined className={'fill-slate-500'} width="16px" height="16px" />
  ),
  repost: <Repost className={'fill-slate-500'} width="16px" height="16px" />,
  send: <Send className={'fill-slate-500'} width="16px" height="16px" />,
  settings: (
    <Settings className={'fill-slate-500'} width="16px" height="16px" />
  ),
  share: <Share className={'fill-slate-500'} width="16px" height="16px" />,
  timestamp: <Time className={'fill-slate-500'} width="16px" height="16px" />,
  upload: <Upload className={'fill-slate-500'} width="16px" height="16px" />,
};

export const LikeRepostIcons = {
  HeartFilled: (
    <HeartFilled className={'fill-slate-500'} width="16px" height="16px" />
  ),
  ReplyFilled: (
    <ReplyFilled className={'fill-slate-500'} width="16px" height="16px" />
  ),
};
