import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getEncyclopediaDataAction,
  setEncyclopediaFilter,
} from '../store/actions/encyclopedia';
import { RootState } from '../store/reducers';
import { Filter, Result } from '../store/types/encyclopedia';
import Header from '../components/Header';
import HomepageSelect from '../components/HomepageSelect';
import Spinner from '../components/Spinner';
import SearchInput from '../components/SearchInput';
import HomepageCard from '../components/HomepageCard';

import '../styles/Homepage.scss';
import characterImg from '../img/character.png';
import planetImg from '../img/planet.png';
import speciesImg from '../img/species.png';
import starshipImg from '../img/starship.png';

interface LocationState {
  from?: {
    pathname: string;
  };
}

const Homepage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [elements, setElements] = useState<Result | null>([]);
  const encyclopedia = useSelector((state: RootState) => state.encyclopedia);

  const dispatch = useDispatch();
  const location = useLocation<LocationState>();
  const history = useHistory<LocationState>();

  const handleSetSearchValue = (value: string) => {
    setSearch(value);
  };

  const handleSetElements = useCallback(() => {
    setElements(encyclopedia[encyclopedia.filter]);
  }, [setElements, encyclopedia]);

  const handleChangeFilter = (filter: Filter) => {
    dispatch(setEncyclopediaFilter(filter));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCard = (element: any) => {
    switch (encyclopedia.filter) {
      case 'characters':
        return (
          <>
            <p className="homepage__card-text">
              <span>Gender:</span> {element.gender}
            </p>
            <p className="homepage__card-text">
              <span>Height:</span> {element.height}
            </p>
          </>
        );
      case 'planets':
        return (
          <>
            <p className="homepage__card-text">
              <span>Climate:</span> {element.climate}
            </p>
            <p className="homepage__card-text">
              <span>Population:</span> {element.population}
            </p>
          </>
        );
      case 'species':
        return (
          <>
            <p className="homepage__card-text">
              <span>Classification:</span> {element.classification}
            </p>
            <p className="homepage__card-text">
              <span>Language:</span> {element.language}
            </p>
          </>
        );
      case 'starships':
        return (
          <>
            <p className="homepage__card-text">
              <span>Model:</span> {element.model}
            </p>
            <p className="homepage__card-text">
              <span>Hyperdrive rating:</span> {element.hyperdrive_rating}
            </p>
          </>
        );
      default:
        return <></>;
    }
  };

  useEffect(() => {
    if (!encyclopedia.fetched) {
      dispatch(getEncyclopediaDataAction());
    }
  }, [dispatch, encyclopedia.fetched]);

  useEffect(() => {
    handleSetElements();
  }, [handleSetElements]);

  useEffect(() => {
    if (location.state?.from?.pathname) {
      history.push(location.state.from.pathname);
    }
  }, [location, history]);

  const filteredElements = elements?.filter(
    (el) => el.name.toLowerCase().search(search.toLowerCase()) > -1
  );

  return (
    <>
      <Header />
      <main className="main">
        <div className="main__background"></div>
        <section className="homepage">
          <div className="homepage__select-conainer">
            <div className="homepage__select-section">
              <HomepageSelect
                title="Characters"
                image={characterImg}
                customClass="characters"
                active={encyclopedia.filter === 'characters'}
                setActive={() => handleChangeFilter('characters')}
              />
              <HomepageSelect
                title="Planets"
                image={planetImg}
                customClass="planets"
                active={encyclopedia.filter === 'planets'}
                setActive={() => handleChangeFilter('planets')}
              />
            </div>
            <div className="homepage__select-section">
              <HomepageSelect
                title="Species"
                image={speciesImg}
                customClass="species"
                active={encyclopedia.filter === 'species'}
                setActive={() => handleChangeFilter('species')}
              />
              <HomepageSelect
                title="Starships"
                image={starshipImg}
                customClass="starships"
                active={encyclopedia.filter === 'starships'}
                setActive={() => handleChangeFilter('starships')}
              />
            </div>
          </div>
          <SearchInput onSubmit={handleSetSearchValue} search={search} />
          {encyclopedia.loading ? (
            <Spinner />
          ) : (
            <section className="homepage__cards">
              {filteredElements && filteredElements.length > 0 ? (
                filteredElements?.map((el) => (
                  <HomepageCard
                    key={el.name}
                    name={el.name}
                    type={encyclopedia.filter}
                  >
                    {renderCard(el)}
                  </HomepageCard>
                ))
              ) : (
                <h3 className="homepage__cards-empty">No search results</h3>
              )}
            </section>
          )}
        </section>
      </main>
    </>
  );
};

export default Homepage;
