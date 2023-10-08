import React, { useState } from "react";
import useInputs from "../../hooks/useInputs";
import {
  requestForgetPw,
  requestModPw,
  sendEmail,
} from "../../utils/requestList";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const [{ id, email, verified, pw, confirm_pw }, handleInputChange] =
    useInputs({
      id: "",
      email: "",
      verified: "",
      pw: "",
      confirm_pw: "",
    });

  const navigate = useNavigate();
  const [verifiedNum, setVerifiedNum] = useState("");
  const [view, setView] = useState(false);
  const [finded, setFinded] = useState(false);
  const [title, setTitle] = useState("비밀번호 찾기");

  const validateEmail = (email) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
  };

  const validatePw = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]+$/;
    return regex.test(password);
  };

  const handleFindPassword = async () => {
    const isValidEmail = validateEmail(email);
    if (isValidEmail) {
      if (id.length !== 0 && id.trim().length !== 0) {
        setView(true);
        const email_ = email.trim();
        const id_ = id.trim();
        const res = await requestForgetPw({
          mem_id: id_,
          mem_email: email_,
        });
        if (res.result === "success") {
          setVerifiedNum(res.numbers);
          toast.success("인증번호가 이메일로 발송되었습니다.");
        } else {
          setView(false);
          toast.error("입력하신 아이디, 이메일이 옳지 않습니다.");
          return;
        }
      } else {
        setView(false);
        toast.error("아이디를 입력해주세요.");
        return;
      }
    } else {
      toast.error("이메일 형식을 확인해주세요.");
      return;
    }
  };

  // 인증번호 확인
  const handleVerify = async () => {
    if (verified.length === 0 || verified.trim().length === 0) {
      toast.error("인증번호를 입력해주세요.");
      return false;
    }
    if (verifiedNum === verified) {
      setTitle("비밀번호 변경");
      setFinded(true);
    }
  };

  // 비밀번호 변경
  const handleChangePw = async () => {
    if (pw !== confirm_pw) {
      toast.error("비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    if (pw.length === 0 || pw.trim().length === 0) {
      toast.error("비밀번호를 입력해주세요.");
      return;
    }

    if (pw.length < 8 || pw.trim().length < 8) {
      toast.error("비밀번호는 8자리 이상 입력해주세요.");
      return;
    }

    if (confirm_pw.length === 0 || confirm_pw.trim().length === 0) {
      toast.error("비밀번호 확인을 입력해주세요.");
      return;
    }

    const isValidPw = validatePw(pw);
    if (isValidPw) {
      const email_ = email.trim();
      const id_ = id.trim();
      const pw_ = pw.trim();

      const res_ = await requestModPw({
        mem_email: email_,
        mem_id: id_,
        mem_pw: pw_,
      });

      if (res_.result === "success") {
        toast.success("비밀번호가 변경 되었습니다.");
        navigate("/login");
      }
    } else {
      toast.error("비밀번호는 영문자와 숫자를 반드시 포함해야합니다.");
    }
  };

  return (
    <div className="md:w-1/3 lg:w-1/4 w-full flex flex-col md:py-24 py-8 h-screen">
      <div className="flex items-center justify-center mb-5">
        <h3 className="font-bold text-3xl">{title}</h3>
      </div>
      <div
        className="w-full bg-white rounded-lg shadow-lg 
      dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 
      dark:border-gray-700"
      >
        {finded ? (
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="">
              <div>
                <div className="mb-3">
                  <input
                    placeholder="새 비밀번호"
                    name="pw"
                    type="password"
                    className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={pw}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <div className="">
                  <input
                    placeholder="새 비밀번호 확인"
                    name="confirm_pw"
                    type="password"
                    className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={confirm_pw}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={handleChangePw}
                className="mt-3 flex w-full justify-center rounded-md bg-blue-600 px-3 py-3
                   font-semibold leading-6 text-white shadow-sm hover:bg-blue-500
                    focus-visible:outline focus-visible:outline-2
                     focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-prigray-400"
              >
                비밀번호 변경
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex justify-center items-center flex-col">
              <p>비밀번호를 재설정할 수 있는</p>
              <p>인증번호를 이메일로 보내드려요.</p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <div>
                <div className="mt-1">
                  <input
                    placeholder="아이디"
                    name="id"
                    className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={id}
                    disabled={view}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <div className="mt-1">
                  <input
                    placeholder="이메일 (가입한 이메일 주소를 입력해주세요.)"
                    name="email"
                    className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={email}
                    disabled={view}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {view && (
                <div>
                  <div className="mt-1">
                    <input
                      placeholder="인증번호"
                      name="verified"
                      className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={verified}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}
              {!view && (
                <button
                  type="button"
                  className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-3
                   font-semibold leading-6 text-white shadow-sm hover:bg-blue-500
                    focus-visible:outline focus-visible:outline-2
                     focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-prigray-400"
                  onClick={handleFindPassword}
                >
                  인증번호 발송
                </button>
              )}
              {view && (
                <button
                  type="button"
                  onClick={handleVerify}
                  className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-3
                 font-semibold leading-6 text-white shadow-sm hover:bg-blue-500
                  focus-visible:outline focus-visible:outline-2
                   focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-prigray-400"
                >
                  인증번호 확인
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forgot;
