<?php

class VisitorsManager extends Model
{
    protected $_table = 'visitors';
    protected $_colID = 'vID';
    protected $_colIndex = 'cookies';
    public $vID;
    public $hits;
    public $ipAddress;
    public $cookies;
    public $useragent;
    public $latitude;
    public $longitude;
    public $date_enreg;
    public $statusCode;
    public $countryName;
    public $countryCode;
    public $regionName;
    public $cityName;
    public $zipCode;
    public $timeZone;
    public $regionCode;
    public $continentCode;
    public $continentName;

    //=======================================================================
    //construct
    //=======================================================================

    public function __construct()
    {
        parent::__construct();
        $this->_modelName = str_replace(' ', '', ucwords(str_replace('_', ' ', $this->_table))) . 'Manager';
    }

    //=======================================================================
    //General getters
    //=======================================================================
    // Get IP
    public function getByIp($ip)
    {
        $data_query = ['where' => ['ipAddress' => $ip], 'return_mode' => 'class', 'class' => get_class($this)];

        return $this->findfirst($data_query);
    }

    //get nb visitor
    public function get_hits()
    {
        $conditions = ['select' => 'hits', 'return_type' => 'single'];
        $nb_hits = $this->find($conditions);
        return $nb_hits;
    }

    //get Gender percentage
    public function genderPer()
    {
        $this->_table = 'utilisateur';
        $conditions = ['select' => 'gender, COUNT(*) as number', 'group_by' => 'gender'];
        $result = $this->find($conditions)->get_results();
        return $result;
    }

    //=======================================================================
    //Statistics - counter
    //=======================================================================

    //Count Users
    public function TotalCountUsers()
    {
        return $this->TotalCount('utilisateur');
    }

    //Count Visitors
    public function TotalCountVisitors()
    {
        return $this->TotalCount('visitors');
    }

    // Count total verified users
    public function VerifiedUsers($status)
    {
        $this->_table = 'utilisateur';
        $conditions = ['where' => ['Verified' => $status], 'return_type' => 'count'];
        $count = $this->find($conditions)->get_results();
        return $count;
    }

    //=======================================================================
    //General setters
    //=======================================================================

    //=======================================================================
    //General Operations
    //=======================================================================

    //Manage visitors
    public function manageVisitors($params = [])
    {
        if (Cookies::exists(VISITOR_COOKIE_NAME)) {
            $v_data = $this->getDetails(Cookies::get(VISITOR_COOKIE_NAME), $this->_colIndex);
            if ($v_data->count() == 1) {
                $v_data->ipAddress = $v_data->ipAddress != $params['ip'] ? $params['ip'] : $v_data->ipAddress;
                $v_data->hits = $v_data->hits + 1;
                $v_data->useragent = $v_data->useragent != Session::uagent_no_version() ? Session::uagent_no_version() : $v_data->useragent;
                $colID = $this->_colID;
                $v_data->id = $v_data->$colID;
                if ($save = $v_data->save()) {
                    return $save;
                }
            }
        }
        return $this->add_new_visitor(H_visitors::getVisitorData('91.173.88.22'));
    }

    //Add new visitor
    public function add_new_visitor($data = [])
    {
        $cookies = $this->get_unique('cookies');
        Cookies::set(VISITOR_COOKIE_NAME, $cookies, COOKIE_EXPIRY);
        if ($data && $this->clean_visitor_data('ip', $this->assign(H::Object_Keys_format($data, H_visitors::new_IpAPI_keys())))) {
            $this->cookies = $cookies;
            $this->useragent = Session::uagent_no_version();
            $this->hits++;
            if ($save = $this->save()) {
                return $save;
            }
        }
        return false;
    }

    //Check visitors data on data base
    public function clean_visitor_data($by, $params = [])
    {
        switch ($by) {
            case 'cookies':
                $data_query = ['where' => ['cookies' => Cookies::get(VISITOR_COOKIE_NAME)], 'return_mode' => 'class'];
            break;
            default:
                $data_query = ['where' => ['ipAddress' => $this->ipAddress], 'return_mode' => 'class'];
        }
        $delete = false;
        $v_data = $this->find($data_query)->get_results();
        if ($v_data && count($v_data) >= 1) {
            foreach ($v_data as $data) {
                $delete = $data->delete();
            }
        }
        return $delete;
    }

    //update nb visitors
    public function update_visitors()
    {
        $this->id = $this->vID;
        $this->hits = $this->get_hits();
        //$hits = $this->save($data, $cond);
        $hits = $this->save('vID');
        return $hits;
    }

    //User/period
    public function usersPerPeriod()
    {
        $this->_table = 'SELECT gender, COUNT(*) as number, MONTH(registerDate) as Month FROM Utilisateur WHERE registerDate ';
        $this->_table .= '>= CURDATE() - INTERVAL 6 MONTH GROUP BY YEAR(registerDate), MONTH(registerDate), gender ASC';
        $result = $this->find()->get_results();
        return $result;
    }

    //User/period
    public function visitorsByCtry()
    {
        $this->_table = 'SELECT countryCode, COUNT(*) as number FROM visitors WHERE date_enreg ';
        $this->_table .= '>= CURDATE() - INTERVAL 12 MONTH GROUP BY countryCode ASC';
        $result = $this->find()->get_results();
        return $result;
    }

    //Users verified and Unverified Percentage
    public function verifiedPer()
    {
        $this->_table = 'utilisateur';
        $conditions = ['select' => 'verified, COUNT(*) as number', 'group_by' => 'verified'];
        $result = $this->find($conditions)->get_results();
        return $result;
    }

    //=======================================================================
    //Posts Maanagement indicators
    //=======================================================================

    //Count Users
    public function TotalCountPosts()
    {
        return $this->TotalCount('posts');
    }

    //=======================================================================
    //Feedback Maanagement indicators
    //=======================================================================
    public function TotalCountFeedback()
    {
        return $this->TotalCount('feedback');
    }

    //=======================================================================
    //Feedback Maanagement indicators
    //=======================================================================
    public function TotalCountNotification()
    {
        return $this->TotalCount('notification');
    }
}
