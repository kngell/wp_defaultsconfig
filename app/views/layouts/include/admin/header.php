<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $this->siteTitle() ?>
    </title>

    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Main style -->
    <link href="<?= $this->cssAdminlib ?? "" ?>" rel="stylesheet" type="text/css">
    <!-- Plugins css -->
    <link href="<?= $this->cssAdminPlugins ?? "" ?>" rel="stylesheet" type="text/css">
    <!-- Main style -->
    <link href="<?= $this->cssAdminMain ?? "" ?>" rel="stylesheet" type="text/css">
    <!-- Custom css -->
    <?= $this->content('head'); ?>
</head>

<body class="hold-transition sidebar-mini">
    <div class="wrapper">