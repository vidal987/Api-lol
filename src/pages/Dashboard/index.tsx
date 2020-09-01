import React, { useState, useEffect } from "react";
import api from "../../services/api";

import * as Styled from "./styles";

interface Champion {
  id: string;
  name: string;
  title: string;
  image: {
    full: string;
  };
  blurb: string;
  tags: [string];
}

const Dashboard: React.FC = () => {
  const [champions, setChampions] = useState<Champion[]>([]);

  useEffect(() => {
    const loadChampions = async () => {
      const response = await api.get("/cdn/10.14.1/data/pt_BR/champion.json");

      const championsList = Object.values(response.data.data);

      setChampions(Object.values(response.data.data));

      console.log(championsList);
    };

    loadChampions();
  }, []);

  return (
    <>
      <Styled.Title>Lista de Campeões do Lolzinho</Styled.Title>
      <Styled.Form>
        <input
          type="text"
          placeholder="Insira o nome do usuário e o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Styled.Form>
      
      <Styled.Cards>
        {champions.map((champion) => (
          <Styled.Card>
            <Styled.ChampionBanner
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
              alt="Splash Art"
            />
            <Styled.Avatar
              src={`http://ddragon.leagueoflegends.com/cdn/10.14.1/img/champion/${champion.id}.png`}
              alt=""
            />
            <Styled.ChampionTitle>
              {champion.name} - {champion.title}
            </Styled.ChampionTitle>
            <div>
              {champion.tags.map((tag) => (
                <Styled.Tag color={tag}>{tag}</Styled.Tag>
              ))}
            </div>
            <Styled.Description>
              {champion.blurb}
            </Styled.Description>
          </Styled.Card>
        ))}
      </Styled.Cards>
    </>
  );
};

export default Dashboard;
