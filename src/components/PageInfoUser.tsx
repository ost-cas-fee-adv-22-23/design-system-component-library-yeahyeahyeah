import { ReactElement, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/context';

const PageInfoUser = (): ReactElement => {
  const { user } = useContext(GlobalContext);

  useEffect(() => console.log('userinfo', user), [user]);

  return (
    <div className="text-black">
      <h2 className="text-2xl ">User Info</h2>
      <div className=" w-60">
        <div className="flex">
          <p className="mr-2">Name : </p>
          <p>{user?.name}</p>
        </div>

        <div className="flex">
          <p className="mr-2">SurName : </p>
          <p>{user?.surname}</p>
        </div>
      </div>
    </div>
  );
};
export default PageInfoUser;
