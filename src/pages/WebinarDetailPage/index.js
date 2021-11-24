import { getWebinarDetailAction, initialWebinarDetailAction } from 'actions/creators/webinar';
import Introduction from 'components/Introduction';
import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';

const useStyles = createUseStyles(({ commonStyles }) => {
  return {
    root: {
      ...commonStyles.pageRootStyle,
    },
  };
});

const selector = ({ webinar }) => {
  return {
    webinarDetail: webinar.detail,
  };
};

function WebinarDetailPage() {
  const classes = useStyles();
  const { params } = useRouteMatch();
  const dispatch = useDispatch();

  const { webinarDetail } = useSelector(selector);

  useEffect(() => {
    dispatch(
      getWebinarDetailAction({
        id: params.id,
      })
    );

    return ()=>{
      dispatch(initialWebinarDetailAction());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <Introduction
        title={webinarDetail.title}
        content={webinarDetail.content}
      />
    </div>
  );
}

export default WebinarDetailPage;
