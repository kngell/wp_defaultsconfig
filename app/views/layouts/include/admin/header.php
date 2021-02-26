<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $this->get_siteTitle() ?>
    </title>

    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Main style -->
    <link
        href="<?= $this->get_Asset('css/librairies/adminlib', 'css') ?? ''?>"
        rel="stylesheet" type="text/css">
    <!-- Plugins css -->
    <link
        href="<?= $this->get_Asset('css/plugins/adminplugins', 'css') ?? ''?>"
        rel="stylesheet" type="text/css">
    <!-- Main style -->
    <link
        href="<?= $this->get_Asset('css/main/backend/admin/main', 'css') ?? ''?>"
        rel="stylesheet" type="text/css">
    <!-- Custom css -->
    <?= $this->content('head'); ?>
</head>

<body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
    <div class="wrapper">