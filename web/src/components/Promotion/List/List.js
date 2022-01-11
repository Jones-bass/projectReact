<<<<<<< HEAD
import React, { useState } from 'react';
import PromotionModal from '../Modal/Modal';
import PromotionCard from '../Card/Card';

import './List.css';

const PromotionList = ({ loading, error, promotions }) => {
  const [promotionId, setPromotionId] = useState(null);

  if (error) {
    return <div>Algo de errado não está certo</div>;
  }
  if (loading || promotions === null) {
    return <div>Carregando...</div>;
  }

  if (promotions.length === 0) {
    return <div>Nenhum resultado encontrado</div>;
  }

  return (
    <div className="promotion-list">
      {promotions.map((promotion) => (
        <PromotionCard
          promotion={promotion}
          onClickComments={() => setPromotionId(promotion.id)}
        />
      ))}
      {promotionId && (
        <PromotionModal
          promotionId={promotionId}
          onClickClose={() => setPromotionId(null)}
        />
      )}
    </div>
  );
};

export default PromotionList;
=======
import React from 'react';
import PromotionCard from '../Card/Card';
import './List.css';

const PromotionList = ({ loading, promotions }) => {
  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="promotion-list">
      {promotions.map((promotion) => (
        <PromotionCard promotion={promotion} />
      ))}
    </div>
  );
}

export default PromotionList;
>>>>>>> 74f135c3ea100bb6b31843f4cef3e6f36fba192b
