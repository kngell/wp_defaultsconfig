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
                        <p class="text-muted text-sm"><b>About Me: </b>{{description}}
                        </p>
                        <ul class="ml-4 mb-0 fa-ul text-muted">
                            <li class="small"><span class="fa-li"><i class="fas fa-lg fa-building"></i></span>
                                <b>Address:</b>
                                {{address}}
                            </li>
                            <li class="small"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span> <b>Phone
                                    #:</b> {{phone}}
                            </li>
                        </ul>
                    </div>
                    <div class="col-5 text-center">
                        <img src="{{image}}" alt="user-avatar" class="img-circle img-fluid">
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <div class="row justify-content-between">
                    <div class="col text-start">
                        <a href="#" class="btn btn-sm btn-primary">
                            <i class="fas fa-user"></i> Edit Profile
                        </a>
                        <a href="#" class="btn btn-sm bg-teal">
                            <i class="fas fa-comments"></i>
                        </a>
                        <div id="alertErr"></div>
                    </div>
                    <div class="col text-end">
                        <form id="delete_user{{userID}}" class="delete_user">
                            {{token}}
                            <input type="hidden" name='userID' value="{{userID}}" id="{{userID}}">
                            <button type="submit" class="text-danger deleteBtn"><i
                                    class="fas fa-trash-alt fa-lg"></i></button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>