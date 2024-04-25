import { getPageItems } from '@/actions/getPageItems';
import { useState } from 'react';

export default function Pagination() {
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = Math.ceil(100 / 8);

  const handlePrevious = async () => {
    const itemsPerPage = 12;
    const data = getPageItems(pageNumber, itemsPerPage);

    console.log('PRODUCTS:', products);
  };

  const handleNext = () => {
    //
  };

  return (
    <nav
      className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to{' '}
          <span className="font-medium">10</span> of{' '}
          <span className="font-medium">20</span> results
        </p>
      </div>

      <div className="flex flex-1 justify-between sm:justify-end">
        <button
          onClick={handlePrevious}
          disabled={pageNumber === 1}
          className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={pageNumber === totalPages}
          className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
        >
          Next
        </button>
      </div>
    </nav>
  );
}
