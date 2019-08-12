import React, {useEffect, useState} from 'react';
import styles from './Gists.scss'

export const Gists = () => {
  const [gists, setGists] = useState();

  useEffect(() => {
    const retrieveData = async () => {
      const data = await fetch('https://api.github.com/gists')
        .then((response) => {
          if (!response.ok) {
            throw new Error();
          }
          return response.json();
      });
      setGists(data);
    };

    retrieveData();
  },[])

  return (
    <div id="gists">
      <div className={`${styles.header}`}>
        <h1>Unit Testing with Jest and Enzyme</h1>
        <h2>Github Gists</h2>
      </div>
      <section id="gistList">
        {gists ? <GistList gists={gists}/> : '...Loading Gists'}
      </section>
    </div>
  );
}

// Pure/Stateless Functional Component
export const GistList = ({gists}) => (
  <ul>
    {gists.map(gist => (
      <li key={gist.id}>
        <a href={gist.html_url}>{gist.description || '---'}</a>
      </li>
    ))}
  </ul>
);