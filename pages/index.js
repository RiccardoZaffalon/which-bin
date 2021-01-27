import { useState, useEffect, useRef } from 'react';

export default function Home({ zones }) {
  const select = useRef(null);

  function handleOnSubmit(e) {
    console.log(select.current.value);
    e.preventDefault();
  }

  return (
    <div className="bins">
      <form onSubmit={handleOnSubmit}>
        <select ref={select}>
          { zones.map((el, i) => {
            return <option value={el.id} key={el.id}>{el.name}</option>
          }) }
        </select>
        <input type="submit" value="Salva" />
      </form>
    </div>
  )
}

function getZones() {
  return [
    {
      name: 'Casale sul Sile',
      id: 7
    },
    {
      name: 'Treviso – fuori mura',
      id: 3
    },
    {
      name: 'Carbonera',
      id: 6
    },
  ]
}

export async function getServerSideProps() {
  const zones = getZones();

  return {
    props: {
      zones,
    }
  }
}