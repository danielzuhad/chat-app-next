import React from "react";
import LoadingUserList from "@/components/box/Loading/LoadingUserList";
import UserBox from "@/components/box/UserBox";
import { User } from "@prisma/client";
import useSearch from "../hooks/useSearch";
import { cn } from "@/lib/utils";

interface UserListProps {
  users: User[] | undefined;
  isLoading: boolean;
}

const UserList = React.memo(({ users, isLoading }: UserListProps) => {
  const { handleConversation, conversationMutattionPending } = useSearch();

  const memoizedHandleConversation = React.useCallback(
    (userId: string, userName: string) => {
      if (!conversationMutattionPending) {
        handleConversation({
          isGroup: false,
          userId,
          name: userName,
          members: [],
        });
      }
    },
    [handleConversation, conversationMutattionPending],
  );

  return (
    <div className="flex w-full flex-wrap justify-around gap-2">
      {users?.map((user) => (
        <UserBox
          onClick={() =>
            memoizedHandleConversation(user.id, user.name as string)
          }
          key={user.id} // Use a unique identifier as key
          user={user}
          showLastMessage={false}
          showBorder={false}
          showIcon={true}
          showEmail={true}
          className={cn(
            "mb-5 w-28 rounded-sm border-[1px] md:w-max md:py-2",
            conversationMutattionPending &&
              "animate-pulse bg-card-hover hover:cursor-progress",
          )}
          classNameImage="sm:w-[60%] bg-black/50 md:w-[5em] lg:w-[5em] xl:w-[5em]"
        />
      ))}

      {isLoading && <LoadingUserList variant={"Friends"} />}
    </div>
  );
});

export default UserList;