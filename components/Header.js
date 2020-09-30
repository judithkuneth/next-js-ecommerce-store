import Link from 'next/link';
export default function Header() {
  return (
    <header
      style={{ height: 50, display: 'flex', justifyContent: 'space-between' }}
    >
      <div>
        <Link href="/">
          <a>
            {' '}
            <img style={{ height: 50 }} src="/logo.png" alt="" />
          </a>
        </Link>
      </div>

      <Link href="./product-list">
        <a>Products</a>
      </Link>

      <div>
        <Link href="/cart">
          <a>
            <img style={{ height: 50 }} src="/cart.png" alt="" />
          </a>
        </Link>
      </div>
    </header>
  );
}
