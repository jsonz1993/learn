import React from 'react';
import QuestionItem from '../components/QuestionItem';

const QuestionList = React.createClass({
    render() {
        const onVote = this.props.onVote;
        const questions = this.props.questions;
        const questionCompos = questions.map(q=> 
            <QuestionItem
                key={q.id}
                questionKey={q.id}
                title={q.title}
                description={q.description}
                voteCount={q.voteCount}
                onVote={onVote}>
            </QuestionItem>
        );
        return (
            <div id="questions" className="">{questionCompos}</div>
        )
    }
});

QuestionList.propTypes = {
    questions: React.PropTypes.array
};

export default QuestionList;
