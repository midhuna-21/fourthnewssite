// components/CategoryHeader.tsx
import Link from 'next/link';

interface Props {
  category: string;
}

export default function CategoryHeader({ category }: Props) {
  return (
    <div className='mt-7'>
      {/* Breadcrumb */}
      <nav className="text-sm  mb-2 md:mb-4" aria-label="Breadcrumb"style={{ color: '#838383' }}>
        <ol className="list-reset flex ">
          <li>
            <Link href="/" className="hover:underline">Home</Link>
          </li>
          <li><span className="mx-2">→</span></li>
          <li className="">{category}</li>
        </ol>
      </nav>

      {/* Category Title */}
      <h1 className="text-2xl md:text-4xl font-bold">
        Category : {category}
      </h1>
    </div>
  );
}
