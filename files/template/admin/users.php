    <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
        <div class="card bg-light w-100">
            <div class="card-header text-muted border-bottom-0">
                {{function}}
            </div>
            <div class="card-body pt-0">
                <div class="row">
                    <div class="col-7">
                        <h2 class="lead"><b>{{firstname}}&nbsp;{{lastname}}</b>
                        </h2>
                        <ul class="ms-4 mb-0 fa-ul text-muted">
                            <li class="small"><span class="fa-li"><i class="fas fa-lg fa-building"></i></span>
                                <b>Address:</b>
                                {{address}}
                            </li>
                            <li class="small"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span> <b>Phone
                                    #:</b> {{phone}}
                            </li>
                        </ul>
                    </div>
                    <div class="col-5 text-center img-wrapper">
                        <img src="{{image}}" alt="user-avatar" class="img-circle img-fluid">
                    </div>
                </div>
            </div>
            <div class="card-footer d-flex">
                <div class="row justify-content-between w-100 g-2">
                    <div class="col text-start">
                        <a href="{{users_profile}}" class="btn btn-sm btn-primary">
                            <i class="fas fa-user"></i> Edit Profile
                        </a>
                        <a href="#" class="btn btn-sm bg-teal">
                            <i class="fas fa-comments"></i>
                        </a>
                        <div id="alertErr"></div>
                    </div>
                    <div class="col text-end pt-2">
                        <form id="delete_user{{userID}}" class="{{formClass}}">
                            {{token}}
                            <input type="hidden" name='userID' value="{{userID}}" id="{{userID}}">
                            <button type="submit" class="{{delBtnClass}} {{btn}}"><i
                                    class="fas fa-trash-alt fa-lg"></i></button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>