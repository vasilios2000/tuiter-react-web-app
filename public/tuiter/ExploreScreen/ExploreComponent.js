import PostSummaryList from "../PostSummaryList";
const ExploreComponent = () => {
  return(`
      <div class="form-group wd-position-magnifying-glass position-relative">
        <span class="fa fa-search text-black form-control-feedback"></span>
        <span class="fa fa-2x fa-cog text-primary wd-position-gear"></span>
        <input class="form-control override-bs mb-2" type="text" placeholder="Search Twitter">
      </div>
      <div class="mb-2">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="for-you.html">For you</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="trending.html">Trending</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="news.html">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="sports.html">Sports</a>
          </li>
          <li class="nav-item d-none d-md-block">
            <a class="nav-link" href="entertainment.html">Entertainment</a>
          </li>
          <li class="list-group-item d-flex flex-grow-1 border-0 d-none d-md-block">
          </li>
        </ul>
      </div>
      <div class="position-relative px-0">
        <img src="../../images/spacex-starship.jpg" class="img-fluid wd-max-height w-100">
        <div class="wd-bottom-left-image">
          <h2 class="text-light">SpaceX's Starship</h2>
        </div>
      </div>
      ${PostSummaryList()}
`);
}
export default ExploreComponent;