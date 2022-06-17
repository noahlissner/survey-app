import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Checkboxes from '../components/SurveyQuestions/Checkboxes';
import LongText from '../components/SurveyQuestions/LongText';
import MultipleChoice from '../components/SurveyQuestions/MultipleChoice';
import ShortText from '../components/SurveyQuestions/ShortText';
import Switcher from '../components/Switcher';
import { surveyAccess } from '../services/fetchSurvey';

class Option {
	constructor(public _id: string, public text: string) {}
}

class Questions {
	constructor(
		public surveyType: string,
		public name: string,
		public question: string,
		public _id: string,
		public answer: string,
		public options?: Option[]
	) {}
}

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

			let tempArr: Questions[] = [];
			questions.forEach((item: Questions) => {
				const question = new Questions(
					item.surveyType,
					item.name,
					item.question,
					item._id,
					'',
					[]
				);

				item.options?.forEach((opt) => {
					const option = new Option(opt._id, opt.text);
					question.options?.push(option);
				});
				tempArr.push(question);
			});
			setAnswers(tempArr);
		};

		fetchSurvey();
	}, [slug]);

	const handleAnswer = (_id: string, answer: any) => {
		const tempArr = [...answers];
		const index = answers.findIndex((question: any) => question._id === _id);
		tempArr[index].answer = answer;
		setAnswers(tempArr);
		console.log(answer);
	};

	// console.log(answers);

	return (
		<div
			id='surveys'
			className='h-screen flex items-center flex-col bg-gradient-to-r from-blue-100 to-blue-300 dark:from-blue-700 dark:to-blue-800'
		>
			<div className='absolute top-0 right-0 m-5'>
				<Switcher />
			</div>
			<div className='h-full p-10 lg:p-0 lg:w-9/12 flex items-center justify-center flex-col gap-5 dark:text-white'>
				<div className='mb-5 self-start w-full'>
					<h1>{survey.name}</h1>
					<h2>Questions: {questions.length}</h2>
				</div>
				{questions.map((question: any, key: number) => {
					if (question.surveyType === 'Short Text') {
						return (
							<ShortText handler={handleAnswer} key={key} data={question} />
						);
					} else if (question.surveyType === 'Multiple Choice') {
						return <MultipleChoice key={key} data={question} />;
					} else if (question.surveyType === 'Long Text') {
						return <LongText key={key} data={question} />;
					} else if (question.surveyType === 'Checkboxes') {
						return <Checkboxes key={key} data={question} />;
					}
				})}
			</div>
		</div>
	);
};

export default SurveySlug;
