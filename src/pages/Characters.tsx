import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { Character } from '../store/types/encyclopedia';
import Header from '../components/Header';
import DetailsElement from '../components/DetailsElement';

import '../styles/Details.scss';

interface ParamsType {
  name: string;
}

interface Response {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}

const Characters: React.FC = () => {
  const [element, setElement] = useState<null | Character>(null);
  const [name, setName] = useState('');
  const { characters } = useSelector((state: RootState) => state.encyclopedia);

  const params = useParams<ParamsType>();
  const history = useHistory();

  const getElement = useCallback(
    async (name_: string) => {
      const tempEl = characters?.find((el) => el.name === name_);
      if (tempEl) {
        setElement(tempEl);
        return;
      }

      try {
        const res = await fetch(
          `https://swapi.dev/api/people?search=${name_}`,
          {
            method: 'GET',
          }
        );
        const character: Response = await res.json();

        if (character.results.length === 0) {
          history.push('/');
          return;
        }

        setElement(character.results[0]);
      } catch (err) {
        history.push('/');
      }
    },
    [characters, history]
  );

  useEffect(() => {
    getElement(params.name);
    setName(params.name);
  }, [params.name, getElement]);

  return (
    <>
      <Header />
      <main className="main">
        <div className="main__background"></div>
        <section className="details">
          <div className="details__path">
            <Link to="/">Home</Link> / <span>Characters</span> /{' '}
            <span>{name}</span>
          </div>
          {element && (
            <div className="details__content">
              <DetailsElement title="Name:" value={element.name} />
              <DetailsElement title="Height:" value={element.height} />
              <DetailsElement title="Hair color:" value={element.hair_color} />
              <DetailsElement title="Skin color:" value={element.skin_color} />
              <DetailsElement title="Eye color:" value={element.eye_color} />
              <DetailsElement title="Birth year:" value={element.birth_year} />
              <DetailsElement title="Gender:" value={element.gender} />
              <DetailsElement
                title="Number of films:"
                value={element.films.length.toString()}
              />
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Characters;
