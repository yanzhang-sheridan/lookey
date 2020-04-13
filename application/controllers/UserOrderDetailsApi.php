<?php
class Userorderdetailsapi extends CI_Controller {
    public $JSON_DATA;
    public function __construct()
    {
        parent::__construct();
        $this->load->model("userorderdetails_model");
        $this->output->set_content_type("application/json");
        $this->output->set_header("Access-Control-Allow-Origin: *");
        $this->output->set_header("Access-Control-Allow-Methods: GET, OPTIONS");
        $this->output->set_header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");

        $this->JSON_DATA = (array)json_decode(file_get_contents("php://input"));
    }
    public function get_all_data(){
        echo $this->userorderdetails_model->get_all();
    }
   

}