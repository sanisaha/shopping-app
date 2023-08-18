import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <Link to='/' className="navbar-brand fs-2 fw-bold">Shopping App</Link>
    <form class="d-flex">
      <Link to='/products'><button class="btn btn-outline-success" type="submit">Products</button></Link>
    </form>
  </div>
</nav>
        </div>
    );
};

export default Header;