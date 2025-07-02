import React, { type JSX } from 'react';
import useFetch from '../../hooks/useFetch';
import { ApiEndpoints } from '../../types/api/endpoints';
import { authorizedId, type UserData } from '../../types/api/user';

const Title: React.FC = (): JSX.Element => {
  const { state } = useFetch<UserData>(authorizedId.cecilia, ApiEndpoints.User);
  const { data } = state;
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-5xl font-bold text-black">
        Bonjour <span className="text-red">{data?.userInfos.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default Title;
