<?php


class TH_Admin
{
    //=======================================================================
    //Categories table
    //=======================================================================
    // public static function categoriesTable($data)
    // {
    //     $output ='';
    //     foreach ($data as $categorie) {
    //         $output .= $categorie->outputCategories();
    //     }
    //     return $output;
    // }

    public static function categoriesTable($data)
    {
        $output='';
        $output .= '<table class="table table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col" style="width:2%" class="text-center">#</th>
                            <th scope="col" style="width:15%">Categorie</th>
                            <th scope="col">Description</th>
                            <th scope="col" style="width:15%">Photo</th>
                            <th scope="col" style="width:20%">Parent Categorie</th>
                            <th scope="col" style="width:20%">Opérations</th>
                        </tr>
                    </thead>
                    <tbody>';
        foreach ($data as $cat) {
            $catgorie = ((int)$cat->parentID != 0) ? $cat->getDetails($cat->parentID)->categorie:"";
            $output .= ' <tr>
                            <th scope="row">' . $cat->catID . '</th>
                            <td>' . $cat->categorie. '</td>
                            <td>' . $cat->description. '</td>
                            <td>' . $cat->photo. '</td>
                            <td>' . $catgorie. '</td>
                            <td>
                            <a href="#" id="' . $cat->catID .'"  title="Edit posts" class="text-primary editBtn mr-2" data-toggle="modal" data-target="#modal-box"><i class="fas fa-edit fa-lg"></i></a>&nbsp; &nbsp; &nbsp; &nbsp;
                            
                            <a href="#" id="' .$cat->catID. '" title="Delete post" class="text-danger deleteBtn ml-2"><i class="fas fa-trash-alt fa-lg"></i></a></td>
                        </tr>';
        }
        $output .= '</tbody></table>';

        return $output;
    }
    //=======================================================================
    //Posts table
    //=======================================================================

    public static function postsTable($data)
    {
        $output='';
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
            $user = UtilisateurManager::currentUser()->getDetails($post->userID) ;
            $output .= ' <tr>
                            <th scope="row">' . $post->postID . '</th>
                            <th scope="row">' . $user->firstName . ' , ' .  $user->lastName . '</th>
                            <td>' . $post->postTitle. '</td>
                            <td>' . $post->getpostDate() . '</td>
                            <td>' . $post->getContentOverview($post->get_colContent()). '...</td>
                            <td>
                            <a href="'.PROOT.'members/postdetails/'.$post->postID .'" title="view details" class="text-success infoBtn"><i class="fas fa-info-circle fa-lg"></i></a>&nbsp;

                            <a href="#" id="' . $post->postID. '" title="Edit posts" class="text-primary editBtn px-2" data-toggle="modal" data-target="#modal-box"><i class="fas fa-edit fa-lg"></i></a>&nbsp;

                            <a href="#" id="' . $post->postID. '" title="Delete post" class="text-danger deleteBtn"><i class="fas fa-trash-alt fa-lg"></i></a>
                            </td>
                        </tr>';
        }
        $output .= '</tbody>
            </table>';

        return $output;
    }
    //=======================================================================
    //users table
    //=======================================================================

    public static function utilisateurTable($data, $deletedUsers=false)
    {
        $output = '';
        $output = '<table class="table table-stripped table-bordered text-center">
    <thead>
        <tr>
            <th scope="col">UserID</th>
            <th scope="col">Firsname</th>
            <th scope="col">Lastname</th>
            <th scope="col">E-mail</th>
            <th scope="col">Photo</th>
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
            <th scope="col">Verified</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>';
        foreach ($data as $row) {
            $output .= '<tr>
            <td>' . $row->userID. '</td>
            <td>' . $row->firstName . '</td>
            <td>' . $row->lastName . '</td>
            <td>' . $row->email . '</td>
            <td><img src="' . $row->profileImage . '" class="rounded-circle" width="40"></td>
            <td>' . $row->phone . '</td>
            <td>' . $row->gender . '</td>
            <td>' . $row->verified . '</td>
            ';
            if (!$deletedUsers) {
                $output .='<td><a href="#" id="' . $row->userID. '" title="View Details"
                    class="text-primary userDetailsIcon" data-toggle="modal" data-target="#userDetailsModal"><i
                        class="fas fa-info-circle fa-lg"></i></a>&nbsp;&nbsp;

                <a href="#" id="' . $row->userID . '" title="Delete user" class="text-danger deleteUserIcon"><i
                        class="fas fa-trash-alt fa-lg"></i></a>
            </td>
        </tr>';
            } else {
                $output .= '<td>
            <a href="#" id="' . $row->userID. '" title="Restore user"
                class="text-white restoreUserIcon badge badge-dark p-2"><i
                    class="fas fa-trash-restore-alt fa-lg bg-success"></i></a>&nbsp;

            <a href="#" id="' . $row->userID . '" title="Delete user" class="text-danger deleteUserIcon"><i
                    class="fas fa-trash-alt fa-lg"></i></a>
        </td>
        </tr>';
            }
        }
        $output .= '</tbody>
</table>';
        return $output;
    }

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
            $user = UtilisateurManager::currentUser()->getDetails($row->userID) ;
            $output .= '<tr>
            <td>' . $row->fbID . '</td>
            <td>' . $row->subject . '</td>
            <td>' . substr($row->feedback, 0, 100) . '</td>
            <td>' . $row->created_at . '</td>
            <td>' .$user->firstName .' ' .$user->lastName . '</td>
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
            $user = UtilisateurManager::currentUser()->findById('userID', $row->userID) ;
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
        $output ='';
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
            <td> '. $adherent->nom .' </td>
            <td>' . $adherent->prenom .'</td>
            <td>' . $adherent->email .'</td>
            <td>'. $adherent->phone_fixe.'</td>
            <td> ' . $adherent->phone_portable .'</td>
            <td class="clearfix">
                <a href="#" id="'. $adherent->adhID. '" title="view details" class="text-info infoBtn" data-toggle="modal" data-target="#adhInfoModal""><i class="fas fa-info-circle fa-lg"></i></a>
                &nbsp;

                <a href="#" id="'. $adherent->adhID .'" title="Edit contact" class="text-primary editBtn"
                    data-toggle="modal" data-target="#adhModal"><i class="fas fa-edit fa-lg"></i></a>&nbsp;

                <a href="#" id="'. $adherent->adhID .'" title="Delete contact" class="text-danger deleteBtn"><i
                        class="fas fa-trash-alt fa-lg"></i></a>
            </td>
        </tr>';
        }
        $output .= '</tbody>
        </table>';
        return $output;
    }
    //=======================================================================
    //Association table
    //=======================================================================
    public static function assocTable($data)
    {
        $output = ' <table class="table table-striped table-bordered table-hover">
    <thead class="thead-inverse text-muted">
        <tr>
            <th>Sigle</th>
            <th>Dénomination</th>
            <th>Couriel</th>
            <th>Tél. Fix</th>
            <th>Tél. Portable</th>
            <th style="width:5%" class="text-center">cts</th>
            <th class="text-center">Actions</th>
        </tr>
    </thead>
    <tbody>';
        foreach ($data as $assoc) {
            $output .= '<tr>
            <td>
                <a href="'.PROOT.'forms/details/'.$assoc->assID .'">' . $assoc->sigle .'</a>
            </td>
            <td>' . $assoc->denomination .'
            </td>
            <td>' . $assoc->couriel .'
            </td>
            <td>'.$assoc->phone_fixe.'
            </td>
            <td>
                ' . $assoc->phone_portable .'
            </td>
            <td class="text-center">
                <a href="'.PROOT.'members/adherents/' . $assoc->assID . '" title="contacts utiles"
                    class="text-success text-center"><i class="fas fa-address-book fa-lg"></i></a>&nbsp;
            </td>
            <td class="text-center clearfix">
                <a href="'.PROOT.'members/assocdetails/' . $assoc->assID . '" title="view details" class="text-info"><i
                        class="fas fa-info-circle fa-lg"></i></a>&nbsp;&nbsp;
                <a href="#" id="'. $assoc->assID .'" title="Edit Association" class="text-primary editBtn"
                    data-toggle="modal" data-target="#assocModal"><i class="fas fa-edit fa-lg"></i></a>&nbsp;&nbsp;

                <a href="#" id="'. $assoc->assID .'" title="Delete association" class="text-danger deleteBtn"><i
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
        $output ='';
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
            <td>' . $rea->societe .'
            </td>
            <td>' . $rea->title .'
            </td>
            <td>' . $rea->getContentOverview('actions') .'
            </td>
            <td class="text-center justify-content-between claerfix">
                <a href="#" id="'. $rea->reaID . '" title="view details" class="text-info infoBtn"><i
                        class="fas fa-info-circle fa-lg"></i></a>&nbsp;&nbsp;

                <a href="#" id="'. $rea->reaID .'" title="Edit realisation" class="text-primary editBtn mx-3" data-toggle="modal"
                    data-target="#realisationModal"><i class="fas fa-edit fa-lg"></i></a>&nbsp;&nbsp;

                <a href="#" id="'. $rea->reaID .'" title="Delete contact" class="text-danger deleteBtn"><i
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
            <td class="text-center">' . $session->sforID .'
            </td>
            <td class="pl-3">' . $session->getDate($session->start_date) .'
            </td>
             <td class="pl-3">' . $session->getDate($session->end_date) .'
            </td>
             <td>' . $session->getContentOverview($session->get_colContent()) .'
            </td>
             <td class="text-center"> <a href="'. PROOT .'adminnav/programme_details/'. 'SessionsFormations/' .$session->sforID . '/' . $session->formID .'" title="view details" class="text-info programmeBtn"><i class="fas fa-search-plus fa-lg"></i></a>&nbsp;&nbsp;
            </td>
            <td class="text-center justify-content-between claerfix">
                <a href="#" id="'. $session->sforID . '" title="view details" class="text-info infoBtn"><i
                        class="fas fa-info-circle fa-lg"></i></a>&nbsp;&nbsp;

                <a href="#" id="'. $session->sforID .'" title="Edit Session" class="text-primary editBtn" data-toggle="modal"
                    data-target="#modalbox"><i class="fas fa-edit fa-lg"></i></a>&nbsp;&nbsp;

                <a href="#" id="'. $session->sforID .'" title="Delete Session" class="text-danger deleteBtn"><i
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
            <td class="text-center">' . $row->ofemID .'
            </td>
            <td class="pl-3">' . $row->titre .'
            </td>
            <td>' . $row->getContentOverview("descriptif") .'
            </td>
             <td class="pl-3">' . $row->getContentOverview("profil_recherche") .'
            </td>
            <td class="text-center justify-content-between claerfix">
                <a href="#" id="'. $row->ofemID .'" title="View Details" class="text-info infoBtn" data-toggle="modal"
                data-target="#modalinfos"><i class="fas fa-info-circle fa-lg"></i></a>&nbsp;&nbsp;

                <a href="#" id="'. $row->ofemID .'" title="Edit Offre" class="text-primary editBtn mx-3" data-toggle="modal"
                data-target="#modalbox"><i class="fas fa-edit fa-lg"></i></a>&nbsp;&nbsp;

                <a href="#" id="'. $row->ofemID .'" title="Delete Offre" class="text-danger deleteBtn"><i
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
            <td class="text-center">' . $row->pforID .'
            </td>
            <td class="pl-3">' . $row->titre .'
            </td>
             <td class="pl-3">' . $row->getContentOverview("objectifs") .'
            </td>
            <td>' . $row->getContentOverview("programme") .'
            </td>
      
            <td class="text-center justify-content-between claerfix">
                <a href="'. PROOT .'adminnav/programme_details/'. 'ProgrammeFormation/' . $row->pforID .'" title="view details"
class="text-info
infoBtn"><i class="fas fa-info-circle fa-lg"></i></a>&nbsp;&nbsp;

<a href="#" id="'. $row->pforID .'" title="Edit programme" class="text-primary editBtn mx-3" data-toggle="modal"
    data-target="#modal"><i class="fas fa-edit fa-lg"></i></a>&nbsp;&nbsp;

<a href="#" id="'. $row->pforID .'" title="Delete programme" class="text-danger deleteBtn"><i
        class="fas fa-trash-alt fa-lg"></i></a>
</td>

</tr>';
        }
        $output .= '</tbody>
</table>';
        return $output;
    }
}
