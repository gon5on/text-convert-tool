const API_ENDPOINT = 'https://fxqz1ne0f7.execute-api.ap-northeast-1.amazonaws.com/production';


//問い合わせ送信
function sendContactForm() {
    let body = document.getElementById('contact-form-body').value;

    //バリデーション
    if (body.length == 0) {
        setContactFormValidationError('内容を入力してください。');
        return;
    }
    if (body.length > 1000) {
        setContactFormValidationError('内容は1,000文字以内で入力してください。');
        return;
    }

    let request_body = JSON.stringify({
        'type': document.getElementById('contact-form-type').value,
        'body': body,
    });

    document.getElementById('report-send-btn').disabled = 'true';

    let req = new XMLHttpRequest();
    req.open('POST', API_ENDPOINT, true);
    req.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    req.send(request_body);

    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            if (req.status == 200) {
                console.log('success!');

                reportComplete();
            } else {
                console.log('error!');
            }
        }
    }
}

//エラー表示
function setContactFormValidationError(msg) {
    document.getElementById('contact-form-body').classList.add('error-input');

    let srcTextError = document.getElementById('contact-form-body-error');
    srcTextError.innerHTML = msg;
    srcTextError.style.display = 'block';
}

//表示リセット
function reportModalReset() {
    document.getElementById('report-complete').style.display = 'none';
    document.getElementById('report-close-btn').style.display = 'none';

    document.getElementById('report-form').style.display = 'block';
    document.getElementById('report-send-btn').style.display = 'block';

    document.getElementById('contact-form-body').classList.remove('error-input');
    document.getElementById('contact-form-body-error').style.display = 'none';

    document.getElementById('report-send-btn').disabled = '';
}

//送信完了
function reportComplete() {
    document.getElementById('contact-form-body').value = '';

    document.getElementById('report-complete').style.display = 'block';
    document.getElementById('report-close-btn').style.display = 'block';

    document.getElementById('report-form').style.display = 'none';
    document.getElementById('report-send-btn').style.display = 'none';
}

//モーダルを閉じ終わった時のイベント
document.getElementById('reportModal').addEventListener('hidden.bs.modal', function () {
    reportModalReset();
});