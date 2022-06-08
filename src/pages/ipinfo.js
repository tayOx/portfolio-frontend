import React from 'react';
import GetIp from '../components/getip';

const MyIp = () => {
  return (
    <div>
      <GetIp />
      <form method="get" action="/howto/ip">
          <button type="submit" class="how">How to?</button>
      </form>
    </div>
  );
};

export default MyIp;