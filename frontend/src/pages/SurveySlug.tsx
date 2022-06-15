import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Checkboxes from '../components/SurveyQuestions/Checkboxes';
import LongText from '../components/SurveyQuestions/LongText';
import MultipleChoice from '../components/SurveyQuestions/MultipleChoice';
import ShortText from '../components/SurveyQuestions/ShortText';
import { surveyAccess } from '../services/fetchSurvey';

const SurveySlug: React.FC = () => {
	const { slug } = useParams();
	const [survey, setSurvey] = useState<any>([]);
	const [questions, setQuestions] = useState<any>([]);
	const [answers, setAnswers] = useState<any>([]);

	useEffect(() => {
		const fetchSurvey = async () => {
			const result = await surveyAccess({ survey: slug });
			console.log(result[0]);

			setSurvey(result[0]);
			setQuestions(result[0].questions);
		};

		fetchSurvey();
	}, [slug]);

	return (
		<div>
			<h1>{survey._id}</h1>
			<h1>Questions: {questions.length}</h1>
			<br />
			{questions.map((question: any, key: number) => {
				if (question.surveyType === 'Short Text') {
					return <ShortText key={key} data={question} />;
				} else if (question.surveyType === 'Multiple Choice') {
					return <MultipleChoice key={key} data={question} />;
				} else if (question.surveyType === 'Long Text') {
					return <LongText key={key} data={question} />;
				} else if (question.surveyType === 'Checkboxes') {
					return <Checkboxes key={key} data={question} />;
				}
			})}
		</div>
	);
};

export default SurveySlug;
