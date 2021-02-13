<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?= $this->siteTitle() ?>
    </title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Font Awesome -->
    <!-- Main style -->
    <link href="<?= $this->cssAdminlib ?? '' ?>"
        rel="stylesheet" type="text/css">
    <!-- Plugins css -->
    <link
        href="<?= $this->cssAdminPlugins ?? '' ?>"
        rel="stylesheet" type="text/css">
    <!-- Main style -->
    <link href="<?= $this->cssAdminMain ?? '' ?>"
        rel="stylesheet" type="text/css">
    <?= $this->content('head');?>

</head>

<body class="hold-transition login-page">
    <div class="login-box">