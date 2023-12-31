import { Container, CountryList, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCountries()
      .then(data => {
        setCountries(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
      </Container>
      {loading && <Loader />}
    </Section>
  );
};
