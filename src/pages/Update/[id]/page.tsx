import { ErrorMessage, Field, Form, Formik } from 'formik';
import {
  useGetQuizByIdQuery,
  useUpdateQuizMutation,
} from '../../../lib/store/feature/apiSlice';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateQuizValidation = Yup.object({
  name: Yup.string().required('Quiz name is required'),
  description: Yup.string().required('Description is required'),
  questions: Yup.array()
    .of(
      Yup.object({
        question: Yup.string().required('Question text is required'),
        options: Yup.object({
          a: Yup.string().required('Option A is required'),
          b: Yup.string().required('Option B is required'),
          c: Yup.string().required('Option C is required'),
          d: Yup.string().required('Option D is required'),
        }).required(),
        answer: Yup.string().required('Correct answer is required'),
      }),
    )
    .required('Questions are required')
    .min(1, 'At least one question is required'),
});

const UpdateQuiz = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: quiz, isLoading: quizLoading } = useGetQuizByIdQuery(id);
  const [initialData, setInitialData] = useState({
    name: '',
    description: '',
    questions: [
      { question: '', options: { a: '', b: '', c: '', d: '' }, answer: '' },
    ],
    createdBy: '',
  });

  const [updateQuiz, { isLoading: updateLoading }] = useUpdateQuizMutation();

  useEffect(() => {
    if (quiz) {
      setInitialData({ ...quiz });
    }
  }, [quiz]);

  useEffect(() => {
    if (!quizLoading && !quiz) {
      toast.error('Quiz not found!');
      navigate('/quiz-listing');
    }
  }, [quiz, quizLoading, navigate]);

  const handleSubmit = async (values: typeof initialData) => {
    const payload = {
      name: values.name,
      description: values.description,
      questions: values.questions.map((item) => ({
        question: item.question,
        answer: item.answer,
        options: item.options,
      })),
    };
    try {
      await updateQuiz({ _id: id, ...payload }).unwrap();
      toast.success('Quiz updated successfully!');
      setTimeout(() => {
        navigate('/quiz-listing');
      }, 3000);
    } catch (error) {
      toast.error('Failed to update quiz!');
    }
  };

  return (
    <>
      <Toaster />
      <div className="rounded-sm border border-stroke bg-white shadow-default">
        <div className="border-b border-stroke py-4 px-6.5">
          <h3 className="font-medium text-black">Update Quiz</h3>
        </div>

        <Formik
          initialValues={initialData}
          enableReinitialize={true}
          validationSchema={UpdateQuizValidation}
          onSubmit={handleSubmit}
        >
          {({ values, isSubmitting }) => (
            <Form>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">Quiz Name</label>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Enter Quiz Name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Description
                    </label>
                    <Field
                      name="description"
                      type="text"
                      placeholder="Enter Description"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>

                {/* Questions Section */}
                {values.questions.map((question, index) => (
                  <div key={index} className="mb-4">
                    <label className="block text-black">
                      Question {index + 1}
                    </label>
                    <Field
                      name={`questions[${index}].question`}
                      type="text"
                      placeholder="Enter Question"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
                    />
                    <ErrorMessage
                      name={`questions[${index}].question`}
                      component="div"
                      className="text-red-500"
                    />

                    <div className="mt-4 grid grid-cols-2 gap-4">
                      {['a', 'b', 'c', 'd'].map((option) => (
                        <div key={option}>
                          <label className="block text-black">
                            Option {option.toUpperCase()}
                          </label>
                          <Field
                            name={`questions[${index}].options.${option}`}
                            type="text"
                            placeholder={`Enter Option ${option.toUpperCase()}`}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
                          />
                          <ErrorMessage
                            name={`questions[${index}].options.${option}`}
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      ))}
                    </div>

                    <label className="block text-black mt-4">
                      Correct Answer
                    </label>
                    <Field
                      name={`questions[${index}].answer`}
                      as="select"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
                    >
                      <option value="">Select Correct Answer</option>
                      {['a', 'b', 'c', 'd'].map((option) => (
                        <option key={option} value={option}>
                          Option {option.toUpperCase()}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name={`questions[${index}].answer`}
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={isSubmitting || updateLoading}
                  className="mt-6 w-full bg-primary p-3 text-white font-medium rounded"
                >
                  {isSubmitting || updateLoading
                    ? 'Updating...'
                    : 'Update Quiz'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default UpdateQuiz;
