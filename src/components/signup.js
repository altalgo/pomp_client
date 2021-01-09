var validation = {
    'id': {
        status: false,
        message: '아이디를 확인해주세요.'
    },
    'pw': {
        status: false,
        message: '비밀번호를 확인해주세요.'
    },
    'pwCheck': {
        status: false,
        message: '입력한 비밀번호와 같은지 확인해주세요.'
    },
    'name': {
        status: false,
        message: '이름을 입력해주세요.'
    },
    'birthday': {
        status: false,
        message: '생년월일을 확인해주세요.'
    },
    'sex': {
        status: false,
        message: '성별을 확인해주세요.'
    },
    'email': {
        status: false,
        message: '이메일을 확인해주세요.'
    }
}

// 유효성 검사를 위한 check 객체
var check = {
    async id() {
        const idRules = /^[a-z0-9_-]{5,20}$/g;
        let id = document.signup.id.value;
        let p = document.getElementById("id").getElementsByClassName("alarm")[0];
        let res = await fetch(`/signup/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then(function(res) {
            if (res.ok)
                return res.json();
            throw new Error('네트워크 상태가 불안정합니다.');
        }).then(function(data) {
            return data;
        }).catch(function(error) {
            return console.log(error.message);
        });
        // 아이디 중복 체크
        if (res.status === "Success") {
            p.innerText = res.message;
            p.setAttribute("class", "alarm good");
            validation['id'].status = true;
        } else {
            p.innerText = res.message;
            p.setAttribute("class", "alarm caution");
            validation['id'].status = false;
        }
        // 아이디 패턴 검사
        if (!idRules.test(id)) {
            p.innerText = "5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.";
            p.setAttribute("class", "alarm caution");
            validation['id'].status = false;
        } else {
            p.innerText = "사용 가능한 아이디입니다.";
            p.setAttribute("class", "alarm good");
            validation['id'].status = true;
        }
    },

    password() {
        let pw = document.signup.pwd.value;
        let p = document.getElementById("pwd").getElementsByClassName("alarm")[0];
        
        if (pw.length < 8 || pw.length > 16) {
            p.innerText = "8자 이상 16자 이하로 입력해주세요.";
            p.setAttribute("class", "alarm caution");
            validation['pw'].status = false;
        } else if (pw.search(/[A-Z]/g) < 0) {
            p.innerText = "영어 대문자를 최소 1자 이상 포함해주세요.";
            p.setAttribute("class", "alarm caution");
            validation['pw'].status = false;
        } else if (pw.search(/[0-9]/g) < 0) {
            p.innerText = "숫자를 최소 1자 이상 포함해주세요.";
            p.setAttribute("class", "alarm caution");
            validation['pw'].status = false;
        } else if (pw.search(/[!@#$%^&*()?_-~]/g) < 0) {
            p.innerText = "특수문자를 최소 1자 이상 포함해주세요.";
            p.setAttribute("class", "alarm caution");
            validation['pw'].status = false;
        } else {
            p.innerText = "안전한 비밀번호입니다.";
            p.setAttribute("class", "alarm good");
            validation['pw'].status = true;
        }
    },

    passwordCheck() {
        let p = document.getElementById("pwdcheck").getElementsByClassName("alarm")[0];
        if (document.signup.pwd.value !== document.signup.pwdcheck.value) {
            p.innerText = "비밀번호가 일치하지 않습니다.";
            p.setAttribute("class", "alarm caution");
            validation['pwCheck'].status = false;
        } else {
            p.innerText = "비밀번호가 일치합니다.";
            p.setAttribute("class", "alarm good");
            validation['pwCheck'].status = true;
        }
        if (!document.signup.pwdcheck.value) {
            p.innerText = "";
            validation['pwCheck'].status = false;
        }
    },

    name() {
        if (document.signup.name.value) validation['name'].status = true;
        else validation['name'].status = false;
    },

    year() {
        const yearRules = /^[0-9]{4}$/;
        let nowYear = new Date().getFullYear;
        let year = document.signup.year.value;
        let age = nowYear - year;
        let p = document.getElementById("birthday").getElementsByClassName("alarm")[0];
        if (!yearRules.test(year) || age > 99 || nowYear < year) {
            p.innerText = "태어난 년도 4자리를 정확하게 입력하세요.";
            p.setAttribute("class", "alarm caution");
            validation['birthday'].status = false;
        } else if (age < 15) {
            p.innerText = "만 14세 이상만 가입 가능합니다.";
            p.setAttribute("class", "alarm caution");
            validation['birthday'].status = false;
        } else {
            p.innerText = "";
            p.setAttribute("class", "alarm good");
            validation['birthday'].status = true;
        }
    },

    date() {
        let month = parseInt(document.signup.month.value);
        let year = document.signup.year.value;
        let date = document.signup.date.value;
        let dates = [false, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let p = document.getElementById("birthday").getElementsByClassName("alarm")[0];
        if (year % 400 === 0 || (year % 100 != 0 && year % 4 === 0)) dates[2] == 29;
        if (date < 0 || date > dates[month]) {
            p.innerText = "태어난 날짜를 다시 확인해주세요.";
            p.setAttribute("class", "alarm caution");
            validation['birthday'].status = false;
        } else {
            p.innerText = "";
            p.setAttribute("class", "alarm good");
            validation['birthday'].status = true;
        }
    },

    sex() {
        if (document.signup.sex.value) validation['sex'].status = true;
        else validation['sex'].status = false;
    },

    email() {
        let emailRules = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;
        let email = document.signup.email.value;
        let p = document.getElementById("email").getElementsByClassName("alarm")[0];
        if (!emailRules.test(email)) {
            p.innerText = "이메일 주소를 다시 확인해주세요.";
            p.setAttribute("class", "alarm caution");
            validation['email'].status = false;
        } else {
            p.innerText = "";
            p.setAttribute("class", "alarm good");
            validation['email'].status = true;
        }
    },

    pnumber() {
        let pnumberRules = /^010([0-9]{7,8})$/;
        let pnumber = document.signup.pnumber.value;
        let p = document.getElementById("pnumber").getElementsByClassName("alarm")[0];
        if (!pnumberRules.test(pnumber)) {
            p.innerText = "형식에 맞지 않는 번호입니다.";
            p.setAttribute("class", "alarm caution");
            validation['pnumber'].status = false;
        } else {
            p.innerText = "";
            p.setAttribute("class", "alarm good");
            validation['pnumber'].status = true;
        }
    },
    
    interest() {
        let count = document.getElementsByClassName("interest-tag").length;
        let p = document.getElementById("interest").getElementsByClassName("alarm")[0];
        if (count < 3) {
            p.innerText = "3개 이상의 관심사를 입력하세요.";
            p.setAttribute("class", "alarm caution");
            validation['interest'].status = false;
        } else {
            p.innerText = "";
            p.setAttribute("class", "alarm good");
            validation['interest'].status = true;
        }
    }
}

// 폼의 동작을 컨트롤하는 action 객체
var action = {
    // addEventListener로 기능 추가
    addAllEventListener() {
        document.signup.id.addEventListener("blur", check.id);
        document.signup.pwd.addEventListener("blur", check.password);
        document.signup.pwdcheck.addEventListener("blur", check.passwordCheck);
        document.signup.name.addEventListener("blur", check.name);
        document.signup.year.addEventListener("blur", check.year);
        document.signup.month.addEventListener("change", check.date);
        document.signup.date.addEventListener("blur", check.date);
        document.signup.sex.addEventListener("change", check.sex);
        document.signup.email.addEventListener("blur", check.email);
        document.signup.pnumber.addEventListener("blur", check.pnumber);
        document.getElementById("termcontent").addEventListener("scroll", this.activateAgreeButton);
        document.getElementById("resetbutton").addEventListener("click", this.setResetButton);
        document.getElementById("submitbutton").addEventListener("click", this.setSubmitButton);
        document.getElementById("interest").addEventListener("keyup", this.interestHandler);
        document.getElementById("interest").addEventListener("keyup", check.interest);
    },
    // 약관 팝업에서 스크롤이 끝까지 내려갔는지 확인한 후 동의 버튼 활성화
    activateAgreeButton(e) {
        let agreeButton = document.getElementById("agreementButton");
        if (e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight) {
            agreeButton.disabled = false;
            agreeButton.setAttribute("class", "input-button agree");
        }
        // 여기서 this는 대체 뭐
        agreeButton.addEventListener("click", action.checkAgreementValidation);
    },
    // 동의 버튼을 눌렀을 때 팝업 창을 닫고 체크박스에 체크함
    checkAgreementValidation() {
        let checkbox = document.getElementById("agreementcheck");
        checkbox.checked = true;
        document.getElementById('popup').style.display = 'none';
        validation['terms'].status = true;
    },
    // 초기화 버튼
    setResetButton() {
        let conf = confirm("모든 내용을 새로 작성하시겠습니까?");
        if (conf) document.signup.reset();
    },
    // 제출 버튼
    async setSubmitButton() {
        if (Object.values(validation).every((v) => v.status === true)) {
            let tags = document.getElementsByClassName('interest-value');
            let tagArray = [];
            for (var i = 0; i < tags.length; i++)
                tagArray.push(tags.item(i).innerText);
            let interests = tagArray.join(', ');
            let year = document.signup.year.value;
            let month = document.signup.month.value;
            let date = document.signup.date.value;
            let body = {
                id: document.signup.id.value,
                pwd: document.signup.pwd.value,
                name: document.signup.name.value,
                birthday: `${year}/${month}/${date}`,
                sex: document.signup.sex.value,
                email: document.signup.email.value,
                pnumber: document.signup.pnumber.value,
                interest: interests
            };
            let res = await fetch('/signup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            }).then(function(res) {
                if (res.ok)
                    return res.json();
                throw new Error('네트워크 상태가 불안정합니다.');
            }).then(function(data) {
                return data;
            }).catch(function(error) {
                return console.log(error.message);
            });
            self.location.href = '/mypage';
        } else {
            let invalidatedValue = Object.values(validation).find((e) => !e.status);
            alert(invalidatedValue.message);
        }
    },
    // 구현 다 못한 관심사 태깅 함수...
    interestHandler(e) {
        if (e.key === ',') {
            // 관심사 태그 구현
            // TODO: 태깅을 input 안에다가 해야 하는데 어캐하누
            let tag = document.createElement('div');
            let val = document.getElementById("input-tag").value.slice(0, -1);
            tag.className = 'interest-tag';
            tag.innerHTML = '<span class="interest-value">'+ val +'</span><span class="remove-tag">✕</span>';
            if (val) {
                let t = document.getElementById("tags");
                t.insertBefore(tag, t.childNodes[t.childNodes.length-2]);
                document.getElementById("input-tag").value = '';
                let remove = document.getElementsByClassName('remove-tag');
                [].forEach.call(remove, (x) => {
                    x.addEventListener("click", () => {
                        x.parentNode.remove();
                        check.interest();
                    });
                });
                check.interest();
            }
        }
    }
}
// js 파일 내부에서 함수 실행시키는 방법 말고 다른 방법 없나
action.addAllEventListener();