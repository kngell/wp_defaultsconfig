<?php
use Brick\Money\Money;

class TH_Admin
{
    //=======================================================================
    //User Groups and permissions
    //=======================================================================

    public static function groupsTable($data)
    {
        $output = '';
        $output .= '<table class="table table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col" style="width:10%" class="text-center">#</th>
                            <th scope="col" style="width:20%">Name</th>
                            <th scope="col" style=>Description</th>
                            <th scope="col" style="width:20%">Parent Group</th>
                            <th scope="col" style="width:20%">Actions</th>
                        </tr>
                    </thead>
                    <tbody>';
        foreach ($data as $item) {
            $active = $item->status == 1 ? "style='color:green'" : '';
            $group = ((int)$item->parentID != 0) ? $item->getDetails($item->parentID)->name : '';
            $output .= ' <tr>
                            <th scope="row">' . $item->grID . '</th>
                            <td>' . $item->name . '</td>
                            <td>' . $item->description . '</td>
                            <td>' . $group . '</td>
                            <td>
                            <a href="#" id="' . $item->grID . '" title="status" class="text-danger activateBtn"> <i class="fas fa-power-off fa-lg" ' . $active . '></i></a>&nbsp;
                            <a href="#" id="' . $item->grID . '"  title="Edit permissions" class="text-primary editBtn mx-2" data-bs-toggle="modal" data-bs-target="#modal-box"><i class="fas fa-edit fa-lg"></i></a>&nbsp;
                            <a href="#" id="' . $item->grID . '" title="Delete permissions" class="text-danger deleteBtn"><i class="fas fa-trash-alt fa-lg"></i></a>
                            </td>   
                        </tr>';
        }
        $output .= '</tbody></table>';

        return $output;
    }

    //=======================================================================
    //Categories table
    //=======================================================================

    public static function categoriesTable($data)
    {
        $output = '';
        $output .= '<table class="table table-bordered text-center table-hover table-striped">
                    <thead class="mt-2">
                        <tr>
                            <th scope="col" style="width:2%" class="text-center">#</th>
                            <th scope="col" style="width:20%">Categorie</th>
                            <th scope="col">Description</th>
                            <th scope="col" style="width:15%">Photo</th>
                            <th scope="col" style="width:20%">Parent Categorie</th>
                            <th scope="col" style="width:20%">Opérations</th>
                        </tr>
                    </thead>
                    <tbody>';
        foreach ($data as $cat) {
            $catgorie = ((int)$cat->parentID != 0) ? $cat->getDetails($cat->parentID)->categorie : '';
            $active = $cat->status == 1 ? "style='color:green'" : '';
            $txtactive = $cat->status == 1 ? 'Deactivate Category' : 'Activate Category';
            $output .= ' <tr>
                            <th scope="row">' . $cat->catID . '</th>
                            <td>' . $cat->categorie . '</td>
                            <td>' . $cat->description . '</td>
                            <td>' . $cat->photo . '</td>
                            <td>' . $catgorie . '</td>
                            <td>
                            <a href="#" id="' . $cat->catID . '" title="' . $txtactive . '" class="text-danger activateBtn"> <i class="fal fa-power-off fa-lg" ' . $active . '></i></a>&nbsp;
                            <a href="#" id="' . $cat->catID . '"  title="Edit Category" class="text-primary editBtn mx-3" data-bs-toggle="modal" data-bs-target="#modal-box"><i class="fal fa-edit fa-lg"></i></a>&nbsp;
                            <a href="#" id="' . $cat->catID . '" title="Delete Caegory" class="text-danger deleteBtn"><i class="fal fa-trash-alt fa-lg"></i></a>
                            </td>   
                        </tr>';
        }
        $output .= '</tbody></table>';

        return $output;
    }

    //=======================================================================
    //Unit table
    //=======================================================================

    public static function unitsTable($data)
    {
        $output = '';
        $output .= '<table class="table table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col" style="width:2%" class="text-center">#</th>
                            <th scope="col" style="width:30%">Unit</th>
                            <th scope="col">Description</th>
                            <th scope="col" style="width:20%">Opérations</th>
                        </tr>
                    </thead>
                    <tbody>';
        foreach ($data as $item) {
            $active = $item->status == 1 ? "style='color:green'" : '';
            $txtactive = $item->status == 1 ? 'Active Unit' : 'Inactive Unit';
            $output .= ' <tr>
                            <th scope="row">' . $item->unID . '</th>
                            <td>' . $item->unit . '</td>
                            <td>' . $item->descr . '</td>
                            <td>
                            <a href="#" id="' . $item->unID . '" title="' . $txtactive . '" class="text-danger activateBtn"> <i class="fal fa-power-off fa-lg" ' . $active . '></i></a>&nbsp;
                            <a href="#" id="' . $item->unID . '"  title="Edit Unit" class="text-primary editBtn mx-2" data-bs-toggle="modal" data-bs-target="#modal-box"><i class="fal fa-edit fa-lg"></i></a>&nbsp;
                            <a href="#" id="' . $item->unID . '" title="Delete Unit" class="text-danger deleteBtn"><i class="fal fa-trash-alt fa-lg"></i></a>
                            </td>   
                        </tr>';
        }
        $output .= '</tbody></table>';

        return $output;
    }

    //=======================================================================
    //Products table
    //=======================================================================
    public static function productsTable($data)
    {
        $output = '';
        $output .= '<table id="ecommerce-datatable" class="table table-middle table-hover table-responsive">
        <thead>
            <tr>
                <th class="no-sort">
                    <label class="custom-checkbox"> <input type="checkbox"><span></span></label>
                </th>
                <th class="no-sort">Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Units Sold</th>
                <th>Status</th>
                <th class="text-center no-sort">Action</th>
            </tr>
        </thead>
        <tbody>';
        foreach ($data as $item) {
            if ($item->p_status == 1) {
                $status_class = 'bg-success';
                $status_text = 'active';
            } else {
                $status_class = 'bg-danger';
                $status_text = 'inactive';
            }
            $media = !empty($item->p_media) ? ImageManager::asset_img(unserialize($item->p_media)[0]) : ImageManager::asset_img('products' . US . 'product-80x80.jpg');
            $output .= '<tr>
                <td>
                    <label class="custom-checkbox">
                        <input type="checkbox">
                        <span></span>
                    </label>
                </td>
                <td>
                    <a href="ecommerce-product-detail.html">
                        <img class="img-thumbnail" alt="Product" src="' . $media . '" width="48">
                    </a>
                </td>
                <td><a href="' . PROOT . 'admin' . US . 'new_product' . '">' . $item->p_title . '</a></td>
                <td>' . 'Categorie' . '</td>
                <td>' . Money::of($item->p_regular_price, 'EUR') . '</td>
                <td>' . $item->p_qty . '</td>
                <td>2</td>
                <td><span class="badge ' . $status_class . ' rounded">' . $status_text . '</span></td>
                <td>
                    <ul class="list-unstyled table-actions">
                        <li><a href="#" id="' . $item->pdtID . '" title="Edit Product" class="editBtn" data-bs-toggle="modal" data-bs-target="#modal-box"><i class="fal fa-pen"
                                   ></i></a></li>
                        <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                    data-bs-toggle="tooltip"></i></a></li>
                        <li><a href="#"><i class="fal fa-chart-bar"
                                    data-bs-original-title="Analytics"
                                    data-bs-toggle="tooltip"></i></a></li>
                        <li><a href="#"><i class="fal fa-clone"
                                    data-bs-original-title="Duplicate"
                                    data-bs-toggle="tooltip"></i></a></li>
                        <li><a href="#" id="' . $item->pdtID . '" title="Delete Product" class="deleteBtn"><i class="fal fa-trash" data-bs-original-title="Archive"
                                    data-bs-toggle="tooltip"></i></a></li>
                    </ul>
                </td>
            </tr>';
        }
        $output .= '</tbody></table>';
        return $output;
    }

    //=======================================================================
    //Company table
    //=======================================================================
    public static function companyTable($data)
    {
        $output = ' <table class="table table-striped table-bordered table-hover">
    <thead class="thead-inverse text-muted">
        <tr>
            <th>Sigle</th>
            <th>Dénomination</th>
            <th>Couriel</th>
            <th>Tél. Fix</th>
            <th>Tél. Portable</th>
            <th style="width:5%" class="text-center">contacts</th>
            <th class="text-center">Actions</th>
        </tr>
    </thead>
    <tbody>';
        foreach ($data as $item) {
            $output .= '<tr>
            <td>
                <a href="' . PROOT . 'forms/details/' . $item->compID . '">' . htmlspecialchars_decode($item->sigle, ENT_NOQUOTES) . '</a>
            </td>
            <td>' . htmlspecialchars_decode($item->denomination, ENT_NOQUOTES) . '
            </td>
            <td>' . $item->couriel . '
            </td>
            <td>' . $item->phone . '
            </td>
            <td>
                ' . $item->mobile . '
            </td>
            <td class="text-center">
                <a href="#" title="contacts utiles"
                    class="text-success text-center"><i class="fas fa-address-book fa-lg"></i></a>&nbsp;
            </td>
            <td class="text-center clearfix">
                <a href="' . PROOT . 'admin/company_details/' . $item->compID . '" title="view details" class="text-info"><i
                        class="fas fa-info-circle fa-lg"></i></a>&nbsp;&nbsp;
                <a href="#" id="' . $item->compID . '" title="Edit Company" class="text-primary editBtn mx-2"
                    data-bs-toggle="modal" data-bs-target="#modal-box"><i class="fas fa-edit fa-lg"></i></a>&nbsp;&nbsp;

                <a href="#" id="' . $item->compID . '" title="Delete Company" class="text-danger deleteBtn"><i
                        class="fas fa-trash-alt fa-lg"></i></a>

            </td>

        </tr>';
        }
        $output .= '</tbody>
        </table>';
        return $output;
    }

    //=======================================================================
    //Posts table
    //=======================================================================

    public static function postsTable($data)
    {
        $output = '';
        $output .= '<table class="table table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col" class="text-center">#ID</th>
                            <th scope="col" style="width:10%;">Rédacteur</th>
                            <th scope="col" style="width:20%">Title</th>
                            <th scope="col" style="width:15%">Date</th>
                            <th scope="col">Resumé</th>
                            <th scope="col" style="width:15%">Opérations</th>
                        </tr>
                    </thead>
                    <tbody>';
        foreach ($data as $post) {
            $user = AuthManager::currentUser()->getDetails($post->userID);
            $output .= ' <tr>
                            <th scope="row">' . $post->postID . '</th>
                            <th scope="row">' . $user->firstName . ' , ' . $user->lastName . '</th>
                            <td>' . $post->postTitle . '</td>
                            <td>' . $post->getpostDate() . '</td>
                            <td>' . $post->getContentOverview($post->get_colContent()) . '...</td>
                            <td>
                            <a href="' . PROOT . 'members/postdetails/' . $post->postID . '" title="view details" class="text-success infoBtn"><i class="fas fa-info-circle fa-lg"></i></a>&nbsp;

                            <a href="#" id="' . $post->postID . '" title="Edit posts" class="text-primary editBtn px-2" data-toggle="modal" data-target="#modal-box"><i class="fas fa-edit fa-lg"></i></a>&nbsp;

                            <a href="#" id="' . $post->postID . '" title="Delete post" class="text-danger deleteBtn"><i class="fas fa-trash-alt fa-lg"></i></a>
                            </td>
                        </tr>';
        }
        $output .= '</tbody>
            </table>';

        return $output;
    }

    // Feedback table
    public static function feedbackTable($data)
    {
        $output = '<table class="table table-stripped table-bordered text-center">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">subject</th>
            <th scope="col">feedback</th>
            <th scope="col">created_at</th>
            <th scope="col">From : </th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>';
        foreach ($data as $row) {
            $user = AuthManager::currentUser()->getDetails($row->userID);
            $output .= '<tr>
            <td>' . $row->fbID . '</td>
            <td>' . $row->subject . '</td>
            <td>' . substr($row->feedback, 0, 100) . '</td>
            <td>' . $row->created_at . '</td>
            <td>' . $user->firstName . ' ' . $user->lastName . '</td>
            <td>
                <a href="#" fid="' . $row->fbID . '" id="' . $row->userID . '" title="Reply"
                    class="text-primary replyfeedbackIcon" data-toggle="modal" data-target="#showRepliedModal"><i
                        class="fas fa-reply fa-lg"></i></a>
            </td>
        </tr>';
        }
        $output .= '</tbody>
</table>';
        return $output;
    }

    public static function notificationTable($data)
    {
        $output = '';

        foreach ($data as $row) {
            $output .= '<div class="alert alert-dark" role="alert">
    <button type="button" id="' . $row->notID . '" class="close" data-dismiss="alert" area-label="Close">
        <span area-hidden="true">&times;</span>
    </button>
    <h4 class="alert-heading">New notification</h4>';
            $user = AuthManager::currentUser()->findById('userID', $row->userID);
            $output .= '<p class="mb-0 lead">' . $row->message . ' By :' . $user->firstName . ' ' . $user->lastName . '</p>
    <hr class="my-2">
    <p class="mb-0 float-left"><b>User E-mail :</b>' . $user->email . '</p>
    <p class="mb-0 float-right">' . H::time_in_ago($row->created_at) . '</p>
    <div class="clearfix"></div>
</div>';
        }
        return $output;
    }

    public static function userNotificationTabble($data)
    {
        $output = '';
        foreach ($data as $row) {
            $output .= '<div class="alert alert-danger" role="alert">
    <button type="button" id="' . $row->notID . '" class="close" data-dismiss="alert" area-label="Close">
        <span area-hidden="true">&times;</span>
    </button>
    <h4 class="alert-heading">New notification</h4>
    <p class="mb-0 lead">' . $row->message . '</p>
    <hr class="my-2">
    <p class="mb-0 float-left">reply of feedback from Admin</p>
    <p class="mb-0 float-right">' . H::time_in_ago($row->created_at) . '</p>
    <div class="clearfix"></div>
</div>';
        }
        return $output;
    }

    //=======================================================================
    //Adherents table
    //=======================================================================

    public static function adherentsTable($data)
    {
        $output = '<table class="table table-striped table-bordered table-hover">
        <thead class="thead-inverse text-muted">
        <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>email</th>
            <th>Tél. Fix</th>
            <th>Tél. Portable</th>
            <th class="text-center">Actions</th>
        </tr>
        </thead>
        <tbody>';
        foreach ($data as $adherent) {
            $output .= '<tr>
            <td> ' . $adherent->nom . ' </td>
            <td>' . $adherent->prenom . '</td>
            <td>' . $adherent->email . '</td>
            <td>' . $adherent->phone_fixe . '</td>
            <td> ' . $adherent->phone_portable . '</td>
            <td class="clearfix">
                <a href="#" id="' . $adherent->adhID . '" title="view details" class="text-info infoBtn" data-toggle="modal" data-target="#adhInfoModal""><i class="fas fa-info-circle fa-lg"></i></a>
                &nbsp;

                <a href="#" id="' . $adherent->adhID . '" title="Edit contact" class="text-primary editBtn"
                    data-toggle="modal" data-target="#adhModal"><i class="fas fa-edit fa-lg"></i></a>&nbsp;

                <a href="#" id="' . $adherent->adhID . '" title="Delete contact" class="text-danger deleteBtn"><i
                        class="fas fa-trash-alt fa-lg"></i></a>
            </td>
        </tr>';
        }
        $output .= '</tbody>
        </table>';
        return $output;
    }

    //=======================================================================
    //comments table
    //=======================================================================

    public static function commentsTable($data)
    {
        $output = '';
        foreach ($data as $comment) {
            $output .= $comment->outputComment();
        }
        return $output;
    }

    //=======================================================================
    //Realisation table admin
    //=======================================================================

    public static function realisationsTable($data)
    {
        $output = ' <table class="table table-striped table-bordered table-hover">
    <thead class="thead-inverse text-muted">
        <tr>
            <th>Société</th>
            <th style="width:25%">Projet</th>
            <th>Actions</th>
            <th class="text-center justify-content-between" style="width:15%">Actions</th>
        </tr>
    </thead>
    <tbody>';
        foreach ($data as $rea) {
            $output .= '<tr>
            <td>' . $rea->societe . '
            </td>
            <td>' . $rea->title . '
            </td>
            <td>' . $rea->getContentOverview('actions') . '
            </td>
            <td class="text-center justify-content-between claerfix">
                <a href="#" id="' . $rea->reaID . '" title="view details" class="text-info infoBtn"><i
                        class="fas fa-info-circle fa-lg"></i></a>&nbsp;&nbsp;

                <a href="#" id="' . $rea->reaID . '" title="Edit realisation" class="text-primary editBtn mx-3" data-toggle="modal"
                    data-target="#realisationModal"><i class="fas fa-edit fa-lg"></i></a>&nbsp;&nbsp;

                <a href="#" id="' . $rea->reaID . '" title="Delete contact" class="text-danger deleteBtn"><i
                        class="fas fa-trash-alt fa-lg"></i></a>
            </td>

        </tr>';
        }
        $output .= '</tbody>
</table>';
        return $output;
    }

    //=======================================================================
    //Session formation table
    //=======================================================================

    public static function sessions_formationsTable($data)
    {
        $output = ' <table class="table table-striped table-bordered table-hover">
    <thead class="thead-inverse text-muted">
        <tr>
            <th style="width:10px">Id</th>
            <th style="width:10%">Date début</th>
              <th style="width:10%">Date fin</th>
            <th>Résumé </th>
            <th style="width:10px">Programme </th>
            <th class="text-center justify-content-between" style="width:20%">Actions</th>
        </tr>
    </thead>
    <tbody class="">';
        foreach ($data as $session) {
            $output .= '<tr>
            <td class="text-center">' . $session->sforID . '
            </td>
            <td class="pl-3">' . $session->getDate($session->start_date) . '
            </td>
             <td class="pl-3">' . $session->getDate($session->end_date) . '
            </td>
             <td>' . $session->getContentOverview($session->get_colContent()) . '
            </td>
             <td class="text-center"> <a href="' . PROOT . 'adminnav/programme_details/' . 'SessionsFormations/' . $session->sforID . '/' . $session->formID . '" title="view details" class="text-info programmeBtn"><i class="fas fa-search-plus fa-lg"></i></a>&nbsp;&nbsp;
            </td>
            <td class="text-center justify-content-between claerfix">
                <a href="#" id="' . $session->sforID . '" title="view details" class="text-info infoBtn"><i
                        class="fas fa-info-circle fa-lg"></i></a>&nbsp;&nbsp;

                <a href="#" id="' . $session->sforID . '" title="Edit Session" class="text-primary editBtn" data-toggle="modal"
                    data-target="#modalbox"><i class="fas fa-edit fa-lg"></i></a>&nbsp;&nbsp;

                <a href="#" id="' . $session->sforID . '" title="Delete Session" class="text-danger deleteBtn"><i
                        class="fas fa-trash-alt fa-lg"></i></a>
            </td>

        </tr>';
        }
        $output .= '</tbody>
</table>';
        return $output;
    }

    //=======================================================================
    //Offre d'emploi table
    //=======================================================================

    public static function offre_emploiTable($data)
    {
        $output = ' <table class="table table-striped table-bordered table-hover">
    <thead class="thead-inverse text-muted">
        <tr>
            <th style="width:5%" class="text-center">#</th>
            <th style="width:15%">Titre</th>
            <th style="width:30%">Description</th>
            <th style="width:30px">Profil</th>
            <th class="text-center justify-content-between" style="width:20%">Actions</th>
        </tr>
    </thead>
    <tbody class="">';
        foreach ($data as $row) {
            $output .= '<tr>
            <td class="text-center">' . $row->ofemID . '
            </td>
            <td class="pl-3">' . $row->titre . '
            </td>
            <td>' . $row->getContentOverview('descriptif') . '
            </td>
             <td class="pl-3">' . $row->getContentOverview('profil_recherche') . '
            </td>
            <td class="text-center justify-content-between claerfix">
                <a href="#" id="' . $row->ofemID . '" title="View Details" class="text-info infoBtn" data-toggle="modal"
                data-target="#modalinfos"><i class="fas fa-info-circle fa-lg"></i></a>&nbsp;&nbsp;

                <a href="#" id="' . $row->ofemID . '" title="Edit Offre" class="text-primary editBtn mx-3" data-toggle="modal"
                data-target="#modalbox"><i class="fas fa-edit fa-lg"></i></a>&nbsp;&nbsp;

                <a href="#" id="' . $row->ofemID . '" title="Delete Offre" class="text-danger deleteBtn"><i
                class="fas fa-trash-alt fa-lg"></i></a>
            </td>

            </tr>';
        }
        $output .= '</tbody>
        </table>';
        return $output;
    }

    //=======================================================================
    //Programme formation formation table
    //=======================================================================

    public static function programme_formationTable($data)
    {
        $output = ' <table class="table table-striped table-bordered table-hover">
    <thead class="thead-inverse text-muted">
        <tr>
            <th style="width:5%" class="text-center">#</th>
            <th style="width:15%">Titre</th>
            <th style="width:30%">Objectifs</th>
            <th style="width:30px">Programme</th>
            <th class="text-center justify-content-between" style="width:20%">Actions</th>
        </tr>
    </thead>
    <tbody class="">';
        foreach ($data as $row) {
            $output .= '<tr>
            <td class="text-center">' . $row->pforID . '
            </td>
            <td class="pl-3">' . $row->titre . '
            </td>
             <td class="pl-3">' . $row->getContentOverview('objectifs') . '
            </td>
            <td>' . $row->getContentOverview('programme') . '
            </td>
      
            <td class="text-center justify-content-between claerfix">
                <a href="' . PROOT . 'adminnav/programme_details/' . 'ProgrammeFormation/' . $row->pforID . '" title="view details"
class="text-info
infoBtn"><i class="fas fa-info-circle fa-lg"></i></a>&nbsp;&nbsp;

<a href="#" id="' . $row->pforID . '" title="Edit programme" class="text-primary editBtn mx-3" data-toggle="modal"
    data-target="#modal"><i class="fas fa-edit fa-lg"></i></a>&nbsp;&nbsp;

<a href="#" id="' . $row->pforID . '" title="Delete programme" class="text-danger deleteBtn"><i
        class="fas fa-trash-alt fa-lg"></i></a>
</td>

</tr>';
        }
        $output .= '</tbody>
</table>';
        return $output;
    }
}
