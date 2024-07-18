import { User } from "@prisma/client";
import UsersList from "./UsersList";

interface UsersSectionProps {
  users: User[] | undefined;
  isLoading: boolean;
  debouncedSearch: string;
}

const UsersSection = ({
  users,
  isLoading,
  debouncedSearch,
}: UsersSectionProps) => {
  const noUsersFound = !isLoading && debouncedSearch && users?.length === 0;

  return (
    <>
      <div className="mt-10 flex w-full justify-center">
        {noUsersFound ? (
          <p className="text-primary/50">Tidak ada user ditemukan</p>
        ) : (
          <UsersList isLoading={isLoading} users={users} />
        )}
      </div>
    </>
  );
};

export default UsersSection;
