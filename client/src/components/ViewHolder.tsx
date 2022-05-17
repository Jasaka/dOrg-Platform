import React from 'react';
import Header from './Header';
import PlaceHolder from './PlaceHolder';

interface ViewHolderProps {
  view: string;
}

export default function ViewHolder(props: ViewHolderProps) {
  return (
    <>
      <Header currentView={props.view} />
      <div className='min-h-full'>
        <header className='bg-white shadow'>
          <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold text-gray-900'>{props.view}</h1>
          </div>
        </header>
        <main>
          <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
            <PlaceHolder placeholderName={props.view} />
          </div>
        </main>
      </div>
    </>
  );
}