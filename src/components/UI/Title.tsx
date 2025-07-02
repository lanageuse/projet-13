import React, { type JSX } from 'react';
import useUser from '../../hooks/useUser';

const Title: React.FC = (): JSX.Element => {
  const { state } = useUser(18);
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
