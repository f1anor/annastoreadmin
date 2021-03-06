import React from "react";
import Title from "Common/Title/Title";
import css from "./Comments.module.css";
import { Route, Redirect } from "react-router-dom";
import FindContainer from "./Find/FindContainer";
import InfoContainer from "./Info/InfoContainer";
import MainTableContainer from "./MainTable/MainTableContainer";

//FIXME: Переделать редирект
const Comments = ({ id, isDisabled }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <Title anim={isDisabled} className={css.title}>
          Комментарии
        </Title>
        <div className={css.layout}>
          <div className={css.leftSide}>
            <InfoContainer id={id} />
            <FindContainer id={id} />
          </div>
          <div className={css.rightSide}>
            <MainTableContainer id={id} isDisabled={isDisabled} />
          </div>
        </div>
        {/* <Route
          path="/comments/"
          render={() => <Redirect to="/comments/?page=1" />}
        /> */}
      </div>
    </div>
  );
};

export default Comments;
