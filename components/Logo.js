import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/">
      <a>
        <img style={{ height: 60 }} src="/logo.png" alt="" />
      </a>
    </Link>
  );
}
