<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="css/fonts.css" />
        <link rel="stylesheet" href="css/all.min.css" />
        <link rel="stylesheet" href="css/mosf.css" />
        <style>
            html{
                background: #dfdfdf;
            }
            body{
                width: 100%;
                max-width: 480px;
                margin: 0 auto;
            }
        </style>
    </head>

    <body>
        <?php include_once("layout/navbar.html")?>
        <div class="body">
            <?php
            if(isset($_GET['page'])){
                $page = $_GET['page'];
                include_once($page.".html");
            }
            ?>
            
            
        </div>


        <div class="overlay"></div>    

        <?php include_once("layout/sidebar.html")?>
        <script type="text/javascript" src="js/jquery-3.6.0.min.js"></script>
        <script type="text/javascript" src="js/mosf.js"></script>
    </body>
</html>
