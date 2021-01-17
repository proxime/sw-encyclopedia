import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { Starship } from '../store/types/encyclopedia';
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
  results: Starship[];
}

const Starships: React.FC = () => {
  const [element, setElement] = useState<null | Starship>(null);
  const [name, setName] = useState('');
  const { starships } = useSelector((state: RootState) => state.encyclopedia);

  const params = useParams<ParamsType>();
  const history = useHistory();

  const getElement = useCallback(
    async (name_: string) => {
      const tempEl = starships?.find((el) => el.name === name_);
      if (tempEl) {
        setElement(tempEl);
        return;
      }

      try {
        const res = await fetch(
          `https://swapi.dev/api/starships?search=${name_}`,
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
    [starships, history]
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
            <Link to="/">Home</Link> / <span>Starships</span> /{' '}
            <span>{name}</span>
          </div>
          {element && (
            <div className="details__content">
              <DetailsElement title="Name:" value={element.name} />
              <DetailsElement title="Model:" value={element.model} />
              <DetailsElement
                title="Cost in credits:"
                value={element.cost_in_credits}
              />
              <DetailsElement title="Length:" value={element.length} />
              <DetailsElement
                title="Max atmosphering speed:"
                value={element.max_atmosphering_speed}
              />
              <DetailsElement title="Crew:" value={element.crew} />
              <DetailsElement title="Passengers:" value={element.passengers} />
              <DetailsElement
                title="Cargo capacity:"
                value={element.cargo_capacity}
              />
              <DetailsElement
                title="Consumables:"
                value={element.consumables}
              />
              <DetailsElement
                title="Hyperdrive rating:"
                value={element.hyperdrive_rating}
              />
              <DetailsElement title="MGLT:" value={element.MGLT} />
              <DetailsElement
                title="Starship class:"
                value={element.starship_class}
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

export default Starships;
