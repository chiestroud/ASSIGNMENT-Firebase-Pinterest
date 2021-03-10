const navBar = (userObject) => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
        <a class="navbar-brand title" href="#">
          <span class="p-nav">P</span>
          <span class="i-nav">I</span>
          <span class="n-nav">N</span>
          <span class="t-nav">T</span>
          <span class="e-nav">E</span>
          <span class="r-nav">R</span>
          <span class="e2-nav">E</span>
          <span class="s-nav">S</span>
          <span class="t-nav">T</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="all-boards">
                Boards <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="all-pins">Pins</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="public-pins">Public Pins</a>
            </li>
            <li>
            <input
              class="form-control mr-sm-2 mt-1"
              id="search"
              placeholder="Search Boards & Pins"
              aria-label="Search"
            />
            </li>
          </ul>
          <div id="welcomeMsg" class="mr-3">Welcome back ${userObject.displayName}</div>
          <img id="profileImg" class="mr-3" src="${userObject.photoURL}"></img>
          <div id="logoutButton"><button id="google-auth" class="btn btn-danger">SIGNOUT</button></div>
        </div>
      </nav>
    `;
};

export default navBar;
