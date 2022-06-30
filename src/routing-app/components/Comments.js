import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./Comments.module.css"
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const params = useParams();
  const { quoteId } = params;
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    // sendRequest(quoteId);
  }, []);

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {/* {comments} */}
    </section>
  );
};

export default Comments;
