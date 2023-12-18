import { Student } from './student.interface';
import { StudentModel } from './student.model';
import { ObjectId } from 'mongodb';
const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);

  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ _id: new ObjectId(id) });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
