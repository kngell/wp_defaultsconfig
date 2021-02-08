<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
use \SendGrid\Mail\Mail;

class H
{
	private static $_mail_instance = null;

	private static $_fb_instance = null;

	//=======================================================================
	//Getters
	//=======================================================================
	//mailling instance
	public static function getMailingInstance()
	{
		if (!isset(self::$_mail_instance)) {
			self::$_mail_instance = new PHPMailer();
		}

		return self::$_mail_instance;
	}

	//current Page
	public static function currentPage()
	{
		$currentPage = $_SERVER['REQUEST_URI'];
		if ($currentPage == '/index.php' || $currentPage == PROOT || $currentPage == PROOT . 'home/index') {
			return PROOT . 'home';
		}

		return $currentPage;
	}

	public static function getObjectProperties($obj)
	{
		return get_object_vars($obj);
	}

	public static function currentUser()
	{
		return UsersrManager::$currentLoggedInUser;
	}

	//=======================================================================
	//Timer / Dates
	//=======================================================================
	public static function time_in_ago($timestamps)
	{
		date_default_timezone_set('Europe/Amsterdam');

		$timestamps = strtotime($timestamps) ? strtotime($timestamps) : $timestamps;

		$time = time() - $timestamps;

		switch ($time) {
				//secondes
			case $time < 60:
				return 'Just Now!';
				break;
				//minutes
			case $time >= 60 && $time < 3600:
				return (round($time / 60) == 1) ? 'a minutes ago' : round($time / 60) . ' minutes ago';
				break;
				//hours
			case $time >= 3600 && $time < 86400:
				return (round($time / 3600) == 1) ? 'an hours ago' : round($time / 3600) . ' hours ago';
				break;
				//days
			case $time >= 86400 && $time < 604800:
				return (round($time / 86400) == 1) ? 'a day ago' : round($time / 86400) . ' days ago';
				break;
				//weeks
			case $time >= 604800 && $time < 2600640:
				return (round($time / 604800) == 1) ? 'a week ago' : round($time / 604800) . ' weeks ago';
				break;
				//month
			case $time >= 2600640 && $time < 31207680:
				return (round($time / 2600640) == 1) ? 'a month ago' : round($time / 2600640) . ' months ago';
				break;
				//years
			case $time >= 31207680:
				return (round($time / 31207680) == 1) ? 'a year ago' : round($time / 31207680) . ' years ago';
				break;
		}
	}

	public static function getdysplayAllConditions($data, $type = '')
	{
		$cond = [];
		switch ($data) {
			case 'feedback':
				$cond = ['return_mode' => 'class', 'where' => ['replied' => !1]];
				break;
			case 'notification':
				$cond = ['return_mode' => 'class', 'where' => ['type' => $type]];
				break;

			default:
				$cond = ['return_mode' => 'class'];
				break;
		}

		return $cond;
	}

	public static function keysArr($table)
	{
		switch ($table) {
			case 'categories':
				return ['ecategorie' => 'categorie'];
				break;

			default:
				return ['epostID' => 'postID', 'etitle' => 'postTitle', 'e_postContent' => 'postContent', 'eauthor' => 'postAuthor', 'epost_img' => 'postImg', 'epost_status' => 'postStatus'];
				break;
		}
	}

	public static function usersCharts($data)
	{
		$months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		$month = array_values(array_unique(array_column($data, 'Month')));
		$gender = array_filter(array_unique(array_column($data, 'gender')));
		$number = [];
		$monthStr = [];
		$i = 0;
		foreach ($month as $key => $mois) {
			$items = array_filter($data, function ($elts) use ($mois) {
				return $elts['Month'] == $mois;
			});
			if ((int)$month[$i] - 1 == 0) {
				$monthStr[] = $months[(int)$month[$i] - 1];
			}
			if (!in_array($months[(int)$month[$i] - 1], $months)) {
				$monthStr[] = $months[(int)$month[$i] - 1];
			}
			$i++;
			foreach ($items as $key => $value) {
				if (!empty($value['gender'])) {
					$g = array_column($items, 'gender');
					if (in_array('Male', $g) && in_array('Female', $g)) {
						$number[$value['gender']][] = (int)$value['number'];
					} else {
						$number['Male'][] = (in_array('Male', $g) && $value['gender'] == 'Male') ? (int)$value['number'] : 0;
						$number['Female'][] = (in_array('Female', $g) && $value['gender'] == 'Female') ? (int)$value['number'] : 0;
					}
				} else {
					if (empty($number)) {
						$number = array_fill_keys($gender, [0]);
					}
				}
			}
		}

		return ['month' => $monthStr, 'gender' => array_keys($number), 'number' => $number];
	}

	public static function visitorsCharts($data)
	{
		$vsData = [];
		if ($data != '') {
			foreach ($data as $key => $value) {
				if (!empty($value['countryCode']) && $value['countryCode'] != '-') {
					$vsData[] = (object)$value;
				}
			}
		}

		return $vsData;
	}

	public static function cleanGenderData($data)
	{
		$vsData = [];
		foreach ($data as $key => $value) {
			if (!empty($value['gender'])) {
				$vsData[] = (object)$value;
			}
		}

		return $vsData;
	}

	public static function getIP()
	{
		if (isset($_SERVER['HTTP_CLIENT_IP'])) {
			return $_SERVER['HTTP_CLIENT_IP'];
		} elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
			return $_SERVER['HTTP_X_FORWARDED_FOR'];
		} else {
			return isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '';
		}
	}

	public static function getVisitorData()
	{
		$ipinfodb = new IPInfoDB(IP_KEY);
		$results = $ipinfodb->getCity(self::getIP());
		//'91.173.88.22';self::getIP();

		//$query = file_get_contents('http://ip-api.com/json/' . $ip);
		// $query = file_get_contents("http://www.geoplugin.net/json.gp?ip=" . $ip);
		//$query = file_get_contents('http://api.ipinfodb.com/v3/ip-city/?key=' . IP_KEY . '&format=json&ip='. $ip);
		//$query = json_decode($query);
		//if ($query) { //$query['status'] == 'success' || $query && $query->statusCode == 'OK'
		//    return $query;
		// }

		if (!empty($results) && is_array($results)) {
			return json_encode($results);
		}
	}

	// Facebook Helpers
	// public static function get_Fb_Instance($token = '')
	// {
	//     if (!isset(self::$_fb_instance)) {
	//         self::$_fb_instance = new \Facebook\Facebook([
	//         'app_id' => FB_APP_ID,
	//         'app_secret' => FB_APP_SECRET,
	//         'default_graph_version' => FB_GRAPH_VERSION,
	//         'default_access_token' => $token,
	//     ]);
	//     }
	//     return self::$_fb_instance;
	// }
	// public static function makeFacebookApiCall($endpoint, $params)
	// {
	//     $ch = curl_init();
	//     curl_setopt($ch, CURLOPT_URL, $endpoint . '?' . http_build_query($params));
	//     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	//     curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

	//     $fbResponse = curl_exec($ch);
	//     $fbResponse = json_decode($fbResponse, true);
	//     curl_close($ch);

	//     return [
	//         'endpoint'=>$endpoint,
	//         'params'=>$params,
	//         'has-errors'=>isset($fbResponse['error']) ? true : false,
	//         'error_message'=>isset($fbResponse['error']) ? $fbResponse['error']['message'] : '',
	//         'fb_response'=>$fbResponse
	//     ];
	// }
	// public static function getFacebookLoginUrl()
	// {
	//     $fb = self::get_Fb_Instance();
	//     $helper = $fb->getRedirectLoginHelper();
	//     $data = ['email'];
	//     return $helper->getLoginUrl(FB_LOGIN_URL, $data);
	// }

	// public static function getAccessTokenWithCode($code)
	// {
	//     $endpoint = 'https://www.facebook.com/'. FB_GRAPH_VERSION .'/oauth/access_token';
	//     $params = [
	//         'client_id'=>FB_APP_ID,
	//         'redirect_uri'=>FB_LOGIN_URL,
	//         'state'=>FB_GRAPH_STATE,
	//         'code'=>$code
	//     ];
	//     return self::makeFacebookApiCall($endpoint, $params);
	// }

	public static function newKeys_geoplugin()
	{
		return ['geoplugin_request' => 'ipAddress', 'geoplugin_status' => 'statusCode', 'geoplugin_delay' => 'delay', 'geoplugin_credit' => 'credit', 'geoplugin_city' => 'cityName', 'geoplugin_regionCode' => 'regionCode', 'geoplugin_regionName' => 'regionName', 'geoplugin_areaCode' => 'areaCode', 'geoplugin_dmaCode' => 'dmaCode', 'geoplugin_countryCode' => 'countryCode', 'geoplugin_countryName' => 'countryName',   'geoplugin_inEU' => 'inEU', 'geoplugin_euVATrate' => 'euVATrate', 'geoplugin_continentCode' => 'continentCode',   'geoplugin_continentName' => 'continentName', 'geoplugin_latitude' => 'latitude', 'geoplugin_longitude' => 'longitude',   'geoplugin_locationAccuracyRadius' => 'locationAccuracyRadius', 'geoplugin_timezone' => 'timeZone', 'geoplugin_currencyCode' => 'currencyCode', 'geoplugin_currencySymbol' => 'currencySymbol',   'geoplugin_currencySymbol_UTF8' => 'currencySymbol_UTF8', 'geoplugin_currencyConverter' => 'currencyConverter'];
	}

	public static function newKeys_IpApi()
	{
		return ['query' => 'ipAddress', 'status' => 'statusCode', 'city' => 'cityName', 'region' => 'regionCode', 'country' => 'countryName',  'lat' => 'latitude', 'lon' => 'longitude',    'timezone' => 'timeZone', 'zip' => 'zipCode'];
	}

	public static function setQueryData($by_user)
	{
		if ($by_user) {
			return  ['where' => ['userID' => UsersrManager::currentUser()->userID], 'return_mode' => 'class'];
		} else {
			return ['return_mode' => 'class'];
		}
	}

	//=======================================================================
	//Sinding Email
	//=======================================================================
	public static function sendmailgrid($to, $subject, $body)
	{
		header('Access-Control-Allow-Origin: *');
		$email = new \SendGrid\Mail\Mail();
		$email->setFrom('admin@kngell.com', "K'nGELL Consulting & Services");
		$email->setSubject($subject);
		$email->addTo($to);
		//$email->addContent("text/plain", "and easy to do anywhere, even with PHP");
		$email->addContent('text/html', $body);
		$sendgrid = new \SendGrid(EMAIL_KEY);
		try {
			$response = $sendgrid->send($email);
			if ($response->statusCode() == 202) {
				return true;
			}
		} catch (Exception $e) {
			return $e->getMessage();
		}
	}

	public static function sendEmailPHP($email, $subject, $body)
	{
		ini_set('dysplay_errors', 1);
		error_reporting(E_ALL);
		$from = 'no-reply@mydomain.com';
		$headers = 'From :' . $from;
		$headers .= PHP_EOL;
		$headers .= 'Return-Path: ' . $email;
		$headers .= PHP_EOL;
		$headers .= 'Reply-To: ' . $email;
		$headers .= PHP_EOL;
		$headers .= 'MIME-Version: 1.0' . PHP_EOL;
		$headers .= 'Content-Type: multipart/mixed;' . PHP_EOL;
		$headers .= ' boundary="boundary_sdfsfsdfs345345sfsgs"';
		if (mail($email, $subject, $body, $headers)) {
			return;
		}

		return 'Server encountered errors!<br>Please try later.';
	}

	public static function sendEmail($email, $subject, $body)
	{
		$mail = self::getMailingInstance();
		$mail->SMTPOptions = [
			'ssl' => [
				'verify_peer' => false,
				'verify_peer_name' => false,
				'allow_self_signed' => true
			],
		];
		try {
			//Server settings
			//$mail->SMTPDebug = SMTP::DEBUG_SERVER;
			$mail->CharSet = 'UTF-8';
			$mail->Encoding = 'base64';
			//$mail->isSMTP();
			//$mail->Host       = 'mail.kngell.com';
			//$mail->SMTPAuth   = true;
			//$mail->Username = USERNAME;
			//$mail->Password = PASSWORD;
			//$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
			//$mail->Port       = 587;
			//Recipient
			//$mail->addCustomHeader(Content-Type', 'text/plain;charset=utf-8');
			$mail->setFrom(NO_REPLY, 'K\'nGELL Consulting');
			$mail->addAddress($email);     // Add a recipient
			$mail->isHTML(true);
			$mail->Subject = $subject;
			$mail->Body = $body;
			//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

			//DKIM
			//$mail->Priority = 3;
			//$mail->From = 'admin@kngell.com';
			//$mail->Sender = 'admin@kngell.com';
			//$mail->FromName = 'K\'nGELL Consulting & Services';
			//$mail->DKIM_domain = 'default._domainkey.kngell.com';
			//$mail->DKIM_private = file_get_contents(FILES .'dkim' . DS .'privateKey.txt');
			//$mail->DKIM_selector = 'default';
			//$mail->DKIM_passphrase = '';
			//$mail->DKIM_identity = $mail->From;
			//$mail->Encoding = "base64";
			if ($mail->send()) {
				return true;
			}
		} catch (Exception $e) {
			return $mail->ErrorInfo;
		}
	}

	// public static function get_Table($table, $user)
	// {
	//     if ($user =="admin") {
	//         return $table.'TableAdmin';
	//     }
	//     return $table.'Table';
	// }

	public static function get_Newkeys($m, $frm_name)
	{
		switch ($m->get_tableName()) {
			case 'candidatures':
				return ['email' => 'remail'];
				break;
			case 'formations_inscriptions':
				return ['email' => 'femail'];
				break;
			case 'newsletters':
				if ($frm_name == 'newsletterinputSidebar-frm') {
					return ['email' => 'emails'];
				} else {
					return ['email' => 'emailf'];
				}
				break;
			case 'formations_inscriptions':
				return ['email' => 'femail'];
				break;
			case 'comments':
				// return ['message'=>'messageR'];
				break;
			case 'contacts':
				return ['email' => 'emailc'];
				break;
			default:
				return;
				break;
		}
	}

	//get Success message
	public static function get_successMsg($m, $action, $method)
	{
		switch ($m->get_tableName()) {
				//Home
			case 'contacts':
				return 'Votre message a été envoyé. </br> Vous recevrez une réponse sous 48h ouvrées.';
				break;
				//admin home
			case 'offre_emploi':
				return 'Votre offre d\'emploi est bien enregistrée!';
				break;
			case 'candidatures':
				return 'Votre candidature est bien enregistrée!';
				break;
			case 'sessions_formations':
				if ($method == 'Add') {
					return 'La session de formation est enregistrée';
				} else {
					return 'La session a été mise à jour.';
				}
				break;
			case 'inscription_formation':
				return 'Votre réservation est prise en compte. voous recevrez de plus amples informations dans les 48h.';
				break;
			case 'newsletters':
				return 'Votre email est bien eregistré!';
				break;
			case 'utilisateur':
				if ($method == 'update') {
					if ($action == 'updateuser') {
						return 'Votre profil a bien été mis à jour!';
					} else {
						return 'Votre profil est bien enregistré';
					}
				}
				break;
			case 'adherents':
				if ($method == 'update') {
					return 'l\'adhérent a été mis à jour avec success!';
				} else {
					return 'Adhérent ajouté avec success!';
				}
				break;
			case 'adherents':
				if ($method == 'update') {
					return 'l\'association a été mis à jour avec success!';
				} else {
					return 'Association ajouté avec success!';
				}
				break;
			case 'posts':
				if ($method == 'Add') {
					return 'Votre article est bien enregistré!';
				} else {
					return 'Votre article a été mis à jour!';
				}
				break;
			case 'realisations':
				if ($method == 'Add') {
					return 'Votre réalisation est bien enregistré!';
				} else {
					return 'Votre  réalisation a été mis à jour!';
				}
				break;
			case 'comments':
				return;
				break;
			default:
				return 'Votre requête est bien prise en compte.';
				break;
		}
	}

	//get Error message
	public static function get_errorMsg($m, $action, $method)
	{
		switch ($m->get_tableName()) {
			case 'realisations':
				return 'Il n\'y a pas de réalisations enregistrées.';
				break;
			case 'programme_formation':
				return 'Aucun programme n\'est enregistré.';
				break;
			case 'sessions_formations':
				if ($action == 'frontend') {
					return "Aucune session de formation n'est programmée!";
				}

				return 'Aucun programme n\'est enregistré.';
				break;
			default:
				return 'Votre requête est bien prise en compte.';
				break;
		}
	}

	//get showAll data
	public static function getShowAllData($model, $request, $item)
	{
		switch (true) {
			case $item['table'] == 'comments':
				return $model->getAll($request->getParams($_REQUEST))->get_results();
				break;
				// case $item['table'] == 'categories':
				//     return $model->getAllbyIndex(0)->get_results();
				// break;
			case in_array($item['table'], ['posts', 'utilisateurs', 'feedback', 'programme_formation']):
				if ($item['method'] == 'showDetails') {
					return (isset($item['user']) && $item['user'] == 'guest') ? $model->getDetails($request->getAll('id'))->outputProgramme($request->getAll('session_id')) : $model->getDetails($request->getAll('id'));
				}

				return !isset($item['user']) ? $model->getAllbyIndex((int)UsersrManager::currentUser()->userID)->get_results() : $model->getAllItem()->get_results();
				break;
			case in_array($item['table'], ['sessions_formations', 'offre_emploi']):
				if ($item['method'] == 'showDetails') {
					return (isset($item['user']) && $item['user'] == 'guest') ? $model->getDetails($request->getAll('id'))->outputHTML() : $model->getDetails($request->getAll('id'));
				}

				return $model->getAllItem($item)->get_results();
				break;
			case in_array($item['table'], ['inscription_formation']):
				return $model->outputInscription($item['id']);
				break;
			default:
				if (isset($item['id'])) {
					return $model->getAllbyIndex((int)$request->getAll('id'))->get_results();
				} else {
					return isset($item['query']) ? $model->getAllItem($item['query'])->get_results() : $model->getAllItem()->get_results();
				}
				break;
		}
	}
}