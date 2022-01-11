<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react';
import useApi from 'components/utils/useApi';
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';
>>>>>>> 74f135c3ea100bb6b31843f4cef3e6f36fba192b
import { Link } from 'react-router-dom';

import PromotionList from '../List/List';
import './Search.css';

const PromotionSearch = () => {
<<<<<<< HEAD
  const mountRef = useRef(null);
  const [search, setSearch] = useState('');
  const [load, loadInfo] = useApi({
    debounceDelay: 300,
    url: '/promotions',
    method: 'get',
    params: {
      _embed: 'comments',
      _order: 'desc',
      _sort: 'id',
      title_like: search || undefined,
    },
  });

  useEffect(() => {
    load({
      debounced: mountRef.current,
    });

    if (!mountRef.current) {
      mountRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
=======
  const [promotions, setPromotions] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const params = {};
    if (search) {
      params.title_like = search;
    }
    axios.get('http://localhost:5000/promotions?_embed=comments', { params })
      .then((response) => {
        setPromotions(response.data);
      });
>>>>>>> 74f135c3ea100bb6b31843f4cef3e6f36fba192b
  }, [search]);

  return (
    <div className="promotion-search">
      <header className="promotion-search__header">
        <h1>Promo Show</h1>
        <Link to="/create">Nova Promoção</Link>
      </header>
      <input
        type="search"
        className="promotion-search__input"
        placeholder="Buscar"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
<<<<<<< HEAD
      <PromotionList
        promotions={loadInfo.data}
        loading={loadInfo.loading}
        error={loadInfo.error}
      />
=======
      <PromotionList promotions={promotions} loading={!promotions.length} />
>>>>>>> 74f135c3ea100bb6b31843f4cef3e6f36fba192b
    </div>
  );
};

<<<<<<< HEAD
export default PromotionSearch;
=======
export default PromotionSearch;
>>>>>>> 74f135c3ea100bb6b31843f4cef3e6f36fba192b
