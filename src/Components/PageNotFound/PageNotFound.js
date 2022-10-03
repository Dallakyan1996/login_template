import React from 'react';
import { Link } from 'react-router-dom';
import s from'./page-not-found.module.css';

const PageNotFound = () => (
  <div className={s.dgb}>
    <div className={s.notFoundDiv}>
      <div className={s.pageNotFoundWrapper}>
        <h1 className={s.pageNotFoundNum}>404</h1>
        <hr />
        <h1 className={s.notFoundTextDiv}>This page could be not found</h1>
      <div className={s.goHomeDiv}>
        <Link to="/">
          Go Home
        </Link>
      </div>
      </div>
    </div>
  </div>
);

export default PageNotFound;