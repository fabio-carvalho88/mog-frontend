import { Select } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { i18n } from '../next.config';
const { Option } = Select;

const SelectLanguage = () => {
  const { locale, asPath } = useRouter();
  const { locales } = i18n;

  return (
    <Select value={locale}>
      {locales.map((lang) => {
        return (
          <Option value={lang} key={lang}>
            <Link href={asPath} locale={lang}>
              <a>{lang}</a>
            </Link>
          </Option>
        );
      })}
    </Select>
  );
};

export default SelectLanguage;
