const PostSummaryItem = (post) => {
  return(`
  <li class="list-group-item">
  <div class=>
        <div class="row p-1">
          <div class="col-10 col-lg-9 col-md-8 col-sm-7">
            <div class="text-secondary">${post.topic}</div>
            <div>
              <b>${post.userName}</b>
              <i class="fa fa-check-circle"></i>
              <span class="text-secondary">- ${post.time}</span>
            </div>
            <div>
              <b>${post.title}</b>
            </div>
          </div>
          <div class="col-md-1 col-sm-1 d-lg-none"></div>
          <div class="col-2 col-lg-3 col-md-3 col-sm-4">
            <img src=${post.image} class="rounded-3" height="80px" width="80px">
          </div>
        </div>
      </div>
  </li>
  `);
}
export default PostSummaryItem;