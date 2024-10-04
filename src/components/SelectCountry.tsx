import { SelectCountryProps } from '@/interfaces/components';
import { Country } from '@/interfaces/utils';
import { getCountries } from '@/lib/data';

export async function SelectCountry({
  defaultCountry,
  name,
  id,
  className,
}: SelectCountryProps) {
  const countries: Country[] = await getCountries();
  const flag =
    countries.find((country) => country.name === defaultCountry)?.flag ?? '';
  return (
    <select
      name={name}
      id={id}
      className={className}
      defaultValue={`${defaultCountry}%${flag}`}
    >
      <option value="">Select country...</option>
      {countries.map((c) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}
