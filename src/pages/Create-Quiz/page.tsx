import { Trash2 } from 'lucide-react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { useCreateQuizMutation } from '../../lib/store/feature/apiSlice';
import Loader from '../../common/Loader';

// Validation schema
const CreateQuizValidationSchema = Yup.object({
  quizName: Yup.string().required('Quiz name is required'),
  description: Yup.string().required('Description is required'),
  questions: Yup.array()
    .of(
      Yup.object({
        text: Yup.string().required('Question text is required'),
        options: Yup.object({
          A: Yup.string().required('Option A is required'),
          B: Yup.string().required('Option B is required'),
          C: Yup.string().required('Option C is required'),
          D: Yup.string().required('Option D is required'),
        }),
      }),
    )
    .min(5, 'At least 5 questions are required'),
});

const CreateQuiz = () => {
  const [createQuiz, { isloading }] = useCreateQuizMutation<{
    isloading: boolean;
  }>();
  const initialValues = {
    quizName: '',
    description: '',
    questions: [
      {
        id: 1,
        text: '',
        options: { A: '', B: '', C: '', D: '' },
      },
      {
        id: 2,
        text: '',
        options: { A: '', B: '', C: '', D: '' },
      },
      {
        id: 3,
        text: '',
        options: { A: '', B: '', C: '', D: '' },
      },
      {
        id: 4,
        text: '',
        options: { A: '', B: '', C: '', D: '' },
      },
      {
        id: 5,
        text: '',
        options: { A: '', B: '', C: '', D: '' },
      },
    ],
  };

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    console.log('Form submitted with values:', values);

    try {
      await createQuiz(values);
      toast.success('Quiz Created Successfully');
    } catch (error) {
      console.error('Error submitting quiz:', error);
      toast.error('Error submitting quiz');
      setSubmitting(false);
    }
  };

  if (isloading) {
    return Loader;
  }

  return (
    <>
      <Toaster />
      <div className="rounded-sm border border-stroke bg-white shadow-default">
        <div className="border-b border-stroke py-4 px-6.5">
          <h3 className="font-medium text-black">
            Generate Quiz Questions Here
          </h3>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={CreateQuizValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, isSubmitting }) => (
            <Form>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">Quiz Name</label>
                    <Field
                      name="quizName"
                      type="text"
                      placeholder="Enter Quiz Name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
                    />
                    <ErrorMessage
                      name="quizName"
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

                <FieldArray name="questions">
                  {({ remove, push }) => (
                    <>
                      {values.questions.map((item, index) => (
                        <div key={index} className="w-full">
                          <div className="mb-4.5">
                            <div className="flex flex-row items-center justify-between">
                              <label className="mb-2.5 block text-black">
                                {`Question ${item.id}`}{' '}
                                <span className="text-meta-1">*</span>
                              </label>
                              <span>
                                <button
                                  type="button"
                                  onClick={() => remove(index)}
                                >
                                  <Trash2 color="red" />
                                </button>
                              </span>
                            </div>
                            <Field
                              name={`questions[${index}].text`}
                              placeholder="Enter your question"
                              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
                            />
                            <ErrorMessage
                              name={`questions[${index}].text`}
                              component="div"
                              className="text-red-500"
                            />

                            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 place-items-start my-10">
                              {['A', 'B', 'C', 'D'].map((option) => (
                                <span
                                  key={option}
                                  className="w-full flex flex-row gap-5 items-center justify-start"
                                >
                                  <p className="text-medium">
                                    {option}
                                    <span className="text-meta-1 ml-1">*</span>
                                  </p>
                                  <Field
                                    name={`questions[${index}].options.${option}`}
                                    placeholder={`Enter Option ${option}`}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
                                  />
                                  <ErrorMessage
                                    name={`questions[${index}].options.${option}`}
                                    component="div"
                                    className="text-red-500"
                                  />
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={() =>
                          push({
                            id: values.questions.length + 1,
                            text: '',
                            options: { A: '', B: '', C: '', D: '' },
                          })
                        }
                        className="bg-green-900 text-white rounded-md w-1/4 max-md:w-1/2 max-sm:w-full py-3 px-5 my-10"
                      >
                        Add Question +
                      </button>
                    </>
                  )}
                </FieldArray>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default CreateQuiz;
