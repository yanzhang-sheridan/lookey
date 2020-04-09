 <?php  
 defined('BASEPATH') OR exit('No direct script access allowed');  
 class Register extends CI_Controller {

 	public function __construct(){
 		parent::__construct();
 		$this->load->library('form_validation');
 		$this->load->library('encrypt');
 		$this->load->model('register_model');

 	}

 	function index(){
 		$this->load->view('register');
 	}

 	function validation(){
 		$this->form_validation->set_rules('user_name','Name','required|trim');
 		$this->form_validation->set_rules('user_email','Email Address','required|trim|valid_email|is_unique[user.email]');
 	$this->form_validation->set_rules('user_password','Password','required|trim');
 		if($this->form_validation->run()){
 			$verification_key = md5(rand());
 			$encryped_password = $this->input->post('user_password');
 				//$this->encrypt->encode($this->input->post('user_password'));
 			$data = array(
 				'name' => $this->input->post('user_name'),
 				'email'=> $this->input->post('user_email'),
 				'password'=> $encryped_password,
 				'verification_key' => $verification_key
 			);

 			$id = $this->register_model->insert($data);
 			if($id>0){

 			// 	$subject = 'please verify email for login';
 			// 	$message = "
	 		// 		<p>".$this->input->post('user_name')."</p>
	 		// 		<p>This is email verification mail from Lookey Login Register system. For complete registration process and login into system. First you want to verify you email by click this <a href='".base_url()."register/verify_email/".$verification_key."'>link</a>.</p>
				// 	    <p>Once you click this link your email will be verified and you can login into system.</p>
				// 	    <p>Thanks,</p>
				// 	    ";
				//  $config = array(
				//      'protocol'  => 'smtp',
				//      'smtp_host' => 'smtpout.secureserver.net',
				//      'smtp_port' => 80,
				//      'smtp_user'  => 'xxxxxxx', 
				//      'smtp_pass'  => 'xxxxxxx', 
				//      'mailtype'  => 'html',
				//      'charset'    => 'iso-8859-1',
				//                    'wordwrap'   => TRUE
				//   );
				//   $this->load->library('email', $config);
				//   $this->email->set_newline("\r\n");
				//   $this->email->from('zhang78@sheridancollege.ca');
				//   $this->email->to($this->input->post('user_email'));
				//   $this->email->subject($subject);
				//   $this->email->message($message);
				//   //if($this->email->send())
				//   {
				//     $this->session->set_flashdata('message', 'Check in your email for email verification mail');
				//     redirect('register');
				//   }
					$id = $this->register_model->enable_email($verification_key);
				// set is_email_verified'  => 'yes'  //enabled accrossed board now, for SMTP not working properly., dshould be disabled later
					$data['message'] = 
	 					'<h1 align="center">Your Email has been successfully verified, now you can login from <a href="'.base_url().'login">here</a></h1>';
	 				$this->load->view('email_verification', $data);
				}	
	 		} else {
	 			$this->index();

	 		}
	 	}

	 	function verify_email(){
	 		if ($this->uri->segment(3)){
	 			$verification_key = $this->uri->segment(3);
	 			if($this->register_model->verify_email($verification_key)){
	 				$data['message'] = '<h1 align="center">Your Email has been successfully verified, now you can login from <a href="'.base_url().'login">here</a></h1>';
	 			} else{
	 			$data['message'] = '<h1 align="center"> Invalid Link</h1>';
	 			}
	 			$this->load->view('email_verification', $data);
	 		}

	 	}

 }

 ?>