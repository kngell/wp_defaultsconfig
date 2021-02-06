<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?= $this->siteTitle()?>
    </title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Packages -->
    <!-------standards-------->
    <link href="<?=$this->cssLib?>" rel="stylesheet" type="text/css">

    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
    <!-- Main style -->
    <link href="<?=$this->mainCssStyle?>" rel="stylesheet" type="text/css">

    <!-- Plugins css -->
    <link href="<?=$this->pluginsCss?>" rel="stylesheet" type="text/css">
    <?= $this->content('head');?>
</head>

<body class="sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed text-sm ">
    <div class="wrapper">