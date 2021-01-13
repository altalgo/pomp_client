import React, { useEffect, useRef } from 'react';
import axios from 'axios';

export default function HocComponent(SpecificComponent, option) {
  //null    =>  아무나 출입이 가능한 페이지
  //true    =>  로그인한 유저만 출입이 가능한 페이지
  //false   =>  로그인한 유저는 출입 불가능한 페이지
  function AuthCheck(props) {
    let user = useRef(null);
    useEffect(() => {
      axios.get('/api/auth/user').then((response) => {
        if (!response.data.isAuth) {
          if (option) {
            user.current = response.data.username;
            props.history.push('/');
          }
        } else {
          if (option === false) {
            props.history.push('/forms');
          }
        }
      });
    }, [props.history]);
    return <SpecificComponent user={user.current} />;
  }
  return AuthCheck;
}
