<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>สูตรเฮียบอล</title>
    <link rel="stylesheet" type="text/css" href="<?=$_SERVER['REQUEST_URI']?>/assets/css/style.css">
    <link rel="stylesheet" type="text/css" href="<?=$_SERVER['REQUEST_URI']?>/assets/css/style_main.css">
    <style type="text/css">
        #panel_note1,
        #panel_note2,
        #panel_note3 {
          margin: 5px auto 0 auto;
          width: 470px;
          position: relative;
        }

        #panel_note1 {
          margin: 10px auto 0 auto;
        }

        #panel_note1 img, 
        #panel_note2 img, 
        #panel_note3 img{
          margin: 0;
          padding: 0;
          width: 100%;
          height: auto;
        }

        #panel_login .input input::placeholder,
        #panel_logined .input input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: #7e7875;
          opacity: 1; /* Firefox */
        }

        #panel_login .input input:::-ms-input-placeholder,
        #panel_logined .input input:::-ms-input-placeholder { /* Internet Explorer 10-11 */
          color: #7e7875;
        }

        #panel_login .input input::::-ms-input-placeholder,
        #panel_logined .input input::::-ms-input-placeholder { /* Microsoft Edge */
          color: #7e7875;
        }

        @media screen  and (max-width: 979px) {
        #panel_note1,
        #panel_note2,
        #panel_note3 {
          width: 96%;
        }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="wrapper" style="height: 500px">

            <?php
            if(isset($_SESSION['bacara_logined_user'])) { 
                $loginedUser = $_SESSION['bacara_logined_user'];
                $userId = $loginedUser['user_id'];
                $userName = $loginedUser['user_name'];
            ?>
                <div id="panel_logined">
                    <div class="input">
                        <span><?=$userName?></span>
                    </div>
                    <div class="input">
                        <span class="credit_num">
                            <?php if(isset($_SESSION['bacara_user_credit'])) { 
                                $userCredit = $_SESSION['bacara_user_credit']; ?>
                                <?=$userCredit['credit']?>
                            <?php } else { ?>
                                0
                            <?php } ?>
                        </span>
                    </div>
                    <div class="buttons">
                        <div class="button register">
                            <input name="logout" id="logout" type="button" 
                            onclick="window.location='logout.php'" value="ออกจากระบบ" />
                        </div>
                    </div>
                    <?php if(isset($_SESSION['bacara_user_credit'])) { 
                        $userCredit = $_SESSION['bacara_user_credit']; ?>
                        <input type="hidden" id="credit" value="<?=$userCredit['credit']?>" />
                    <?php } else { ?>
                        <input type="hidden" id="credit" value="0" />
                    <?php } ?>
                </div>
            <?php } else { ?>
                <div id="panel_login">
                    <form name="form1" id="form1" method="post" action="" onsubmit="return onSubmit()">
                        <div class="input">
                            <input name="username" id="username" type="text" placeholder="UserName" required/>
                        </div>
                        <div class="input">
                            <input name="password" id="password" type="password" placeholder="Password" required/>
                        </div>
                        <div class="buttons">
                            <div class="button register">
                                <input name="register" id="register" type="button" onclick="window.location='register.php'" value="สมัครสมาชิก" />
                            </div>
                            <div class="button login">
                                <input name="login" id="login" type="submit" value="เข้าสู่ระบบ" />
                            </div>
                        </div>
                    </form>
                </div>
                <div id="panel_note1">
                    <img src="/bacara/assets/images/bg-note1.png" width="100%" height="auto" />
                </div>
                <div id="panel_note2">
                    <img src="/bacara/assets/images/bg-note2.png" width="100%" height="auto" />
                </div>
                <div id="panel_note3">
                    <img src="/bacara/assets/images/bg-note3.png" width="100%" height="auto" />
                </div>
            <?php } ?>

            <?php if(isset($_SESSION['bacara_logined_user'])) { ?>
                <div class="resultChipPanel">
                    <div id="main_body_col1_player"></div>
                    <div id="main_body_col1_tie"></div>
                    <div id="main_body_col1_banker"></div>
                    <div id="result_player"></div>
                    <div id="result_banker"></div>
                    <span><font color="#000000" style="line-height: 1px;">รอผลลัพธ์สูตร</font></span>
                </div>

                <div id="panel_table">
                    <div class="panel_table_in">
                        <table cellspacing="0" border="0" cellpadding="0">
                            <tbody>
                            <?php 
                                for($row=0;$row<10;$row++) { ?>
                                    <tr>
                                    <?php for($col=0;$col<16;$col++) { ?>
                                        <td id="<?=$row+1?>-<?=$col+1?>"></td>
                                    <?php } ?>
                                    </tr>
                                <?php }
                            ?>
                        </tbody></table>
                    </div>

                    <div class="btn_back" onclick="location.reload();"></div>
                    <div class="panel_control">
                        <div class="btn_player" id="clkPlayer"></div>
                        <div class="btn_tie" id="clkTie"></div>
                        <div class="btn_banker" id="clkBanker"></div>
                    </div>
                    <div class="btn_clear" onclick="location.reload();"></div>
                </div>
            <?php }  ?>
        </div>
    </div>

    <div id="lds-spinner-template" style="display: none;">
        <div class="lds-spinner" style="width:100%;height:100%">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script defer src="<?=$_SERVER['REQUEST_URI']?>/assets/js/ui_script.js"></script>
    <script defer src="<?=$_SERVER['REQUEST_URI']?>/assets/js/control.js"></script>
    <script>
        function onSubmit() {
            var username = document.getElementById('username');
            var password = document.getElementById('password');
            if (username.value == "") {
                alert("กรุณากรอก Username");
                return false;
            }
            if (password.value == "") {
                alert("กรุณากรอก Password");
                return false;
            }

            $.post("./portal.php?login",
            $("#form1").serialize(),
            function(data){
                console.log(data);
                if(data==1){
                    window.location = "<?=$_SERVER['REQUEST_URI']?>";
                } else {
                    alert("Username หรือ Password ไม่ถูกต้อง");
                    username.value = "";
                    password.value = "";
                    username.focus();
                }
            });

            return false;
        }
    </script>
</body>

</html>