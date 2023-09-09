import {
  Container,
  SearchForm,
  Section,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [searchParams, setSearchparams] = useSearchParams();
  const regionTitle = searchParams.get('region');
  const getRegion = region => {
    setSearchparams({ region });
  };
  useEffect(() => {
    if (!regionTitle) {
      return;
    }
    setLoading(true);
    fetchByRegion(regionTitle)
      .then(data => {
        setCountries(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [regionTitle]);
  return (
    <Section>
      <Container>
        <SearchForm getRegion={getRegion} />
        <CountryList countries={countries} />
      </Container>
      {loading && <Loader />}
    </Section>
  );
};
