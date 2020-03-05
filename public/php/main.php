<?php
include './dbh.php';

// @POST Request for gettig chats
if (isset($_POST['loadData'])) {
    $projectId = mysqli_real_escape_string($conn, $_POST['projectId']);
    $sql = "SELECT * FROM message WHERE projectId = '$projectId';";
    $result = mysqli_query($conn, $sql);
    $resultChk = mysqli_num_rows($result);
    if ($resultChk < 1) {
        echo '
        <span class="">
            <p class="h4 text-center" style="margin-top: 15%;">No Message Yet</p>
            <!-- <img src="https://media1.giphy.com/media/eonIj5bw871io/source.gif" class="img-fluid w-50" alt="No Message" srcset=""> -->
        </span>
        ';
    } else {
        while ($row = mysqli_fetch_assoc($result)) {
            echo '
                <div class="card mt-2 card-body">
                    <h6 class="card-subtitle mb-2 text-muted">
                    <span><i class="fas text-primary mr-1 h5 fa-user-alt"></i></span>
                    '.$row['msg_from_name'].'</h6>
                    <p class="h5">'.$row['msg'].'</p>
                    <span class="float-right">
                    <small id="emailHelp" class="form-text text-muted">'.$row['msg_date'].'</small>
                    </span>
                </div>
            ';
        }
    }
}
// @POST Request for sending Message
if (isset($_POST['messageSend'])) {
    $user = mysqli_real_escape_string($conn, $_POST['user']);
    $message = mysqli_real_escape_string($conn, $_POST['message']);
    $projectId = mysqli_real_escape_string($conn, $_POST['projectId']);
    $userId = mysqli_real_escape_string($conn, $_POST['userId']);
    $date = mysqli_real_escape_string($conn, $_POST['date']);
    $sql = "INSERT INTO message (projectId, msg_from, msg_from_name, msg, msg_date) VALUES ('$projectId', '$userId', '$user', '$message', '$date');";
    mysqli_query($conn, $sql);
}
?>