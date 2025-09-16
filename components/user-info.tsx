import { User } from '@/lib/auth'

interface UserInfoProps {
  user: User;
}

export default function UserInfo({user}: UserInfoProps) {
  return user;
}
