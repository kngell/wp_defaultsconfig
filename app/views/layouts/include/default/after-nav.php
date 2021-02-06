<section class="section-header pt-1 pb-2">
    <div class="container">
        <div class="row align-items-center after-nav">
            <div class="col-4">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb float-left">
                        <li class="breadcrumb-item"><a href="<?=PROOT?>home">Accueil</a>
                        </li>
                        <?php if (!in_array($this->page_title, ['Email verification','Reset password'])) : ?>
                        <?php if (isset($page) && $page != '' && !isset($this->page)) : ?>
                        <li class="breadcrumb-item"><a href="<?=PROOT . $this->view_file?>"><?=$page?></a>
                        </li>
                        <?php else :
                         $page = $this->get_file_path();   ?>
                        <?php if (isset($this->page) && $this->page !='') : ?>
                        <li class="breadcrumb-item">
                            <a href="<?=PROOT . 'home/' . lcfirst($this->page)?>">
                                <?= $this->page ?? ''; ?></a>
                        </li>
                        <?php unset($page[$this->page]);endif ; ?>
                        <?php foreach ($page as $key => $value) : ; ?>
                        <?php if ((strpos($value, 'page') == false)) : ?>
                        <?php $active = ($value == end($page)) ? 'active' : '' ; ?>
                        <?php if (empty($active)) : ?>
                        <li class="breadcrumb-item">
                            <a href="<?=PROOT . $key?>">
                                <?= $value ?? ''; ?></a>
                        </li>
                        <?php else : ?>
                        <li class="breadcrumb-item <?=$active?>">
                            <?=($value == 'Show') ? 'Article' : $value; ?>
                        </li>
                        <?php endif ; ?>
                        <?php endif ; ?>
                        <?php endforeach; ; ?>
                        <?php endif; ; ?>
                        <?php endif; ?>
                    </ol>
                </nav>

            </div>

            <!--------------Search box------------->
            <div class="col-5 recherche-wrapper pr-4" id="recherche-wrapper">
                <?php if (!in_array($this->page_title, ['Email verification','Reset password'])) : ?>
                <form action="<?=PROOT?>home/search" id="recherche-frm" class="needs-validation" novalidate
                    method="post">
                    <?=FH::csrfInput('csrftoken', hash_hmac('sha256', 'recherche-frm', $_SESSION[TOKEN_NAME]));?>
                    <div class="input-group">
                        <input type="hidden" name="frm_name" value="recherche-frm">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search for news..."
                            aria-label="Search" name="search">
                        <span class="input-group-btn">
                            <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit" name="btn_search"
                                id="searchbtn"><span class="glyphicon glyphicon-search"></span><i
                                    class="fas fa-search"></i></button>
                        </span>
                    </div>
                    <div id="alertrecherche"></div>
                </form>
                <?php endif; ?>
            </div>

            <!------x------Search form------x------->

            <!--------------Social------------->
            <div class="col-3 social">
                <a href="#"><i class="fab fa-facebook-f icon"></i></a>
                <a href="#"><i class="fab fa-instagram icon"></i></a>
                <a href="#"><i class="fab fa-twitter icon"></i></a>
                <a href="#"><i class="fab fa-youtube icon"></i></a>
            </div>
        </div>
    </div>
</section>