import { useParams } from "react-router-dom";
import { useGetUsers } from "../../users";
import { Params } from "../types";

export const MembersPreview = () => {
  const params = useParams() as Params;
  const { data: users, isLoading, isIdle, isError } = useGetUsers(params);

  if (isIdle) return null;
  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>something went wrong!</p>;

  return (
    <button className="flex items-center rounded-md border border-slate-200 p-1 pr-2">
      <div className="flex">
        {users.slice(0, 4).map((user) => (
          <span key={user.username}>
            <img
              className="h-5 w-5 rounded-full bg-slate-100 ring-2 ring-white"
              src={user.avatarUrl}
              alt=""
            />
          </span>
        ))}
      </div>
      <span className="ml-3 text-sm text-slate-500">{users.length}</span>
    </button>
  );
};
