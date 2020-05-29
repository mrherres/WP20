<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Leap Year',
    'items' => Array(
        'News' => '/WP20/assignment3/index.php',
        'Add news item' => '/WP20/assignment3/news_add.php',
        'Leap Year' => '/WP20/assignment3/leapyear.php',
        'Simple Form' => '/WP20/assignment3/simple_form.php'
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
?>
<?php
if(isset($_POST["name"])) {
    if ($_POST["name"] != "" && ($_POST["place"] != "")) {
        echo "<h1>Welcome " . $_POST["name"] . "!</h1>";
        if ($_POST["place"] == "Groningen" || $_POST["place"] == "groningen") {
            echo "<p>You're from Groningen! Moi!</p>";
        } else {
            echo "<p>You're from " . $_POST["place"] . "!</p>";
        }
        echo "<p>The next 5 leapyears, this will be your age!</p>";
    }
}
if(isset($_POST["age"])) {
    if ($_POST["age"] != ""){
        echo "<div class='row'>
                <div class='col-md-6'>
                    <table class='table'>
                        <thead>
                            <tr>
                                <th scope='row'>Year</th>
                                <th scope='row'>Age</th>   
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2024</td>                            
                                <td>".($_POST["age"] + 4)."</td>
                            </tr>
                            <tr>
                                <td>2028</td>                            
                                <td>".($_POST["age"] + 8)."</td>
                            </tr>
                            <tr>
                                <td>2032</td>                            
                                <td>".($_POST["age"] + 12)."</td>
                            </tr>
                            <tr>
                                <td>2036</td>                            
                                <td>".($_POST["age"] + 16)."</td>
                            </tr>
                            <tr>
                                <td>2040</td>                            
                                <td>".($_POST["age"] + 20)."</td>
                            </tr>                                                                                                
                        </tbody>
                    </table>
                </div>
            </div>";
    }
}
?>
    <form action="leapyear.php" class="needs-validation" method="POST" novalidate>
            <div>
                <label for="validationCustom01">Name</label>
                <input type="text" class="form-control" id="validationCustom01" name="name" placeholder="Jan Jansen" required>
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please provide a valid name</div>
            </div>
            <div>
                <label for="validationCustom02">Age</label>
                <input type="text" class="form-control" id="validationCustom02" name="age" placeholder="30" required>
                <div class="invalid-feedback">Please provide a valid age</div>
                <div class="valid-feedback">Cool!</div>
                </div>
            <div>
                <label for="validationCustom03">Email</label>
                <input type="email" class="form-control" id="validationCustom03" name="mail" placeholder="example@example.com" required>
                <div class="invalid-feedback">Please provide a valid email</div>
                <div class="valid-feedback">That's a nice email!</div>
            </div>
            <div>
                <label for="validationCustom04">City</label>
                <input type="text" class="form-control" name="place" id="validationCustom04" placeholder="Amsterdam" required>
                <div class="invalid-feedback">Please provide a valid place of residency</div>
                <div class="valid-feedback">Awesome!</div>
            </div>
            <br/>
            <div id="submit" class="btn btn-primary">Submit</div>
    </form>

<?php
include __DIR__ . '/tpl/body_end.php';
?>
