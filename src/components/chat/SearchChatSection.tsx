import ChatList from "./ChatList";
import { Session } from "next-auth";
import { ConversationWithRelations } from "@/type/type";
import Search from "../search/Search";

interface SearchChatSectionProps {
  conversations: ConversationWithRelations[];
  currentUser: Session;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  loadingList: boolean;
}

const SearchChatSection = ({
  conversations,
  currentUser,
  setSearch,
  loadingList,
}: SearchChatSectionProps) => {
  return (
    <>
      <div className="flex h-full w-28 flex-col items-center overflow-y-hidden pr-[2px] max-sm:border-b-[1px] sm:pr-0 md:w-[280px] lg:w-[350px] xl:w-[390px]">
        <div className="w-full px-1 max-md:hidden">
          <Search setSearch={setSearch} iconSize={18} className="mb-2 py-1" />
        </div>
        <ChatList
          loadingList={loadingList}
          conversations={conversations}
          currentUser={currentUser}
        />
      </div>
    </>
  );
};

export default SearchChatSection;
