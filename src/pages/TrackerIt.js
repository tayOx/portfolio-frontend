import React from 'react';

import PostForm from '../components/Postform';

const TrackerIt = () => {
  return (
    <div>
      <PostForm />
      <form method="get" action="/howto/trackerit">
        <button type="submit" class="how">How to?</button>
      </form>
    </div>
  );
};

export default TrackerIt;