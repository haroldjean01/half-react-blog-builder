import React, { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [font, setFont] = useState('titillium');
  const [align, setAlign] = useState('center');
  const [text, setText] = useState('');
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview {...{ title, subtitle, font, align, text }} />
      <Editor {...{ setTitle, setSubtitle, setFont, setAlign, setText }} />
    </main>
  );
}
