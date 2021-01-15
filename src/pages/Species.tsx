import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { Species } from '../store/types/encyclopedia';
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
  results: Species[];
}

const SpeciesPage: React.FC = () => {
  const [element, setElement] = useState<null | Species>(null);
  const [name, setName] = useState('');
  const { species } = useSelector((state: RootState) => state.encyclopedia);

  const params = useParams<ParamsType>();
  const history = useHistory();

  const getElement = useCallback(
    async (name_: string) => {
      const tempEl = species?.find((el) => el.name === name_);
      if (tempEl) {
        setElement(tempEl);
        return;
      }

      try {
        const res = await fetch(
          `https://swapi.dev/api/species?search=${name_}`,
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
    [species, history]
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
              <DetailsElement
                title="Classification:"
                value={element.classification}
              />
              <DetailsElement
                title="Designation:"
                value={element.designation}
              />
              <DetailsElement
                title="Average height:"
                value={element.average_height}
              />
              <DetailsElement
                title="Skin colors:"
                value={element.skin_colors}
              />
              <DetailsElement
                title="Hair colors:"
                value={element.hair_colors}
              />
              <DetailsElement title="Eye colors:" value={element.eye_colors} />
              <DetailsElement
                title="Average lifespan:"
                value={element.average_lifespan}
              />
              <DetailsElement title="language:" value={element.language} />
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default SpeciesPage;
