<?php
class H_upload
{
    //=======================================================================
    //Upload image
    //=======================================================================
    public static function upload_img($path, $file)
    {
        $targetDir = $path[1];
        //filename
        $filename = (pathinfo(basename($file['name']))['filename'] == 'image') ? self::rename_image($file) : basename($file['name']);
        $targetFilePath = $targetDir . DS . $filename;
        $fileType = strtoupper(pathinfo($targetFilePath, PATHINFO_EXTENSION));
        if (!empty($filename)) {
            //allow certain files format
            $allowType = ['JPG', 'PNG', 'JPEG', 'GIF', 'PDF', 'DOC', 'DOCX'];
            if (in_array($fileType, $allowType)) {
                //upload file in the server
                if (move_uploaded_file($file['tmp_name'], $path[0] . $targetFilePath)) {
                    self::syncronize_src_folder($path, $targetFilePath);
                    return $path[2] . $targetFilePath;
                } else {
                    return 'error';
                }
            } else {
                return 'error';
            }
        }
    }

    //synchronize image between src and public folder on dev mod
    public static function syncronize_src_folder($path = [], $img = '')
    {
        if (isset($path) && isset($img)) {
            $imgModel = new ImageManager($path[0], IMAGE_ROOT_SRC);
            $img_infos = $imgModel->get_imagesInfos($img);
            $new_img = $imgModel->resizeImage($img_infos, $img);
            $img_save = $imgModel->saveImage($img_infos, $new_img, $img);
            $imgModel->destroyImage($new_img);
            $imgModel = null;
            return true;
        }
    }

    //rename image
    public static function rename_image($file)
    {
        $ext = pathinfo(basename($file['name']), PATHINFO_EXTENSION);
        return md5(rand()) . '.' . $ext;
    }

    //=======================================================================
    //Validate and upload
    //=======================================================================

    public static function validate_and_upload_file($file, $model)
    {
        $model->fileErr = false;
        $name = array_keys($file)[0] ?? false;
        if (!$name) {
            $path = '';
            return ['success' => true, 'msg' => self::updateModel($path, $model)];
        }
        if ($name && $_FILES[$name]['size'] == 0) {
            $imkKey = self::get_imageKey($model);
            $actual_Path = $model->$imkKey;
            if ($actual_Path == US . 'kngell' . US . 'public' . US . 'assets' . US . 'img' . US . 'user_profile' . US . 'avatar.png' || $actual_Path == '') {
                $path = self::get_path($model)[0] . 'user_profile/avatar.png';
                $path = PROOT . 'p' . ltrim($path, ROOT);
                return ['success' => true, 'msg' => self::updateModel($path, $model)];
            } else {
                return ['success' => true, 'msg' => self::updateModel($actual_Path, $model)];
            }
        }
        if ($file[$name]['size'] > 4000000) {
            return ['success' => false, 'msg' => FH::showMessage('danger', 'La taille du fichier ne doit pas dépasser 4000 kb')];
        }
        $actual_Path = self::modelImageField($model);
        if ($actual_Path != null && basename($actual_Path) != 'avatar.pnp') {
            $del = file_exists(rtrim(ROOT, PROOT) . $actual_Path) ? self::deleteImage($actual_Path, $model) : '';
        }
        $path = self::upload_img(self::get_path($model), $file[$name]);
        if ($path != '/kngell/error') {
            return ['success' => true, 'msg' => self::updateModel($path, $model)];
        } else {
            return ['success' => false, 'msg' => FH::showMessage('danger', 'le fichier doit être une image ou un pdf ')];
        }
    }

    //Delete Image
    private static function deleteImage($path, $m)
    {
        if ($m->getAllbyParams([self::get_imageKey($m) => $path])->count() <= 1) {
            unlink(rtrim(ROOT, PROOT) . $path);
            unlink(rtrim(ROOT, PROOT) . str_replace('public', 'src', $path));
            return true;
        }
        return false;
    }

    //re-arrange files
    public static function reArrayFiles($files, $m)
    {
        $fileAry = [];
        $file_count = count($files['name']);
        $file_keys = array_keys($files);

        for ($i = 0; $i < $file_count; $i++) {
            foreach ($file_keys as $key) {
                $fileAry[$i][$key] = $files[$key][$i];
            }
        }
        return $fileAry;
    }

    //update model
    private static function updateModel($path, $model)
    {
        $table = $model->get_tableName();
        $md = $model;
        switch ($table) {
            case 'realisations':
                $md->brand = $path;
                break;
            case 'users':
                $md->profileImage = $path;
                break;
            case 'posts':
                $md->postImg = $path;
                break;
            case 'candidatures':
                $md->cv = $path;
                break;
            case 'formations_inscriptions':
                $md->cv = $path;
                break;
            case 'post_file_url':
                $md->fileUrl = $path;
                break;

            default:
                // code...
                break;
        }
        return $md;
    }

    //Get image key
    private static function get_imageKey($model)
    {
        $table = $model->get_tableName();
        switch ($table) {
            case 'realisations':
                return 'brand';
                break;
            case 'users':
                return 'profileImage';
                break;
            case 'posts':
                return 'postImg';
                break;
            case 'candidatures':
                return 'cv';
                break;
            case 'formations_inscriptions':
                return 'cv';
                break;
            case 'post_file_url':
                return 'fileUrl';
                break;
            default:
                // code...
                break;
        }
    }

    //get path
    private static function get_path($model)
    {
        $table = $model->get_tableName();
        switch ($table) {
            case 'realisations':
                $path = [IMAGE_ROOT, 'brand', IMG];
                break;
            case 'users':
                $path = [IMAGE_ROOT, 'users', IMG];
                break;
            case 'posts':
                $path = [IMAGE_ROOT, 'blog-post', IMG];
                break;
            case 'candidatures':
                $path = [UPLOAD_ROOT, 'candidats', UPLOAD];
                break;
            case 'post_file_url':
                $path = [UPLOAD_ROOT, 'postsImg', UPLOAD];
                break;
            default:
                // code...
                break;
        }
        return $path;
    }

    // Image field
    private static function modelImageField($model)
    {
        switch ($model->get_tableName()) {
            case 'realisations':
                return $model->brand;
                break;
            case 'users':
                return $model->profileImage;
                break;
            case 'candidatures':
                return $model->cv;
                break;
            case 'posts':
                return $model->postImg;
                break;
            case 'post_file_url':
                return $model->fileUrl;
                break;

            default:

                break;
        }
    }

    //upload post Url base 64
    public static function uploadPostUrl($postContent)
    {
        $dom = new \DomDocument('1.0', 'UTF-8');
        libxml_use_internal_errors(true);
        $dom->loadHtml($postContent);
        $images = $dom->getElementsByTagName('img');
        $bs64 = 'base64'; //variable to check the image is base64 or not
        foreach ($images as $k => $img) {
            $data = $img->getAttribute('src');
            if (strpos($data, $bs64) == true) { //if the Image is base 64
                $data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $data));
                $image_name = 'post_url' . time() . $k . '.png';
                $path = UPLOAD_ROOT . 'postsImg' . DS . $image_name;
                file_put_contents($path, $data);
                $img->removeAttribute('src');
                $img->setAttribute('src', $image_name);
            } else { //put '/' to prevent lossing image  actual path
                $image_name = '/' . $data;
                $img->setAttribute('src', $image_name);
            }
        };
        $editor_content_save = $dom->saveHTML();
        return $editor_content_save;
    }

    //manage upload image un save
    public static function manage_uploadImage($lastID, $table, $data)
    {
        if (in_array($table, ['posts', 'realisations']) && isset($data['imageUrlsAry'])) {
            $imgUrlsAry = explode(',', $data['imageUrlsAry']);
            $tempUrls = (new PostFileUrlManager())->getAllbyIndex('IS NULL');
            $tempUrls->delete('imgID', $lastID . $table);
            if ($tempUrls->count() > 0) {
                foreach ($imgUrlsAry as $key => $url) {
                    foreach ($tempUrls->get_results() as $urlModel) {
                        if ($url == $urlModel->fileUrl) {
                            $urlModel->id = $urlModel->pfuID;
                            $urlModel->imgID = $lastID . $table;
                            if ($urlModel->save()) {
                                unset($imgUrlsAry[$key]);
                            }
                        }
                    }
                }
            } elseif (!empty(array_filter($imgUrlsAry))) {
                foreach ($imgUrlsAry as $key => $url) {
                    $tempUrls->imgID = $lastID . $table;
                    $tempUrls->fileUrl = $url;
                    if ($tempUrls->save()) {
                        unset($imgUrlsAry[$key]);
                    }
                }
            }
            $tempUrls->deleteAllNullIndex();
            self::removeUnusedUrls();
        }
    }

    //remove unused urls
    public static function removeUnusedUrls()
    {
        $postsFiles = array_diff(scandir(UPLOAD_ROOT . 'postsImg'), ['.', '..']);
        $urls = (new PostFileUrlManager())->getAllItem();
        $urlsAry = array_column($urls->get_results(), 'fileUrl');
        foreach ($postsFiles as $key => $file) {
            if (!in_array(UPLOAD . 'postsImg' . DS . $file, $urlsAry)) {
                unlink(UPLOAD_ROOT . 'postsImg' . DS . $file);
                $urls->delete('fileUrl', UPLOAD . 'postsImg' . DS . $file);
            }
        }
    }
}
