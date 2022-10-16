const WhoToFollowListItem = (who) => {
  return(`
  <li class="list-group-item d-flex">
            <img class="rounded-circle d-inline-block" src=${who.avatarIcon} height="50px" width="50px">
            <ul class=" justify-content-center list-group d-inline-block p-0 m-0">
              <li class="list-group-item border-0 pt-0 pb-0 wd-increase-z-index bg-transparent px-lg-0 px-xl-3">

                <div class="d-inline wd-white-space-nowrap">
                  <b>${who.userName}</b> <i class="fa fa-check-circle"></i>
                </div>
              </li>
              <li class="list-group-item border-0 pt-0 pb-0 px-lg-0 px-xl-3">
                @${who.handle}
              </li>
            </ul>
            <div class="w-75 d-flex justify-content-end">
              <button type="button" class="btn-primary btn override-bs rounded-pill position-absolute">Follow</button>
            </div>
  </li>
  `);
}
export default WhoToFollowListItem;