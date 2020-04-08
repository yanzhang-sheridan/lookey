 <?php  
 defined('BASEPATH') OR exit('No direct script access allowed');  
 class Private_area extends CI_Controller {

 	public function __construct(){
 		parent::__construct();
 		if (!$this->session->userdata('id')){
 			redirect('login');
 		}

 	}

 	function index(){
 		echo '<div class="alert alert-secondary" role="alert">
 			<h2 align="center">Welcome to Lookey, '.$this->session->userdata('username').'</h2>';
 		echo  '<p align="center"> 
 				<label><a class="alert-link" href="'.base_url().'private_area/logout">Logout</a></label>
 				</p>';
 		echo '</div>';
 	}

	function logout(){
	 	$data = $this->session->all_userdata();
	 	foreach($data as $row=>$_value){
	 		$this->session->unset_userdata($row);
	 	}
	 	redirect('login');
	}

}

 ?>