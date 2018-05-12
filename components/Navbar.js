import Link from "next/link";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">BitsInfo</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor02">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link href="/">
        <a className="nav-link" >Home <span className="sr-only">(current)</span></a></Link>
      </li>
      <li className="nav-item"><Link href="/about">
        <a className="nav-link" href="#">About</a></Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search" />
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    // <div>
    //     {/* <style jsx> {`
    //     * {margin: 0;padding: 0;}
    //     body {
    //         font-family: sans-serif;
    //     }
    //     ul {
    //         list-style-type: none;
    //         background: dodgerblue;
    //         margin: 0;
    //         padding: 20px;
    //         // float: right;
    //     }
    //     ul li {
    //         display: inline-block;
    //         margin-left: 20px;
    //         padding: 5px 15px;
    //     }
    //     ul li a {
    //         text-decoration: none;
    //         color: ghostwhite;
    //         font-weight: 700;
    //     }
    //     `}</style> */}
    //     {/* This is just a basic styling way. Here, the CSS is component based, meaning the styles we declare here will be applicable only to the elements avaialable on this page, if we were to go to some other page these styles won't be available..! */}
    //     {/* <ul>
    //         <li><Link href="/"><a>Home</a></Link></li>
    //         <li><Link href="/about"><a>About</a></Link></li>
    //     </ul> */}
    // </div> 
);

export default Navbar;