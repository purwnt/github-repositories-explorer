import UserCard from './UserCard';
import { User } from '@/interfaces/user';

interface UserCardListProps {
  users: User[];
}

const UserCardList: React.FC<UserCardListProps> = ({
  users,
}: UserCardListProps) => {
  return (
    <div className='grid gap-3'>
      {users?.map((user) => (
        <UserCard key={user.id} username={user.login}></UserCard>
      ))}
    </div>
  );
};

export default UserCardList;

