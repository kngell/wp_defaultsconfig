<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="description"
        content="K'nGELL est un cabinet de conseil et d'ingénierie Logistique spécialisé dans la maitrise des process logistique et production grâce à l'usage de stratégies et tactiques Lean Management et six Sigma (6Sigma">
    <meta name="robots" content="index,follow">
    <title>
        <?= $this->set_siteTitle()?>
    </title>
    <!-- Main style -->
    <link
        href="<?= $this->asset('css/librairies/frontlib', 'css') ?? '' ?>"
        rel="stylesheet" type="text/css">
    <!-- Plugins css -->
    <link
        href="<?= $this->asset('css/plugins/homeplugins', 'css') ?? '' ?>"
        rel="stylesheet" type="text/css">
    <!-- Main style -->
    <link
        href="<?= $this->asset('css/main/frontend/main', 'css') ?? '' ?>"
        rel="stylesheet" type="text/css">

    <?= $this->content('head'); ?>
</head>

<body id="body">