import React, { useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

type PageNumber = 1 | 2 | 3;

const Index: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageNumber>(1);

  const handlePage1Complete = () => {
    setCurrentPage(2);
  };

  const handlePage2Complete = () => {
    setCurrentPage(3);
  };

  return (
    <main className="relative">
      {currentPage === 1 && <Page1 onComplete={handlePage1Complete} />}
      {currentPage === 2 && <Page2 onComplete={handlePage2Complete} />}
      {currentPage === 3 && <Page3 />}
    </main>
  );
};

export default Index;
