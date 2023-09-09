import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const { countryId } = useParams();
  const [countries, setCountries] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchCountry(countryId)
      .then(data => setCountries(data))
      .finally(() => {
        setLoading(false);
      });
  }, [countryId]);
  return (
    <Section>
      <Container>
        <CountryInfo {...countries} />
      </Container>
      {loading && <Loader />}
    </Section>
  );
};
