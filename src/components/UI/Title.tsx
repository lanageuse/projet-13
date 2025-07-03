import React, { type JSX } from 'react';
import { useUser } from '../../contexts/UserContext';

const Title: React.FC = (): JSX.Element => {
  const data = useUser();
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
