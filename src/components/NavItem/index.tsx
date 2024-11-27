import Link from 'next/link';

type NavItemProps = {
  text: string;
  url: string;
  cssLi: string;
  cssLink: string;
};

export default function NavItem({ text, url, cssLi, cssLink }: NavItemProps) {
  return (
    <li className={cssLi} aria-label={text}>
      <Link href={url} className={cssLink}>
        {text}
      </Link>
    </li>
  );
}
