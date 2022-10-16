const NavigationSidebar = () => {
  return(`
  <div>
        <ul class="list-group">
          <li class="list-group-item">
            <a class="text-decoration-none text-white" href="#">
            <i class="fab fa-twitter"></i></a>
          </li>
          <li class="list-group-item">
            <a class="text-decoration-none text-white" href="#">
              <i class="fas fa-home"></i>
              <span class="d-none d-xl-inline-block">Home</span>
            </a>
          </li>
          <li class="list-group-item text-white bg-primary">
            <a class="text-decoration-none text-white" href="#">
              <i class="fas fa-hashtag text-white"></i>
              <span class="d-none d-xl-inline-block">Explore</span>
            </a>
          </li>
          <li class="list-group-item">
            <a class="text-decoration-none text-white" href="#">
              <i class="fas fa-bell"></i>
              <span class="d-none d-xl-inline-block">Notifications</span>
            </a>
          </li>
          <li class="list-group-item">
            <a class="text-decoration-none text-white" href="#">
              <i class="fas fa-envelope"></i>
              <span class="d-none d-xl-inline-block">Messages</span>
            </a>
          </li>
          <li class="list-group-item">
            <a class="text-decoration-none text-white" href="#">
              <i class="fas fa-bookmark"></i>
              <span class="d-none d-xl-inline-block">Bookmarks</span>
            </a>
          </li>
          <li class="list-group-item">
            <a class="text-decoration-none text-white" href="#">
              <i class="fas fa-list"></i>
              <span class="d-none d-xl-inline-block">Lists</span>
            </a>
          </li>
          <li class="list-group-item">
            <a class="text-decoration-none text-white" href="#">
              <span><i class="fas fa-user"></i></span>
              <span class="d-none d-xl-inline-block">Profile</span>
            </a>
          </li>
          <li class="list-group-item">
            <a class="text-decoration-none text-white" href="#">
              <span><i class="fas fa-ellipsis-h"></i></span>
              <span class="d-none d-xl-inline-block">More</span>
            </a>
          </li>
          <li class="list-group-item border-0 px-0 mt-1 bg-transparent">
            <button class="btn btn-primary rounded-pill w-100 px-0">Tweet</button>
          </li>
        </ul>
      </div>
  `);
}
export default NavigationSidebar;