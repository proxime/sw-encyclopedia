import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { Planet } from '../store/types/encyclopedia';
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
  results: Planet[];
}

const Planets: React.FC = () => {
  const [element, setElement] = useState<null | Planet>(null);
  const [name, setName] = useState('');
  const { planets } = useSelector((state: RootState) => state.encyclopedia);

  const params = useParams<ParamsType>();
  const history = useHistory();

  const getElement = useCallback(
    async (name_: string) => {
      const tempEl = planets?.find((el) => el.name === name_);
      if (tempEl) {
        setElement(tempEl);
        return;
      }

      try {
        const res = await fetch(
          `https://swapi.dev/api/planets?search=${name_}`,
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
    [planets, history]
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
            <Link to="/">Home</Link> / <span>Planets</span> /{' '}
            <span>{name}</span>
          </div>
          {element && (
            <div className="details__content">
              <DetailsElement title="Name:" value={element.name} />
              <DetailsElement
                title="Rotation period:"
                value={element.rotation_period}
              />
              <DetailsElement
                title="Orbital period:"
                value={element.orbital_period}
              />
              <DetailsElement title="Diameter:" value={element.diameter} />
              <DetailsElement title="Climate:" value={element.climate} />
              <DetailsElement title="Gravity:" value={element.gravity} />
              <DetailsElement
                title="Surface water:"
                value={element.surface_water}
              />
              <DetailsElement title="Population:" value={element.population} />
              <DetailsElement
                title="Number of films:"
                value={element.films.length.toString()}
              />
            </div>
          )}
          <Link to="/" className="details__back">
            Back
          </Link>
        </section>
      </main>
    </>
  );
};

export default Planets;
