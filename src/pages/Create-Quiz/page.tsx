const CreateQuiz = () => {
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default">
        <div className="border-b border-stroke py-4 px-6.5">
          <h3 className="font-medium text-black">
            Generate Quiz Questions Here
          </h3>
        </div>
        <form action="#">
          <div className="p-6.5">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black">Quiz Name</label>
                <input
                  type="text"
                  placeholder="Enter Quiz Name"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                />
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black">Description</label>
                <input
                  type="text"
                  placeholder="Enter Description"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                />
              </div>
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">
                Question 1 <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your question"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
              />
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 place-items-start my-10">
                <span className="w-full flex flex-row gap-5 items-center justify-start">
                  <p className="text-medium">
                    A<span className="text-meta-1 ml-1">*</span>{' '}
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Option"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
                  />
                </span>
                <span className="w-full flex flex-row gap-5 items-center justify-start">
                  <p className="text-medium">
                    B<span className="text-meta-1 ml-1">*</span>{' '}
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Option"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
                  />
                </span>
                <span className="w-full flex flex-row gap-5 items-center justify-start">
                  <p className="text-medium">
                    C<span className="text-meta-1 ml-1">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Option"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
                  />
                </span>
                <span className="w-full flex flex-row gap-5 items-center justify-start">
                  <p className="text-medium">
                    D<span className="text-meta-1 ml-1">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Option"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
                  />
                </span>

                <button
                  type="button"
                  className="bg-primary text-white rounded-md w-1/3 max-md:w-1/2 max-sm:w-full py-3 px-5"
                >
                  {' '}
                  Add +
                </button>
              </div>
            </div>
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">
                Question 2 <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your question"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
              />
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 place-items-start my-10">
                <span className="w-full flex flex-row gap-5 items-center justify-start">
                  <p className="text-medium">
                    A<span className="text-meta-1 ml-1">*</span>{' '}
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Option"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
                  />
                </span>
                <span className="w-full flex flex-row gap-5 items-center justify-start">
                  <p className="text-medium">
                    B<span className="text-meta-1 ml-1">*</span>{' '}
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Option"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
                  />
                </span>
                <span className="w-full flex flex-row gap-5 items-center justify-start">
                  <p className="text-medium">
                    C<span className="text-meta-1 ml-1">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Option"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
                  />
                </span>
                <span className="w-full flex flex-row gap-5 items-center justify-start">
                  <p className="text-medium">
                    D<span className="text-meta-1 ml-1">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Option"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
                  />
                </span>

                <button
                  type="button"
                  className="bg-primary text-white rounded-md w-1/3 max-md:w-1/2 max-sm:w-full py-3 px-5"
                >
                  {' '}
                  Add +
                </button>
              </div>
            </div>
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">
                Question 3 <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your question"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
              />
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 place-items-start my-10">
                <span className="w-full flex flex-row gap-5 items-center justify-start">
                  <p className="text-medium">
                    A<span className="text-meta-1 ml-1">*</span>{' '}
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Option"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
                  />
                </span>
                <span className="w-full flex flex-row gap-5 items-center justify-start">
                  <p className="text-medium">
                    B<span className="text-meta-1 ml-1">*</span>{' '}
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Option"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
                  />
                </span>
                <span className="w-full flex flex-row gap-5 items-center justify-start">
                  <p className="text-medium">
                    C<span className="text-meta-1 ml-1">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Option"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
                  />
                </span>
                <span className="w-full flex flex-row gap-5 items-center justify-start">
                  <p className="text-medium">
                    D<span className="text-meta-1 ml-1">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Option"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
                  />
                </span>

                <button
                  type="button"
                  className="bg-primary text-white rounded-md w-1/3 max-md:w-1/2 max-sm:w-full py-3 px-5"
                >
                  {' '}
                  Add +
                </button>
              </div>
            </div>
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">
                Question 4 <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your question"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
              />
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 place-items-start my-10">
                <span className="w-full flex flex-row gap-5 items-center justify-start">
                  <p className="text-medium">
                    A<span className="text-meta-1 ml-1">*</span>{' '}
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Option"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
                  />
                </span>
                <span className="w-full flex flex-row gap-5 items-center justify-start">
                  <p className="text-medium">
                    B<span className="text-meta-1 ml-1">*</span>{' '}
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Option"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
                  />
                </span>
                <span className="w-full flex flex-row gap-5 items-center justify-start">
                  <p className="text-medium">
                    C<span className="text-meta-1 ml-1">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Option"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
                  />
                </span>
                <span className="w-full flex flex-row gap-5 items-center justify-start">
                  <p className="text-medium">
                    D<span className="text-meta-1 ml-1">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Option"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
                  />
                </span>

                <button
                  type="button"
                  className="bg-primary text-white rounded-md w-1/3 max-md:w-1/2 max-sm:w-full py-3 px-5"
                >
                  {' '}
                  Add +
                </button>
              </div>
            </div>
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">
                Question 5 <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your question"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
              />
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 place-items-start my-10">
                <span className="w-full flex flex-row gap-5 items-center justify-start">
                  <p className="text-medium">
                    A<span className="text-meta-1 ml-1">*</span>{' '}
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Option"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
                  />
                </span>
                <span className="w-full flex flex-row gap-5 items-center justify-start">
                  <p className="text-medium">
                    B<span className="text-meta-1 ml-1">*</span>{' '}
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Option"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
                  />
                </span>
                <span className="w-full flex flex-row gap-5 items-center justify-start">
                  <p className="text-medium">
                    C<span className="text-meta-1 ml-1">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Option"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
                  />
                </span>
                <span className="w-full flex flex-row gap-5 items-center justify-start">
                  <p className="text-medium">
                    D<span className="text-meta-1 ml-1">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Option"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white  dark:focus:border-primary"
                  />
                </span>

                <button
                  type="button"
                  className="bg-primary text-white rounded-md w-1/3 max-md:w-1/2 max-sm:w-full py-3 px-5"
                >
                  {' '}
                  Add +
                </button>
              </div>
            </div>
            <button
              type="button"
              className="bg-green-900 text-white rounded-md w-1/4 max-md:w-1/2 max-sm:w-full py-3 px-5 my-10"
            >
              {' '}
              Add Question +
            </button>

            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateQuiz;
