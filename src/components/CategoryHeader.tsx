// components/CategoryHeader.tsx
import Link from 'next/link';

interface Props {
  category: string;
}

export default function CategoryHeader({ category }: Props) {
  return (
    <div className='mt-7'>
      {/* Breadcrumb */}
      <nav className=" text-[20px] text-gray-500" aria-label="Breadcrumb" style={{fontWeight: 500 }}>
        <ol className="list-reset flex ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li><span className="mx-2">→</span></li>
          <li className="">{category}</li>
        </ol>
      </nav>

      {/* Category Title */}
      <h1
        className="text-[28px] sm:text-[36px] xs:text-[36px] font-bold"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        Category : {category}
      </h1>

    </div>
  );
}
