import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({ getRegion }) => {
  const [region, setRegion] = useState([]);
  const hendleChange = evt => {
    setRegion(evt.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    getRegion(region);
    setRegion('');
  };
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        onChange={hendleChange}
        aria-label="select"
        name="region"
        required
        default="defaultValue"
      >
        <option disabled value="default">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
