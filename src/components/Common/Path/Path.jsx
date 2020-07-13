import React from 'react';

const Path = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    {
      pages.map(p => <span key={p} onClick={() => {props.onPageChanged(p);}}
                           className={props.currentPage === p
                                      ? 'selected_path'
                                      : ''}>{p}</span>)
    }

  </div>;

};
export default Path;
