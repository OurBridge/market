// 유효성 검사

// 이메일 유효성 검사
export const validEmailCheck = (obj) => {
    const pattern =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return obj.match(pattern) != null;
  };
  