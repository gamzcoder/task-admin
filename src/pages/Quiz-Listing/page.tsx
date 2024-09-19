import {
  useDeleteQuizMutation,
  useGetQuizQuery,
} from '../../lib/store/feature/apiSlice';
import React, { useEffect, useState } from 'react';
import DataTable from './CustomGrid';
import { Button } from '../../components/ui/button';
import { Loader2, SquarePen, Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '../../components/ui/drawer';
import toast from 'react-hot-toast';

const QuizListing: React.FC = () => {
  const [quizApiData, setQuizApiData] = useState([]);
  const { data: quizData, isLoading } = useGetQuizQuery('');
  const [deleteId, setDeleteId] = useState('');
  const [deleteAction, { isLoading: isLoadingDelete }] =
    useDeleteQuizMutation();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = (id: string) => {
    setDeleteId(id);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (quizData) {
      const updatedData = quizData.quizzes.map(
        (
          item: {
            _id: string;
            name: string;
            description: string;
            createdBy: string;
          },
          index: number,
        ) => ({
          _id: item._id,
          id: index + 1,
          name: item.name,
          description: item.description,
          createdBy: item.createdBy,
        }),
      );
      setQuizApiData(updatedData);
    }
  }, [quizData]);

  const handleDelete = async () => {
    try {
      await deleteAction(deleteId);
      toast.success('Deleted Successfully');
      setIsDrawerOpen(false);
    } catch (err) {
      toast.error('Error in Service');
    } finally {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  const Action = (row: any) => {
    const { _id } = row;

    return (
      <div className="flex flex-row items-center justify-center gap-2">
        <Button
          className="flex flex-row gap-2"
          onClick={() => navigate(`/update-quiz/${_id}`)}
        >
          <SquarePen size={18} />
          Edit
        </Button>
        <Button
          onClick={() => openDrawer(_id)}
          variant="destructive"
          className="flex flex-row gap-2"
        >
          <Trash size={18} />
          Delete
        </Button>
      </div>
    );
  };
  return (
    <>
      <div className=" rounded-sm border border-stroke bg-white shadow-default">
        <div className="border-b border-stroke py-4 px-6.5">
          <h3 className="font-medium text-black">Generated Quizes</h3>
        </div>
        <div>
          {isLoading ? (
            <>
              <Loader2 className="animate-spin text-primary" size={32} />
            </>
          ) : (
            <DataTable
              data={quizApiData}
              count={7}
              cols={['id', 'name', 'description', 'createdBy']}
              actionComp={Action}
            />
          )}
        </div>
      </div>

      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <DrawerContent className="flex flex-col items-center justify-center gap-4 mb-4 mt-5">
          {isLoadingDelete && (
            <Loader2 className="animate-spin text-primary" size={32} />
          )}
          <DrawerHeader className="flex flex-col items-center justify-center p-2">
            <DrawerTitle>Want To Delete Quiz</DrawerTitle>
            <DrawerDescription>Are you Sure</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-row items-center justify-center gap-4 w-full">
            <Button variant="destructive" onClick={() => handleDelete()}>
              Yes
            </Button>
            <Button onClick={closeDrawer}>No</Button>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default QuizListing;
