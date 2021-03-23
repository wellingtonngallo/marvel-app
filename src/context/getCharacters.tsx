import React, { useState, createContext, useContext, useEffect } from 'react';
import { api, DEFAULT_QUERY } from '../services/api';

interface CharacterContextData {
  characters: Character[];
  loading: boolean;
  nameStartsWith: string;
  setLimitRequest: () => void;
  searchCharacter: (nameCharacter: string) => void;
}

interface Character {
  id: number;
  name: string;
  image: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

interface Params {
  limit: number;
  offset: number;
  ts: string;
  apikey: string;
  hash: string;
  nameStartsWith?: string | null;
}

const GetCharactersContext = createContext<CharacterContextData>({} as CharacterContextData);

export const CharacterProvider: React.FC = ({children}) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [offset, setOffset] = useState(1);
  const [loading, setLoading] = useState(true);
  const [nameStartsWith, setNameStartsWith] = useState('');

  useEffect(() => {
    getCharacters();
  }, [offset, nameStartsWith]);

  const getCharacters = async() => {
    const params: Params = {
      ...DEFAULT_QUERY,
      limit: 20,
      offset
    }

    if (nameStartsWith) {
      params.nameStartsWith = nameStartsWith
    }

    const { data } = await api.get('characters', { params });

    if (!characters.length || nameStartsWith.length > 0) {
      setCharacters(data.data.results);
    } else {
      setCharacters([...characters, ...data.data.results]);
    }

    setLoading(false);
  }

  const setLimitRequest = () => {
    setLoading(true);
    setOffset(offset + 1); 
  }

  const searchCharacter = (nameCharacter: string) => {
    setOffset(0);
    setCharacters([]);
    setNameStartsWith(nameCharacter);
  }


  return (
    <GetCharactersContext.Provider value={{characters, loading, setLimitRequest, searchCharacter, nameStartsWith}}>
      {children}
    </GetCharactersContext.Provider>
  )
}

export function useCharacter() {
  const context = useContext(GetCharactersContext);

  return context;
}