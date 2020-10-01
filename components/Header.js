import Link from 'next/link';
export default function Header() {
  return (
    <header
      style={{ height: 50, display: 'flex', justifyContent: 'space-between' }}
    >
      <Link href="/">
        <a>
          {' '}
          <img style={{ height: 50 }} src="/logo.png" alt="" />
        </a>
      </Link>

      <Link href="/products">
        <a>Products</a>
      </Link>

      <Link href="/cart">
        <a>
          <img style={{ height: 50 }} src="/cart.png" alt="" />
        </a>
      </Link>
    </header>
  );
}
